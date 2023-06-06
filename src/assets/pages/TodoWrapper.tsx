import React, { useEffect, useState } from "react";
import {
  deleteTodoFunction,
  toggleCompleteFunction,
  editTodoFunction,
  finishEditFunction,
  archiveTaskFunction,
} from "../functions/functions";
import { TodoForm } from "../components/TodoForm";
import { WeeklyDivider } from "../components/WeeklyDivider";
import { TypeForm } from "../components/TypeForm";
import { v4 as uuidv4 } from "uuid";
import { TypeItem } from "../components/TypeItem";
import { auth, db } from "../../config/firebase";
import { signOut } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faList } from "@fortawesome/free-solid-svg-icons";
import Navigation from "../components/Navigation";
import DbAndLogOut from "../components/DbAndLogOut";

//Define all Style of every individual color of the app
interface IColors {
  outerBackgroundColor: string;
  innerBackgroundColor: string;
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
//passing the props
interface Iprops {
  allColors: IColors;
  getDoneTodoList: (doneTodoList: ITodo[]) => void;
}

export const TodoWrapper = (props: Iprops) => {
  const { allColors, getDoneTodoList } = props; //props being brought by parent component
  //
  const [todos, setTodos] = useState<ITodo[]>([]); // Array of todo objects
  const [types, setTypes] = useState<IType[]>([]); // Array of type objects
  const [weekList, setWeekList] = useState(true); //state for choosing between weekly or daily list
  const [isLoggedIn, setIsLoggedIn] = useState(false); //check if the user is logged in or not

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
    //Verifying if the user is Anon or not
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(user ? !user.isAnonymous : false);
    });

    return () => {
      unsubscribe();
    };
  }, []); //the empty array is to make sure the useEffect only runs once

  //function to log out//
  const logItOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  //function to add a TODO
  const addNewTodo = (
    todo: string,
    type: string,
    date: string,
    taskorreminder: string
  ) => {
    const newTodo = {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false,
      taskorreminder: taskorreminder,
      nType: type,
      user: auth.currentUser?.email || "", // Provide a default value here,
      date: date,
      archived: false,
    };
    setTodos([...todos, newTodo]);
    //store the updated todos state in LocalStorage
    localStorage.setItem("todosLocal", JSON.stringify([...todos, newTodo]));
  };

  //function to delete a TODO
  const deleteTodoTask = (id: string) => {
    const updatedTodos = deleteTodoFunction(id, todos, "todosLocal");
    setTodos(updatedTodos);
  };

  //Function to change the Archived boolean status
  const archiveMultipleTodos = (ids: string[]) => {
    const updatedTodos = archiveTaskFunction(ids, todos, "todosLocal");
    getDoneTodoList(updatedTodos);

    const updatedTodosLocal = ids.reduce(
      (acc, id) => {
        return deleteTodoFunction(id, acc, "todosLocal");
      },
      [...todos]
    );

    setTodos(updatedTodosLocal);
  };

  //function to change the completed status of a TODO
  const toggleCompleteTask = (id: string) => {
    const updatedTodos = toggleCompleteFunction(id, todos, "todosLocal");
    setTodos(updatedTodos);
  };

  //function to change the editing status of a TODO
  const editTodoTask = (id: string) => {
    const updatedTodos = editTodoFunction(id, todos, "todosLocal");
    setTodos(updatedTodos);
  };

  //function to change the editing status of a TODO
  const finishEditTask = (
    task: string,
    type: string,
    date: string,
    taskorreminder: string,
    id: string
  ) => {
    const updatedTodos = finishEditFunction(
      task,
      type,
      date,
      taskorreminder,
      id,
      todos,
      "todosLocal"
    );
    setTodos(updatedTodos);
  };
  /****************************************************************** */
  /****************FUNCTIONS TO ALTER THE TYPES */

  //function to create a new Type
  const addType = (typeName: string, color: string) => {
    //check if the type already exists
    if (!types.some((t) => t.typeName === typeName)) {
      const newType: IType = {
        id: uuidv4(), // Assign a unique ID to the new type
        typeName: typeName,
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

        alert("todos Data sent to Firestore successfully!");
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
    <div
      className={`TodoWrapper ${!weekList && "TodoWrapper--weekly"}`}
      style={{ backgroundColor: allColors.innerBackgroundColor }}
    >
      <Navigation allColors={allColors} />
      <h1 style={{ color: allColors.titleTextColor }}>Week Planner</h1>
      <div className="changeWeekList">
        <p
          className="changeWeekList__title"
          style={{ color: allColors.titleTextColor }}
        >
          Display type
        </p>
        <div className="changeWeekList__buttons">
          <div
            className="changeWeekList__buttons__button"
            style={{ backgroundColor: allColors.buttonIcons }}
            onClick={() => setWeekList(true)}
          >
            <FontAwesomeIcon
              icon={faList}
              style={{ color: allColors.buttonText }}
            />
            <span style={{ color: allColors.buttonText }}> List</span>
          </div>
          <div
            className="changeWeekList__buttons__button"
            style={{ backgroundColor: allColors.buttonIcons }}
            onClick={() => setWeekList(false)}
          >
            <FontAwesomeIcon
              icon={faCalendarDays}
              style={{ color: allColors.buttonText }}
            />
            <span style={{ color: allColors.buttonText }}> Calendar</span>
          </div>
        </div>
      </div>
      <TodoForm allColors={allColors} addTodo={addNewTodo} types={types} />
      {weeks.map(
        (week) =>
          todos.some(
            (todo) => !todo.archived && getWeek(todo.date) === week
          ) && (
            <WeeklyDivider
              key={week}
              parentElement={"TodoWrapper"}
              weekList={weekList}
              allColors={allColors}
              types={types}
              week={week}
              deleteTodoTask={deleteTodoTask}
              toggleCompleteTask={toggleCompleteTask}
              editTodoTask={editTodoTask}
              finishEditTask={finishEditTask}
              getDoneTodoList={getDoneTodoList}
              archiveMultipleTodos={archiveMultipleTodos}
              todos={todos.filter(
                (todo) => getWeek(todo.date) === week && !todo.archived
              )}
            />
          )
      )}
      <TypeForm addType={addType} allColors={allColors} />
      <TypeItem types={types} deleteType={deleteType} allColors={allColors} />
      <DbAndLogOut
        isLoggedIn={isLoggedIn}
        logItOut={logItOut}
        allColors={allColors}
        sendDataToFirestore={sendDataToFirestore}
        getTodosFromDatabase={getTodosFromDatabase}
      />
    </div>
  );
};
