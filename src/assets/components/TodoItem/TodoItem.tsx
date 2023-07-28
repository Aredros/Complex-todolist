import { useContext, useEffect } from "react";
import { AppContext } from "../../../App";
import { auth, db } from "../../../config/firebase";
import {
  collection,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { StartEditButton } from "./buttons/StartEditButton";
import { IconAndColorItem } from "./IconAndColorItem";
import { DuplicateItemButton } from "./buttons/DuplicateItemButton";
import { CreateSubTaskItemButton } from "./buttons/CreateSubTaskItemButton";
import { SubTaskItem } from "./SubtaskItem";
import { FailButtonItem } from "./buttons/FailButtonItem";

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
    startTime: string;
    archived: boolean;
    subTask: ITSubtaskTodo[];
    failed: boolean;
  };
}

interface ITSubtaskTodo {
  subTaskCompleted: boolean;
  subTask: string;
  subTaskID: string;
  isSubtaskEditing: boolean;
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
      <div className="TodoItem__container">
        {" "}
        <p className={`${todo.completed && "completed"}`}>
          <b onClick={handleToggleClick}>
            {todo.startTime !== undefined && todo.startTime !== ""
              ? `${todo.startTime} | `
              : null}
            {todo.task}
          </b>
          <CreateSubTaskItemButton todo={todo} />
        </p>
      </div>

      <div className="TodoItem__icons">
        <DuplicateItemButton todo={todo} />
        <StartEditButton todo={todo} />
        <FailButtonItem todo={todo} />
      </div>
      {todo.subTask?.length > 0 && <SubTaskItem todo={todo} />}
    </li>
  );
};
