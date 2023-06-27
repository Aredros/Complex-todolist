import React, { useContext } from "react";
import { AppContext } from "../../../App";
import { TypesContext } from "../../pages/TodoWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../../../config/firebase";
import {
  collection,
  deleteDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { deleteTodoFunction } from "../../functions/functions";

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

export const DeleteItemButton = (props: TodoItemProps) => {
  const { todo } = props;

  const { allColors } = useContext(AppContext) || {}; // Destructure allColors from the context
  const { todos = [], setTodos, isLoggedIn } = useContext(TypesContext) || {}; // Destructure types from the context

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

  return (
    <FontAwesomeIcon
      icon={faTrash}
      onClick={() => deleteTodoTask(todo.id)}
      style={{ color: allColors?.buttonIcons }}
    />
  );
};
