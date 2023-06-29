import "./App.scss";
import "./Login.scss";
import "./Editpage.scss";
import { deleteTodoFunction } from "./assets/functions/functions";
import React, { useState, useEffect, createContext } from "react";
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

interface IAppContext {
  outerBackgroundColor: string;
  innerBackgroundColor: string;
  mainTitleColor: string;
  titleTextColor: string;
  weeklyCardBG: string;
  weeklyBorder: string;
  weeklyCardTxt: string;
  buttonIcons: string;
  buttonText: string;
  formBackgroundColor: string;
  itemBackgroundColor: string;
  itemText: string;
  reminderBackgroundColor: string;
}

interface ITallAppFile {
  allColors: IAppContext;
  setAllColors: React.Dispatch<React.SetStateAction<IAppContext>>;
  setDoneTodoList: React.Dispatch<React.SetStateAction<IDoneTodo[]>>;
  doneTodoList: IDoneTodo[];
}

//crearting context that will pass the colors and doneTodoList
export const AppContext = createContext<ITallAppFile | undefined>(undefined);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [doneTodoList, setDoneTodoList] = useState<IDoneTodo[]>([]);

  //array that stores all colors that will be used in the app
  const [allColors, setAllColors] = useState({
    outerBackgroundColor: "#334549",
    innerBackgroundColor: "#ffffff",
    mainTitleColor: "#ffffff",
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

  //function to delete a TODO
  const deleteDONETodoTask = (id: string) => {
    const updatedTodos = deleteTodoFunction(id, doneTodoList, "doneTodoList");
    setDoneTodoList(updatedTodos);
  };

  return (
    <AppContext.Provider
      value={{
        allColors: allColors as IAppContext,
        setAllColors,
        setDoneTodoList,
        doneTodoList,
      }}
    >
      <div
        className="App"
        style={{ backgroundColor: allColors.outerBackgroundColor }}
      >
        {isAuthenticated ? (
          <BrowserRouter>
            <Routes>
              <Route path="/Complex-todolist/" element={<TodoWrapper />} />
              <Route
                path="/Complex-todolist/archive"
                element={
                  <Archive
                    doneTodoList={doneTodoList}
                    deleteDONETodoTask={deleteDONETodoTask}
                  />
                }
              />
              <Route path="/Complex-todolist/styles" element={<StylesEdit />} />
            </Routes>
          </BrowserRouter>
        ) : (
          <Auth />
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
