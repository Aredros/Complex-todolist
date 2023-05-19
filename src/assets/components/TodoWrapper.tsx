import React, { useEffect, useState } from "react";
import {
  //addTodoTask,
  deleteTodo,
  toggleComplete,
  editTodo,
  finishEdit,
} from "../functions/functions";
import { TodoForm } from "./TodoForm";
import { WeeklyDivider } from "./WeeklyDivider";
import { TypeForm } from "./TypeForm";
import { v4 as uuidv4 } from "uuid";
import { TypeItem } from "./TypeItem";
import { auth, db } from "../../config/firebase";
import { signOut } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  setDoc,
  deleteDoc,
  query,
  where,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faList } from "@fortawesome/free-solid-svg-icons";

// Define interface for Todo object
interface ITodo {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
  user: string;
  nType: string;
  date: string;
}

interface IType {
  id: string; // Add ID field to IType interface
  type: string;
  color: string;
}

export const TodoWrapper = () => {
  //state to store the todos
  const [todos, setTodos] = useState<ITodo[]>([]); // Specify type as ITodo[]
  const [types, setTypes] = useState<IType[]>([]); // Specify type as IType[]

  //state for choosing between weekly or daily list
  const [weekList, setWeekList] = useState(true);

  //EXPERIMENT
  //check if the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Fetch the previous todos from LocalStorage
  useEffect(() => {
    //empty array and local storage
    //localStorage.clear();
    const storedTodos = localStorage.getItem("todosLocal");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
    const storedTypes = localStorage.getItem("typesLocal");
    if (storedTypes) {
      setTypes(JSON.parse(storedTypes));
    }
  }, []); //the empty array is to make sure the useEffect only runs once

  //EXPERIMENT
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(user ? !user.isAnonymous : false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  //EXPERIMENT

  //function to log out//
  const logItOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  //function to add a TODO
  const addNewTodo = (todo: string, type: string, date: string) => {
    const newTodo = {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false,
      nType: type,
      user: auth.currentUser?.email || "", // Provide a default value here,
      date: date,
    };
    setTodos([...todos, newTodo]);
    //store the updated todos state in LocalStorage
    localStorage.setItem("todosLocal", JSON.stringify([...todos, newTodo]));
  };

  //function to delete a TODO
  const deleteTodoTask = (id: string) => {
    const updatedTodos = deleteTodo(id, todos);
    setTodos(updatedTodos);
  };

  //function to change the completed status of a TODO
  const toggleCompleteTask = (id: string) => {
    const updatedTodos = toggleComplete(id, todos);
    setTodos(updatedTodos);
  };

  //function to change the editing status of a TODO
  const editTodoTask = (id: string) => {
    const updatedTodos = editTodo(id, todos);
    setTodos(updatedTodos);
  };

  //function to change the editing status of a TODO
  const finishEditTask = (
    id: string,
    task: string,
    type: string,
    date: string
  ) => {
    const updatedTodos = finishEdit(id, task, type, date, todos);
    setTodos(updatedTodos);
  };
  /****************************************************************** */
  /****************FUNCTIONS TO ALTER THE TYPES */

  //function to create a new Type
  const addType = (type: string, color: string) => {
    //check if the type already exists
    if (!types.some((t) => t.type === type)) {
      const newType: IType = {
        id: uuidv4(), // Assign a unique ID to the new type
        type: type,
        color: color,
      };
      const newTypes = [...types, newType];
      //add the new type to the types array
      setTypes(newTypes);
      //save the new types array to local storage
      localStorage.setItem("typesLocal", JSON.stringify(newTypes));
    }
  };

  //function to delete a Type
  const deleteType = (id: string) => {
    //filter the type to be deleted
    const updatedTypes = types.filter((t) => t.id !== id);
    //save the new types array to local storage
    localStorage.setItem("typesLocal", JSON.stringify(updatedTypes));
    //set the types array to the updated array
    setTypes(updatedTypes);
  };
  /****************************************************************** */
  /***************FUNCTIONS FOR DATES AND CHRONOLOGICALLY ARRANGEMENT */

  //EXPERIMENT
  const sendDataToFirestore = async () => {
    try {
      // Send data to Firestore only if the user is logged in
      if (isLoggedIn) {
        // Get the current user's email
        const userEmail = auth.currentUser?.email;

        // Create a query to fetch todos where the user is the same as the current user
        const q = query(
          collection(db, "todos"),
          where("user", "==", userEmail)
        );

        // Get the documents that match the query
        const querySnapshot = await getDocs(q);

        // Delete all the documents associated with the user
        querySnapshot.docs.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });

        // Create a new Firestore collection reference
        const todosCollectionRef = collection(db, "todos");

        // Loop through the todos and add each one to Firestore
        todos.forEach(async (todo) => {
          // Create a new document in the "todos" collection
          await addDoc(todosCollectionRef, todo);
        });

        console.log("Data sent to Firestore successfully!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  //EXPERIMENT
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

  return (
    <div className={`TodoWrapper ${!weekList && "TodoWrapper--weekly"}`}>
      <h1>Week Planner</h1>
      <div className="changeWeekList">
        <p className="changeWeekList__title">Display type</p>
        <div className="changeWeekList__buttons">
          <div
            className="changeWeekList__buttons__button"
            onClick={() => setWeekList(true)}
          >
            <FontAwesomeIcon icon={faList} />
            <span> List</span>
          </div>
          <div
            className="changeWeekList__buttons__button"
            onClick={() => setWeekList(false)}
          >
            <FontAwesomeIcon icon={faCalendarDays} />
            <span> Calendar</span>
          </div>
        </div>
      </div>
      <TodoForm addTodo={addNewTodo} types={types} />
      {weeks.map((week) => (
        <WeeklyDivider
          key={week}
          weekList={weekList}
          types={types}
          week={week}
          deleteTodoTask={deleteTodoTask}
          toggleCompleteTask={toggleCompleteTask}
          editTodoTask={editTodoTask}
          finishEditTask={finishEditTask}
          todos={todos.filter((todo) => getWeek(todo.date) === week)}
        />
      ))}
      <TypeForm addType={addType} />
      <TypeItem types={types} deleteType={deleteType} />
      <div className="bottom-buttons">
        {isLoggedIn && (
          <>
            <button onClick={sendDataToFirestore}>Send to Database</button>

            <button onClick={getTodosFromDatabase}>
              Get Todos from Database
            </button>
          </>
        )}
        <button onClick={logItOut}>LogOut</button>
      </div>
    </div>
  );
};
