import { useContext } from "react";
import { AppContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHeart,
  faLandmark,
  faCar,
  faLaptop,
  faWeightScale,
  faBook,
  faMoneyBillTrendUp,
  faGuitar,
  faHome,
  faDumbbell,
  faPersonArrowUpFromLine,
  faX,
} from "@fortawesome/free-solid-svg-icons";

interface TodoItemProps {
  handleToggleClick?: () => void;
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

export const IconAndColorItem = (props: TodoItemProps) => {
  const { todo, handleToggleClick } = props;

  const { allTypes } = useContext(AppContext) || {}; // Destructure allColors from the context

  //get the type color
  const typecolor = allTypes?.find((type) => type.id === todo.nType)?.color;

  // Get the type icon
  const typeIcon = allTypes?.find((type) => type.id === todo.nType)?.icon; // Assign a default icon if none is found

  return (
    <div
      className="TodoItem__type-color"
      onClick={handleToggleClick}
      style={{
        backgroundColor: typecolor ?? "gray",
      }}
    >
      {typeIcon && (
        <FontAwesomeIcon
          icon={
            typeIcon === "faShieldHeart"
              ? faShieldHeart
              : typeIcon === "faLandmark"
              ? faLandmark
              : typeIcon === "faCar"
              ? faCar
              : typeIcon === "faLaptop"
              ? faLaptop
              : typeIcon === "faWeightScale"
              ? faWeightScale
              : typeIcon === "faBook"
              ? faBook
              : typeIcon === "faMoneyBillTrendUp"
              ? faMoneyBillTrendUp
              : typeIcon === "faGuitar"
              ? faGuitar
              : typeIcon === "faHome"
              ? faHome
              : typeIcon === "faDumbbell"
              ? faDumbbell
              : typeIcon === "faPersonArrowUpFromLine"
              ? faPersonArrowUpFromLine
              : faX
          }
          style={{ color: todo.favorite ? "#dfa201" : "#edf9f3" }}
        />
      )}
    </div>
  );
};
