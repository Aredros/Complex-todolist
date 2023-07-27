import "./App.scss";
import "./Login.scss";
import "./Editpage.scss";
import React, { useState, useEffect, createContext } from "react";
import { TodoWrapper } from "./assets/pages/TodoWrapper";
import { Auth } from "./assets/pages/auth";
import { auth, db } from "./config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
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
  startTime: string;
  archived: boolean;
  subTask: ITSubtaskTodo[];
}

interface ITSubtaskTodo {
  subTaskCompleted: boolean;
  subTask: string;
  subTaskID: string;
  isSubtaskEditing: boolean;
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

interface IType {
  id: string; // Add ID field to IType interface
  user: string;
  typeName: string;
  color: string;
  icon: string;
  isEditing: boolean;
}

interface IAdvancedC {
  startTimeSettings: boolean;
}

interface ITallAppFile {
  allColors: IAppContext;
  setAllColors: React.Dispatch<React.SetStateAction<IAppContext>>;
  allTypes: IType[] | null | undefined;
  setAllTypes: (types: IType[]) => void;
  allTodos: IDoneTodo[] | null | undefined;
  setAllTodos: (todos: IDoneTodo[]) => void;
  isLoggedIn: boolean;
  advancedConfig: IAdvancedC;
  setAdvancedConfig: (settings: IAdvancedC) => void;
}

//crearting context that will pass the colors and doneTodoList
export const AppContext = createContext<ITallAppFile | undefined>(undefined);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [allTodos, setAllTodos] = useState<IDoneTodo[]>([]); // Array of todo objects
  const [allTypes, setAllTypes] = useState<IType[] | null>([
    {
      id: "1",
      user: "",
      typeName: "No-cat",
      color: "#f8f8f8",
      icon: "",
      isEditing: false,
    },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); //check if the user is logged in or not

  //array that stores all colors that will be used in the app
  const [allColors, setAllColors] = useState({
    outerBackgroundColor: "#334549",
    innerBackgroundColor: "#ffffff",
    mainTitleColor: "#000000",
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

  const [advancedConfig, setAdvancedConfig] = useState<IAdvancedC>({
    startTimeSettings: false,
  });

  useEffect(() => {
    //empty array and local storage
    //localStorage.clear();

    const updateThem = allTypes?.map((type) =>
      type.isEditing === undefined ? { ...type, isEditing: false } : type
    );

    //useEffect to get all stored colors in localStorage
    Object.keys(allColors).forEach((key) => {
      const stored_indiv_color = localStorage.getItem(key);
      if (stored_indiv_color) {
        try {
          setAllColors((prevColors) => ({
            ...prevColors,
            [key]: stored_indiv_color,
          }));
        } catch (error) {
          console.log(`Error parsing stored color for ${key}:`, error);
        }
      }
      // console.log(key + " : " + allColors[key]);
    });

    //Verifying if the user is Anon or not
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(user ? !user.isAnonymous : false);
    });

    return () => {
      unsubscribe();
    };
  }, []); // the empty array is to make sure the useEffect only runs once

  // Get todos from Firestore database //
  useEffect(() => {
    const getTodosFromDatabase = async () => {
      try {
        if (auth.currentUser) {
          // Get the current user's email
          const userEmail = auth.currentUser.email;

          // Create a query to fetch todos where the user is the same as the current user
          const q = query(
            collection(db, "todos"),
            where("user", "==", userEmail)
          );

          // Get the documents that match the query
          const querySnapshot = await getDocs(q);

          // Map the documents to an array of todos
          const todosFromDatabase: IDoneTodo[] = [];
          const todoIds: Set<string> = new Set(); // Set to track unique todo IDs

          querySnapshot.docs.forEach((doc) => {
            const todo = doc.data() as IDoneTodo; // Cast the document data to ITodo
            if (!todoIds.has(todo.id)) {
              // Check if the todo ID is already in the set
              todosFromDatabase.push(todo);
              todoIds.add(todo.id); // Add the todo ID to the set
            }
          });

          // Update the todos state with the retrieved todos
          setAllTodos(todosFromDatabase);

          // Do something with the retrieved todos
          console.log("Todos from database:", todosFromDatabase);
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (isLoggedIn) {
      // Fetch todos from Firebase
      getTodosFromDatabase();
    } else {
      const storedTodos = localStorage.getItem("todosLocal") || "";
      try {
        // Fetch todos from LocalStorage
        setAllTodos(JSON.parse(storedTodos));
      } catch (error) {
        console.log("Error parsing stored todos:", error);
      }
    }

    // Verifying if the user is Anon or not
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(user ? !user.isAnonymous : false);
    });

    return () => {
      unsubscribe();
    };
  }, [isLoggedIn]); // Run the effect whenever the isLoggedIn state changes

  // Get TYPES from Firestore or Localstorage //
  useEffect(() => {
    // Get types from Firestore database
    const getTypesFromDatabase = async () => {
      try {
        if (auth.currentUser) {
          // Get the current user's email
          const userEmail = auth.currentUser.email;

          // Create a query to fetch todos where the user is the same as the current user
          const q = query(
            collection(db, "categories"),
            where("user", "==", userEmail)
          );

          // Get the documents that match the query
          const querySnapshot = await getDocs(q);

          // Map the documents to an array of todos
          const typesFromDatabase: IType[] = [];
          const typeIds: Set<string> = new Set(); // Set to track unique todo IDs

          querySnapshot.docs.forEach((doc) => {
            const type = doc.data() as IType; // Cast the document data to ITodo
            if (!typeIds.has(type.id)) {
              // Check if the todo ID is already in the set
              typesFromDatabase.push(type);
              typeIds.add(type.id); // Add the todo ID to the set
            }
          });

          // Update the todos state with the retrieved todos
          setAllTypes(typesFromDatabase);

          // Do something with the retrieved todos
          console.log("Types from database:", typesFromDatabase);
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (isLoggedIn) {
      // Fetch todos from Firebase
      getTypesFromDatabase();
    } else {
      const storedTypes = localStorage.getItem("typesLocal") || "";
      try {
        // Fetch todos from LocalStorage
        setAllTypes(JSON.parse(storedTypes));
      } catch (error) {
        console.log("Error parsing stored types:", error);
      }
    }

    // Verifying if the user is Anon or not
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(user ? !user.isAnonymous : false);
    });

    return () => {
      unsubscribe();
    };
  }, [isLoggedIn]); // Run the effect whenever the isLoggedIn state changes

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

  /****************************************************************** */

  return (
    <AppContext.Provider
      value={{
        allColors: allColors as IAppContext,
        setAllColors,
        allTypes,
        setAllTypes,
        allTodos,
        setAllTodos,
        isLoggedIn,
        advancedConfig,
        setAdvancedConfig,
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
              <Route path="/Complex-todolist/archive" element={<Archive />} />
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
