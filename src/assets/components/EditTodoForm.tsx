import React, { useState, useContext } from "react";
import { AppContext } from "../../App";
import { TypesContext } from "../pages/TodoWrapper";
import { finishEditFunction } from "../functions/functions";
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
import { auth, db } from "../../config/firebase"; // Import your initialized Firebase instance

interface EditTodoFormProps {
  task: {
    task: string;
    nType: string;
    date: string;
    taskorreminder: string;
    id: string;
    completed: boolean;
    isEditing: boolean;
  };
}

export const EditTodoForm = (props: EditTodoFormProps) => {
  const { task } = props;

  const [value, setValue] = useState(task.task);
  const [type, setType] = useState(task.nType);
  const [date, setDate] = useState(task.date);
  const [taskorreminder, setTaskorreminder] = useState(task.taskorreminder);

  const { allColors } = useContext(AppContext) || {}; // Destructure allColors from the context
  const {
    types,
    todos = [],
    setTodos,
    isLoggedIn,
  } = useContext(TypesContext) || {}; // Destructure types from the context

  //function to change the editing status of a TODO
  const finishEditTask = async (
    task: string,
    type: string,
    date: string,
    taskorreminder: string,
    id: string
  ) => {
    if (isLoggedIn) {
      try {
        console.log("Updating task in Firebase");

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

        // Update the document associated with the user and todo ID
        querySnapshot.docs.forEach(async (doc) => {
          await updateDoc(doc.ref, {
            task,
            nType: type,
            date,
            taskorreminder,
            isEditing: false,
          });
        });

        // Update the local todos state
        const updatedTodos = (todos || []).map((todo) =>
          todo.id === id
            ? {
                ...todo,
                task,
                nType: type,
                date,
                taskorreminder,
                isEditing: false,
              }
            : todo
        );
        setTodos(updatedTodos);
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    } else {
      console.log("Updating task in localStorage");

      // Update the local todos state
      const updatedTodos = (todos || []).map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task,
              nType: type,
              date,
              taskorreminder,
              isEditing: false,
            }
          : todo
      );
      setTodos(updatedTodos);
    }
  };

  //this function is called when the user types in the input field
  const handleSubmit = (e: React.FormEvent) => {
    //preventDefault will prevent the page from reloading
    e.preventDefault();
    finishEditTask?.(value, type, date, taskorreminder, task.id);
  };

  return (
    <form
      className="EditTodoForm"
      onSubmit={handleSubmit}
      style={{ background: allColors?.formBackgroundColor }}
    >
      <div className="EditTodoForm__Task">
        <input
          type="text"
          value={value}
          placeholder="Update task"
          className="EditTodoForm__Task__input"
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="add-btn"
          style={{
            backgroundColor: allColors?.buttonIcons,
            color: allColors?.buttonText,
          }}
        >
          Update
        </button>
      </div>
      <div className="EditTodoForm__CatDate">
        <div className="EditTodoForm__CatDate__category">
          <select
            id={task.id}
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            {...(taskorreminder === "reminder" && { disabled: true })}
          >
            {types?.map((type) => (
              <option key={type.id} value={type.typeName}>
                {type.typeName}
              </option>
            ))}
          </select>
        </div>
        <div className="TodoForm__CatDate__category">
          <select
            id="taskOrReminder"
            name="task-reminder"
            value={taskorreminder}
            onChange={(e) => setTaskorreminder(e.target.value)}
          >
            <option value="task">Task</option>
            <option value="reminder">Reminder</option>
          </select>
        </div>
        <div className="EditTodoForm__CatDate__date">
          <input
            type="date"
            id="start"
            name="trip-start"
            defaultValue={task.date}
            onChange={(e) => setDate(e.target.value)}
            min="2018-01-01"
            max="2099-12-31"
          />
        </div>{" "}
      </div>
    </form>
  );
};
