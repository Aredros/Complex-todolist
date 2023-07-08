import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../App";
import { auth, db } from "../../../config/firebase";
import {
  collection,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { DeleteItemButton } from "./DeleteItemButton";
import { StartEditButton } from "./StartEditButton";
import { IconAndColorItem } from "./IconAndColorItem";
import { DuplicateItemButton } from "./DuplicateItemButton";

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
    archived: boolean;
  };
}

export const TodoItem = (props: TodoItemProps) => {
  const { todo } = props;

  const {
    allColors,
    allTodos = [],
    setAllTodos = () => {},
    isLoggedIn,
  } = useContext(AppContext) || {}; // Destructure allColors from the context

  //function to change the completed status of a TODO
  const toggleCompleteTask = async (id: string) => {
    // Update the completed status in the local todos state
    const updatedTodos = (allTodos || []).map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setAllTodos(updatedTodos);
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
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleToggleClick = () => {
    //handle the mark task as completed
    todo.taskorreminder === "task" ? toggleCompleteTask?.(todo.id) : null;
  };

  //UPDATE LocalStorage when allTodos changes
  useEffect(() => {
    if (!isLoggedIn) {
      // Update localStorage whenever allTodos changes
      localStorage.setItem("todosLocal", JSON.stringify(allTodos));
    }
  }, [allTodos]);

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
      <IconAndColorItem todo={todo} handleToggleClick={handleToggleClick} />
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
        <DuplicateItemButton todo={todo} />
        <StartEditButton todo={todo} />
        <DeleteItemButton todo={todo} />
      </div>
    </li>
  );
};
