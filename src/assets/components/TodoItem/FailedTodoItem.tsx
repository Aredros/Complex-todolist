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
import { DeleteItemButton } from "./buttons/DeleteItemButton";

import { IconAndColorItem } from "./IconAndColorItem";

import { SubTaskItem } from "./Subtask/SubtaskItem";
import { RecoverButtonItem } from "./buttons/RecoverButtonItem";
import { FavoriteItemButton } from "./buttons/FavoriteItemButton";

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
    favorite: boolean;
  };
}

interface ITSubtaskTodo {
  subTaskCompleted: boolean;
  subTask: string;
  subTaskID: string;
  isSubtaskEditing: boolean;
}

export const FailedTodoItem = (props: TodoItemProps) => {
  const { todo } = props;

  const {
    allTodos = [],
    setAllTodos = () => {},
    isLoggedIn,
  } = useContext(AppContext) || {}; // Destructure allColors from the context

  // const handleToggleClick = () => {
  //   //handle the mark task as completed
  //   todo.taskorreminder === "task" ? toggleCompleteTask?.(todo.id) : null;
  // };

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
        color: "black",
        backgroundColor: "#E15656",
      }}
    >
      <IconAndColorItem todo={todo} />
      <div className="TodoItem__container">
        <RecoverButtonItem todo={todo} />{" "}
        <p
          style={{
            textDecoration: "line-through",
          }}
        >
          <b>
            {todo.startTime !== undefined && todo.startTime !== ""
              ? `${todo.startTime} | `
              : null}
            {todo.task}
          </b>
          {todo.taskorreminder !== "reminder" && (
            <>
              {" "}
              <FavoriteItemButton todo={todo} />
            </>
          )}
        </p>
      </div>

      <div className="TodoItem__icons">
        <DeleteItemButton todo={todo} />
      </div>
      {todo.subTask?.length > 0 && <SubTaskItem todo={todo} />}
    </li>
  );
};
