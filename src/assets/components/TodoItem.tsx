import React, { useContext } from "react";
import { AppContext } from "../../App";
import { TypesContext } from "../pages/TodoWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../../config/firebase";
import {
  collection,
  updateDoc,
  doc,
  deleteDoc,
  query,
  where,
  getDocs,
  DocumentData,
  DocumentReference,
} from "firebase/firestore";
import {
  deleteTodoFunction,
  toggleCompleteFunction,
} from "../functions/functions";

interface TodoItemProps {
  todo: {
    id: string;
    task: string;
    completed: boolean;
    isEditing: boolean;
    taskorreminder: string;
    user: string;
    nType: string;
    date: string;
  };
}

export const TodoItem = (props: TodoItemProps) => {
  const { todo } = props;

  const { allColors } = useContext(AppContext) || {}; // Destructure allColors from the context
  const {
    types,
    todos = [],
    setTodos,
    isLoggedIn,
  } = useContext(TypesContext) || {}; // Destructure types from the context

  const deleteTodoTask = async (id: string) => {
    if (isLoggedIn) {
      try {
        console.log("deleting from Firebase");

        // Get the current user's email
        const userEmail = auth.currentUser?.email;

        // Create a query to fetch the specific todo based on the user and todo ID
        const q = query(
          collection(db, "todos"),
          where("user", "==", userEmail),
          where("id", "==", id)
        );

        // Get the document that matches the query
        const querySnapshot = await getDocs(q);

        // Delete the document associated with the user and todo ID
        querySnapshot.docs.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });

        // Remove the deleted todo from the todos state
        const updatedTodos = todos?.filter((todo) => todo.id !== id) || [];
        setTodos(updatedTodos);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("deleting from localStorage");

      // Remove the deleted todo from the todos state
      const updatedTodos = deleteTodoFunction(id, todos || [], "todosLocal");
      setTodos(updatedTodos);
    }
  };

  //function to change the completed status of a TODO
  const toggleCompleteTask = async (id: string) => {
    if (isLoggedIn) {
      try {
        console.log("updating status in Firebase");

        // Get the current user's email
        const userEmail = auth.currentUser?.email;

        // Create a query to fetch the specific todo based on the user and todo ID
        const q = query(
          collection(db, "todos"),
          where("user", "==", userEmail),
          where("id", "==", id)
        );

        // Get the document that matches the query
        const querySnapshot = await getDocs(q);

        // Update the completed status of the document associated with the user and todo ID
        querySnapshot.docs.forEach(async (doc) => {
          await updateDoc(doc.ref, { completed: !doc.data().completed }); // Use updateDoc instead of doc.ref.update
        });
        // Update the completed status in the local todos state
        const updatedTodos = (todos || []).map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("updating status in localStorage");

      // Update the completed status in the local todos state
      const updatedTodos = (todos || []).map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    }
  };

  //START EDIT THE TODO
  // Function to change the editing status of a TODO
  const editTodoTask = async (id: string) => {
    if (isLoggedIn) {
      try {
        console.log("updating editing status in Firebase");

        const userEmail = auth.currentUser?.email;
        const q = query(
          collection(db, "todos"),
          where("user", "==", userEmail),
          where("id", "==", id)
        );

        const querySnapshot = await getDocs(q);

        querySnapshot.docs.forEach(async (doc) => {
          await updateDoc(doc.ref, { isEditing: !doc.data().isEditing });
        });

        const updatedTodos = (todos || []).map((todo) =>
          todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        );
        setTodos(updatedTodos);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("updating editing status in localStorage");

      const updatedTodos = (todos || []).map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      );
      setTodos(updatedTodos);
    }
  };

  //get the type color
  const typecolor = types?.find((type) => type.typeName === todo.nType)?.color;

  const handleToggleClick = () => {
    //handle the mark task as completed
    todo.taskorreminder === "task" ? toggleCompleteTask?.(todo.id) : null;
  };

  const handleEditClick = () => {
    editTodoTask?.(todo.id);
  };

  return (
    <li
      className={`TodoItem ${todo.completed && "completed"} Todo-${
        todo.taskorreminder
      }`}
      style={{
        color: allColors?.itemText,
        backgroundColor:
          todo.taskorreminder === "reminder"
            ? allColors?.reminderBackgroundColor
            : allColors?.itemBackgroundColor,
      }}
    >
      <div
        className="TodoItem__type-color"
        onClick={handleToggleClick}
        style={{
          backgroundColor: typecolor ?? "gray",
        }}
      ></div>
      <div className="TodoItem__container" onClick={handleToggleClick}>
        {" "}
        <p className={`${todo.completed && "completed"}`}>
          {todo.task}
          {todo.taskorreminder === "task"
            ? todo.nType
              ? " / " + todo.nType
              : " / No-cat"
            : null}
        </p>
      </div>

      <div className="TodoItem__icons">
        <FontAwesomeIcon
          icon={faEdit}
          onClick={handleEditClick}
          style={{ color: allColors?.buttonIcons }}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodoTask(todo.id)}
          style={{ color: allColors?.buttonIcons }}
        />
      </div>
    </li>
  );
};
