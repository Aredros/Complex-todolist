import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TypesContext } from "../../pages/TodoWrapper";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../../../config/firebase";
import {
  collection,
  doc,
  query,
  where,
  getDocs,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { deleteTodoFunction } from "../../functions/functions";

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

interface ArchiveButtonIT {
  Weektodos: ITodo[];
}

export const ArchiveWeekButton = (props: ArchiveButtonIT) => {
  const { Weektodos } = props;

  const { allColors, doneTodoList, setDoneTodoList } = useContext(
    AppContext
  ) || { doneTodoList: [], setDoneTodoList: () => {} }; // Destructure allColors from the context
  const { todos, setTodos, isLoggedIn } = useContext(TypesContext) || {}; // Destructure setTodos from the context

  // DELETE Function (needed for updating in Firebase)
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
  //////

  //Function to change the Archived boolean status
  const archiveMultipleTodos = (ids: string[]) => {
    setDoneTodoList((prevDoneTodoList) => [
      ...prevDoneTodoList,
      ...Weektodos.filter(
        (todo) =>
          ids.includes(todo.id) &&
          !doneTodoList.some(({ id }) => id === todo.id)
      ),
    ]);

    ids.forEach((id) => {
      deleteTodoTask(id);
    });
  };

  //handle the click to send ALL items to the archive
  const handleArchiveClick = (
    todosToArchive: ITodo[] | undefined = Weektodos
  ) => {
    if (Array.isArray(todosToArchive)) {
      (archiveMultipleTodos as (ids: string[]) => void)(
        todosToArchive.map((todo) => todo.id)
      );
    }
  };

  return (
    <button
      onClick={() => handleArchiveClick()}
      style={{
        backgroundColor: allColors?.buttonIcons,
        color: allColors?.buttonText,
      }}
    >
      {" "}
      <FontAwesomeIcon icon={faBoxArchive} />
      archive
    </button>
  );
};
