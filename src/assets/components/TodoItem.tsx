import React, { useContext } from "react";
import { AppContext } from "../../App";
import { TypesContext } from "../pages/TodoWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

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
  deleteTodoTask: (id: string) => void;
  toggleCompleteTask?: (id: string) => void;
  editTodoTask?: (id: string) => void;
}

export const TodoItem = (props: TodoItemProps) => {
  const { todo, deleteTodoTask, toggleCompleteTask, editTodoTask } = props;

  const { allColors } = useContext(AppContext) || {}; // Destructure allColors from the context
  const { types } = useContext(TypesContext) || {}; // Destructure types from the context

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
