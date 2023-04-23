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
    nType: string;
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
    <div className={`Todo ${todo.completed && "completed"}`}>
      <div
        className="TodoItem-type-color"
        onClick={() => toggleCompleteTask(todo.id)}
        style={{
          backgroundColor: typecolor ?? "gray",
        }}
      ></div>
      <div
        className="TodoItem-text-container"
        onClick={() => toggleCompleteTask(todo.id)}
      >
        {" "}
        <p className={`${todo.completed && "completed"}`}>
          {todo.task} / {todo.nType ? todo.nType : "No-cat"}
        </p>
      </div>

      <div>
        <FontAwesomeIcon icon={faEdit} onClick={() => editTodoTask(todo.id)} />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodoTask(todo.id)}
        />
      </div>
    </div>
  );
};
