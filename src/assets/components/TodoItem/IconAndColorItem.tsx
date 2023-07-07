import React, { useContext } from "react";
import { AppContext } from "../../../App";

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

  const { allTypes } = useContext(AppContext) || {}; // Destructure allColors from the context

  //get the type color
  const typecolor = allTypes?.find(
    (type) => type.typeName === todo.nType
  )?.color;

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
