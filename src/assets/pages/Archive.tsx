import { useState, useContext, createContext } from "react";
import { AppContext } from "../../App";
import { WeeklyDivider } from "../components/WeeklyDivider";
import { TypeItem } from "../components/TypeItem/TypeItem";
import Navigation from "../components/Navigation";
import DbAndLogOut from "../components/DbAndLogOut";
import { FilterTodoItem } from "../components/FilterTodoItem";
import { DisplayTypes } from "../components/DisplayTypes";
import PersonalLinks from "../components/PersonalLinks";

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

export const DisplayTypesContext = createContext<{
  setWeekList: (value: boolean) => void;
}>({
  setWeekList: () => {},
});

export const Archive = () => {
  const { allColors, allTodos = [], isLoggedIn } = useContext(AppContext) || {}; //getting the colors from the context
  //

  const [weekList, setWeekList] = useState(true); //state for choosing between weekly or daily list

  const [filteredType, setFilteredType] = useState<string | null>(null);

  /****************************************************************** */
  /***************FUNCTIONS FOR DATES AND CHRONOLOGICALLY ARRANGEMENT */

  // function to sort todos tasks based on date
  const sortTodos = (todos: ITodo[]) => {
    return todos.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  };

  // Get an array of unique weeks that the tasks belong to (using the SortTodos function to sort the tasks by date)
  const weeks = [
    ...new Set(
      allTodos ? sortTodos(allTodos).map((todo) => getWeek(todo.date)) : []
    ),
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

  // Function to filter todos by type
  function filterOneItem(type: string) {
    setFilteredType(type);
  }

  return (
    <div
      className={`TodoWrapper ${!weekList && "TodoWrapper--weekly"}`}
      style={{ backgroundColor: allColors?.innerBackgroundColor }}
    >
      <Navigation />
      <div className="MainTitle-and-subtitle">
        <PersonalLinks />
        <h1 style={{ color: allColors?.mainTitleColor }}>Archive</h1>
        <p className="h1sub" style={{ color: allColors?.mainTitleColor }}>
          By Cheo
        </p>
      </div>
      {isLoggedIn && <FilterTodoItem filterOneItem={filterOneItem} />}
      <DisplayTypesContext.Provider value={{ setWeekList }}>
        <DisplayTypes />
      </DisplayTypesContext.Provider>
      {weeks.map(
        (week) =>
          allTodos?.some(
            (todo) => todo.archived && getWeek(todo.date) === week
          ) && (
            <WeeklyDivider
              key={week}
              parentElement={"Archive"}
              weekList={weekList}
              week={week}
              todos={allTodos.filter(
                (todo) =>
                  getWeek(todo.date) === week &&
                  todo.archived &&
                  (!filteredType || todo.nType === filteredType)
              )}
            />
          )
      )}
      <TypeItem />
      <DbAndLogOut />
    </div>
  );
};
