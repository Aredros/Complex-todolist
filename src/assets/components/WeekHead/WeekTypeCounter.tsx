import { useContext } from "react";
import { AppContext } from "../../../App";
import { IconWeekType } from "./IconWeekType";

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

interface ITWeekTypeCounter {
  todos: ITodo[];
  week: string;
}

export const WeekTypeCounter = (props: ITWeekTypeCounter) => {
  const { todos, week } = props;

  const { allColors } = useContext(AppContext) || {}; // Destructure allColors from the context

  //Get the type of each todo in an array
  const todoType = todos
    .filter((todo) => todo.nType !== "")
    .map((todo) => todo.nType);

  // Remove duplicates and keep only one occurrence of each item
  const uniqueTodoType = [...new Set(todoType)];

  //Get all items from this type
  const CountAllItems = (typeName: string) =>
    todos?.filter((t) => t.nType === typeName).length || 0;

  //Get all completed items from this type
  const CountCompletedItems = (typeName: string) => {
    const MoreThanZero =
      todos?.filter((t) => t.nType === typeName && t.completed === true)
        .length || 0;
    if (MoreThanZero && MoreThanZero > 0) {
      return MoreThanZero;
    } else {
      return 0;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "5px 20px",
        justifyContent: "space-between",
        width: "100%",
        flexWrap: "wrap",
        padding: "3px 15px",
      }}
    >
      {uniqueTodoType.map((item) => (
        <div
          key={`${item}-${week}`}
          style={{
            display: "flex",
            gap: "2px",
            justifyContent: "center",
          }}
        >
          {" "}
          <IconWeekType todoType={item} />
          <div>
            <p style={{ color: allColors?.weeklyCardTxt }}>
              {item}: {CountCompletedItems(item)}/{CountAllItems(item)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
