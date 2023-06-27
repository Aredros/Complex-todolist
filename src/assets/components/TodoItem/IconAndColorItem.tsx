import React, { useContext } from "react";
import { AppContext } from "../../../App";
import { TypesContext } from "../../pages/TodoWrapper";

interface TodoItemProps {
  handleToggleClick: () => void;
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

export const IconAndColorItem = (props: TodoItemProps) => {
  const { todo, handleToggleClick } = props;

  const { allColors } = useContext(AppContext) || {}; // Destructure allColors from the context
  const {
    types,
    todos = [],
    setTodos,
    isLoggedIn,
  } = useContext(TypesContext) || {}; // Destructure types from the context

  //get the type color
  const typecolor = types?.find((type) => type.typeName === todo.nType)?.color;

  return (
    <div
      className="TodoItem__type-color"
      onClick={handleToggleClick}
      style={{
        backgroundColor: typecolor ?? "gray",
      }}
    ></div>
  );
};
