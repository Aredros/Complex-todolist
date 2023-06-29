import React, { useEffect, useState, useContext, createContext } from "react";
import { AppContext } from "../../App";
import { TodoForm } from "../components/TodoForm";
import { WeeklyDivider } from "../components/WeeklyDivider";
import { TypeForm } from "../components/TypeForm";
import { TypeItem } from "../components/TypeItem/TypeItem";
import { auth, db } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import Navigation from "../components/Navigation";
import DbAndLogOut from "../components/DbAndLogOut";
import { FilterTodoItem } from "../components/FilterTodoItem";
import { DisplayTypes } from "../components/DisplayTypes";

// Define interface for Todo object
interface ITodo {
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
interface IType {
  id: string; // Add ID field to IType interface
  typeName: string;
  color: string;
}

interface ITypesContextValue {
  types: IType[] | null;
  setTypes: (types: IType[]) => void;
  todos: ITodo[] | null;
  setTodos: (todos: ITodo[]) => void;
  isLoggedIn: boolean;
}
//Context to import TODOSlist, the state changer, TYPESlist, its state changer and isLoggedIn boolean
export const TypesContext = createContext<ITypesContextValue>({
  todos: null,
  setTodos: () => {}, // Add a default empty function for setTodos
  types: null,
  setTypes: () => {}, // Add a default empty function for setTypes
  isLoggedIn: false,
});

export const DisplayTypesContext = createContext<{
  setWeekList: (value: boolean) => void;
}>({
  setWeekList: () => {},
});

export const TodoWrapper = () => {
  const { allColors } = useContext(AppContext) || {}; //getting the colors from the context
  //
  const [todos, setTodos] = useState<ITodo[]>([]); // Array of todo objects
  const [types, setTypes] = useState<IType[]>([
    { id: "1", typeName: "No-cat", color: "#f8f8f8" },
  ]); // Array of type objects
  const [weekList, setWeekList] = useState(true); //state for choosing between weekly or daily list
  const [isLoggedIn, setIsLoggedIn] = useState(false); //check if the user is logged in or not
  const [filteredType, setFilteredType] = useState<string | null>(null);

  //Fetch the previous todos from LocalStorage
  useEffect(() => {
    //empty array and local storage
    //localStorage.clear();
    const storedTypes = localStorage.getItem("typesLocal");
    if (storedTypes) {
      setTypes(JSON.parse(storedTypes));
    }
    //Verifying if the user is Anon or not
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(user ? !user.isAnonymous : false);
    });

    return () => {
      unsubscribe();
    };
  }, []); //the empty array is to make sure the useEffect only runs once

  useEffect(() => {
    // Get todos from Firestore database
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
          const todosFromDatabase: ITodo[] = [];
          const todoIds: Set<string> = new Set(); // Set to track unique todo IDs

          querySnapshot.docs.forEach((doc) => {
            const todo = doc.data() as ITodo; // Cast the document data to ITodo
            if (!todoIds.has(todo.id)) {
              // Check if the todo ID is already in the set
              todosFromDatabase.push(todo);
              todoIds.add(todo.id); // Add the todo ID to the set
            }
          });

          // Update the todos state with the retrieved todos
          setTodos(todosFromDatabase);

          // Do something with the retrieved todos
          console.log("Todos from database:", todosFromDatabase);
        }
      } catch (err) {
        console.log(err);
      }
    };

    const storedTodos = localStorage.getItem("todosLocal");
    if (isLoggedIn) {
      // Fetch todos from Firebase
      getTodosFromDatabase();
    } else if (storedTodos) {
      // Fetch todos from LocalStorage
      setTodos(JSON.parse(storedTodos));
    }

    // Verifying if the user is Anon or not
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(user ? !user.isAnonymous : false);
    });

    return () => {
      unsubscribe();
    };
  }, [isLoggedIn]); // Run the effect whenever the isLoggedIn state changes

  //function to log out//
  const logItOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  /****************************************************************** */
  /****************FUNCTIONS TO ALTER THE TYPES */

  //function to delete a Type
  const deleteType = (type: string, id: string) => {
    //check if the type is being used
    if (todos.some((t) => t.nType === type)) {
      //if the type is being use, alert the use
      alert("You cannot delete a type that is being used");
    } else {
      //filter the type to be deleted
      const updatedTypes = types.filter((t) => t.id !== id);
      //save the new types array to local storage
      localStorage.setItem("typesLocal", JSON.stringify(updatedTypes));
      //set the types array to the updated array
      setTypes(updatedTypes);
    }
  };
  /****************************************************************** */
  /***************FUNCTIONS FOR DATES AND CHRONOLOGICALLY ARRANGEMENT */

  // function to sort todos tasks based on date
  const sortTodos = (todos: ITodo[]) => {
    return todos.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  };

  // Get an array of unique weeks that the tasks belong to (using the SortTodos function to sort the tasks by date)
  const weeks = [
    ...new Set(sortTodos(todos).map((todo) => getWeek(todo.date))),
  ];

  // Helper function to get the ISO week number from a date string
  function getWeek(dateString: string) {
    const date = new Date(dateString);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 4 - (date.getDay() || 7));
    const yearStart = new Date(date.getFullYear(), 0, 1);
    const weekNo = Math.ceil(((+date - +yearStart) / 86400000 + 1) / 7);
    return `${date.getFullYear()}-W${weekNo.toString().padStart(2, "0")}`;
  }

  // Function to filter todos by type
  function filterOneItem(type: string) {
    setFilteredType(type);
  }

  return (
    <TypesContext.Provider
      value={{ types, setTypes, todos, setTodos, isLoggedIn }}
    >
      <div
        className={`TodoWrapper ${!weekList && "TodoWrapper--weekly"}`}
        style={{ backgroundColor: allColors?.innerBackgroundColor }}
      >
        <Navigation />
        <h1 style={{ color: allColors?.titleTextColor }}>Week Planner</h1>
        <DisplayTypesContext.Provider value={{ setWeekList }}>
          <DisplayTypes />
        </DisplayTypesContext.Provider>
        <TodoForm />
        {isLoggedIn && <FilterTodoItem filterOneItem={filterOneItem} />}
        {weeks.map(
          (week) =>
            todos.some(
              (todo) => !todo.archived && getWeek(todo.date) === week
            ) && (
              <WeeklyDivider
                key={week}
                parentElement={"TodoWrapper"}
                weekList={weekList}
                week={week}
                todos={todos.filter(
                  (todo) =>
                    getWeek(todo.date) === week &&
                    (!filteredType || todo.nType === filteredType)
                )}
              />
            )
        )}
        <TypeForm />
        <TypeItem deleteType={deleteType} />
        <DbAndLogOut isLoggedIn={isLoggedIn} logItOut={logItOut} />
      </div>
    </TypesContext.Provider>
  );
};
