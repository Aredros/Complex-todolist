import React, { useEffect, useState, useContext, createContext } from "react";
import { AppContext } from "../../App";
import { WeeklyDivider } from "../components/WeeklyDivider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faList } from "@fortawesome/free-solid-svg-icons";
import Navigation from "../components/Navigation";

// Define interface for Todo object
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

interface IType {
  id: string; // Add ID field to IType interface
  typeName: string;
  color: string;
}

interface ITypesContextValue {
  types: IType[] | null;
}

//passing the props
interface Iprops {
  doneTodoList: ITodo[];
  deleteDONETodoTask: (id: string) => void;
}

export const TypesContext = React.createContext<ITypesContextValue>({
  types: null,
});

export const Archive = (props: Iprops) => {
  const { doneTodoList, deleteDONETodoTask } = props; //props being brought by parent component
  const [types, setTypes] = useState<IType[]>([]); // Specify type as IType[]
  const [weekList, setWeekList] = useState(true); //state for choosing between weekly or daily list

  const { allColors } = useContext(AppContext) || {}; // Destructure allColors from the context

  /****************************************************************** */
  /***************FUNCTIONS FOR DATES AND CHRONOLOGICALLY ARRANGEMENT */

  // function to sort todos tasks based on date
  const sortTodos = (TodosToSort: ITodo[]) => {
    return TodosToSort.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  };

  // Get an array of unique weeks that the tasks belong to (using the SortTodos function to sort the tasks by date)
  const weeks = [
    ...new Set(sortTodos(doneTodoList).map((todo) => getWeek(todo.date))),
  ];

  // Helper function to get the ISO week number from a date string
  function getWeek(dateString: string) {
    const date = new Date(dateString);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 4 - (date.getDay() || 7));
    const yearStart = new Date(date.getFullYear(), 0, 1);
    const weekNo = Math.ceil(((+date - +yearStart) / 86400000 + 1) / 7);
    return `${date.getFullYear()}-W${weekNo.toString().padStart(2, "0")}`;
  }

  return (
    <TypesContext.Provider value={{ types }}>
      <div
        className={`TodoWrapper ${!weekList && "TodoWrapper--weekly"}`}
        style={{ backgroundColor: allColors?.innerBackgroundColor }}
      >
        <Navigation />
        <p style={{ color: allColors?.titleTextColor }}>
          Only working with LocalStorage for the time being
        </p>
        <h1 style={{ color: allColors?.titleTextColor }}>Archive</h1>
        <div className="changeWeekList">
          <p
            className="changeWeekList__title"
            style={{ color: allColors?.titleTextColor }}
          >
            Display type
          </p>
          <div className="changeWeekList__buttons">
            <div
              className="changeWeekList__buttons__button"
              style={{ backgroundColor: allColors?.buttonIcons }}
              onClick={() => setWeekList(true)}
            >
              <FontAwesomeIcon
                icon={faList}
                style={{ color: allColors?.buttonText }}
              />
              <span style={{ color: allColors?.buttonText }}> List</span>
            </div>
            <div
              className="changeWeekList__buttons__button"
              style={{ backgroundColor: allColors?.buttonIcons }}
              onClick={() => setWeekList(false)}
            >
              <FontAwesomeIcon
                icon={faCalendarDays}
                style={{ color: allColors?.buttonText }}
              />
              <span style={{ color: allColors?.buttonText }}> Calendar</span>
            </div>
          </div>
        </div>
        {weeks.map((week) => (
          <WeeklyDivider
            key={week}
            parentElement={"Archive"}
            weekList={weekList}
            week={week}
            deleteTodoTask={deleteDONETodoTask}
            todos={doneTodoList.filter((todo) => getWeek(todo.date) === week)}
          />
        ))}
      </div>
    </TypesContext.Provider>
  );
};
