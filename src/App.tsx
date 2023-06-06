import "./App.scss";
import "./Login.scss";
import "./Editpage.scss";
import { deleteTodoFunction } from "./assets/functions/functions";
import { useState, useEffect } from "react";
import { TodoWrapper } from "./assets/pages/TodoWrapper";
import { Auth } from "./assets/pages/auth";
import { auth } from "./config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StylesEdit from "./assets/pages/StylesEdit";
import { Archive } from "./assets/pages/Archive";

// Interface for the done TODOS gotten from TodoWrapper
interface IDoneTodo {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
  taskorreminder: string;
  user: string;
  nType: string;
  date: string;
  archived: boolean;
}

interface IColorFunctions {
  change_outerBackgroundColor: (color: string) => void;
  change_innerBackgroundColor: (color: string) => void;
  change_titleTextColor: (color: string) => void;
  change_weeklyCardBG: (color: string) => void;
  change_weeklyCardTxt: (color: string) => void;
  change_buttonIcons: (color: string) => void;
  change_buttonText: (color: string) => void;
  change_formBackgroundColor: (color: string) => void;
  change_itemBackgroundColor: (color: string) => void;
  change_itemText: (color: string) => void;
  change_reminderBackgroundColor: (color: string) => void;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [doneTodoList, setDoneTodoList] = useState<IDoneTodo[]>([]);

  //array that stores all colors that will be used in the app
  const [allColors, setAllColors] = useState({
    outerBackgroundColor: "#334549",
    innerBackgroundColor: "#ffffff",
    titleTextColor: "#005657",
    weeklyCardBG: "#ffffff",
    weeklyBorder: "#005657",
    weeklyCardTxt: "#000000",
    buttonIcons: "#005657",
    buttonText: "#ffffff",
    formBackgroundColor: "#5c72b280",
    itemBackgroundColor: "#ffffff",
    itemText: "#000000",
    reminderBackgroundColor: "#ffde8c",
  });

  useEffect(() => {
    //Fetch the previous todos from LocalStorage
    const storedTodos = localStorage.getItem("doneTodoList");
    if (storedTodos) {
      setDoneTodoList(JSON.parse(storedTodos));
    }

    //useEffect to get all stored colors in localStorage
    Object.keys(allColors).forEach((key) => {
      const stored_indiv_color = localStorage.getItem(key);
      if (stored_indiv_color) {
        setAllColors((prevColors) => ({
          ...prevColors,
          [key]: stored_indiv_color,
        }));
      }
      // console.log(key + " : " + allColors[key]);
    });
  }, []); //the empty array is to make sure the useEffect only runs once

  //useEffect used to  check if the user is authenticated or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    // Cleanup function to unsubscribe from the listener
    return () => unsubscribe();
  }, []);

  //Function to save colors in localStorage
  const ProcessColorSave = (colorName: string, color: string) => {
    //Save in state
    setAllColors((prevColors) => ({ ...prevColors, [colorName]: color }));
    //Save in local Storage
    localStorage.setItem(colorName, color);
  };
  //Function tos change all colors in the apps
  const changeColor: IColorFunctions = {
    change_outerBackgroundColor: (color) => {
      ProcessColorSave("outerBackgroundColor", color);
    },
    change_innerBackgroundColor: (color) => {
      ProcessColorSave("innerBackgroundColor", color);
    },
    change_titleTextColor: (color) => {
      ProcessColorSave("titleTextColor", color);
    },
    change_weeklyCardBG: (color) => {
      ProcessColorSave("weeklyCardBG", color);
    },
    change_weeklyCardTxt: (color) => {
      ProcessColorSave("weeklyCardTxt", color);
    },
    change_buttonIcons: (color) => {
      ProcessColorSave("buttonIcons", color);
    },
    change_buttonText: (color) => {
      ProcessColorSave("buttonText", color);
    },
    change_formBackgroundColor: (color) => {
      ProcessColorSave("formBackgroundColor", color);
    },
    change_itemBackgroundColor: (color) => {
      ProcessColorSave("itemBackgroundColor", color);
    },
    change_itemText: (color) => {
      ProcessColorSave("itemText", color);
    },
    change_reminderBackgroundColor: (color) => {
      ProcessColorSave("reminderBackgroundColor", color);
    },
  };

  //function to get the TodosFrom the child component
  const getDoneTodoList = (doneItems: IDoneTodo[]) => {
    const filteredItems = doneItems.filter((item) => {
      return !doneTodoList.some((doneItem) => doneItem.id === item.id);
    });

    setDoneTodoList((doneTodoList) => [...doneTodoList, ...filteredItems]);

    // Update local storage with the updated doneTodoList state
    localStorage.setItem(
      `doneTodoList`,
      JSON.stringify([...doneTodoList, ...filteredItems])
    );
  };

  //function to delete a TODO
  const deleteDONETodoTask = (id: string) => {
    const updatedTodos = deleteTodoFunction(id, doneTodoList, "doneTodoList");
    setDoneTodoList(updatedTodos);
  };

  return (
    <div
      className="App"
      style={{ backgroundColor: allColors.outerBackgroundColor }}
    >
      {isAuthenticated ? (
        <BrowserRouter>
          <Routes>
            <Route
              path="/Complex-todolist/"
              element={
                <TodoWrapper
                  getDoneTodoList={getDoneTodoList}
                  allColors={allColors}
                />
              }
            />
            <Route
              path="/Complex-todolist/archive"
              element={
                <Archive
                  doneTodoList={doneTodoList}
                  allColors={allColors}
                  deleteDONETodoTask={deleteDONETodoTask}
                />
              }
            />
            <Route
              path="/Complex-todolist/styles"
              element={
                <StylesEdit
                  allColors={allColors}
                  allColorFunctions={changeColor}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;
