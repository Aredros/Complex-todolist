import React, { useContext } from "react";
import { AppContext } from "../../../App";
import { TypesContext } from "../../pages/TodoWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../../../config/firebase";
import {
  collection,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

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

export const StartEditButton = (props: TodoItemProps) => {
  const { todo } = props;

  const { allColors } = useContext(AppContext) || {}; // Destructure allColors from the context
  const { todos = [], setTodos, isLoggedIn } = useContext(TypesContext) || {}; // Destructure types from the context

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

  const handleEditClick = () => {
    editTodoTask?.(todo.id);
  };

  return (
    <FontAwesomeIcon
      icon={faEdit}
      onClick={handleEditClick}
      style={{ color: allColors?.buttonIcons }}
    />
  );
};
