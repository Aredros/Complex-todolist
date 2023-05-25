import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

interface TodoItemProps {
  types: { type: string; color: string }[];
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
  toggleCompleteTask: (id: string) => void;
  editTodoTask: (id: string) => void;
}

export const TodoItem = (props: TodoItemProps) => {
  const { types, todo, deleteTodoTask, toggleCompleteTask, editTodoTask } =
    props;

  //get the type color
  const typecolor = types.find((type) => type.type === todo.nType)?.color;

  return (
    <div
      className={`TodoItem ${todo.completed && "completed"} Todo-${
        todo.taskorreminder
      }`}
    >
      <div
        className="TodoItem__type-color"
        onClick={() => toggleCompleteTask(todo.id)}
        style={{
          backgroundColor: typecolor ?? "gray",
        }}
      ></div>
      <div
        className="TodoItem__container"
        onClick={() => toggleCompleteTask(todo.id)}
      >
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
        <FontAwesomeIcon icon={faEdit} onClick={() => editTodoTask(todo.id)} />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodoTask(todo.id)}
        />
      </div>
    </div>
  );
};
