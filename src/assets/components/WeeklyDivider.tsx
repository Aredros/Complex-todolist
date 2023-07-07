import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";
import { DailyDivider } from "./DailyDivider";
import { WeekHeader } from "./WeekHead/WeekHeader";

interface WeeklyDividerProps {
  parentElement: string;
  weekList: boolean;
  week: string;
  todos: {
    id: string;
    task: string;
    completed: boolean;
    isEditing: boolean;
    taskorreminder: string;
    user: string;
    nType: string;
    date: string;
    archived: boolean;
  }[];
}

export const WeeklyDivider = (props: WeeklyDividerProps) => {
  const { parentElement, week, weekList, todos } = props;

  const [weekCollapsed, setWeekCollapsed] = useState(false); //state for making the week element collapse when clicking on a button
  const [emptyDates, setEmptyDates] = useState<string[]>([]); //state for storing the dates that have no todos

  const { allColors } = useContext(AppContext) || {
    doneTodoList: [],
    setDoneTodoList: () => {},
  }; // Destructure allColors from the context

  useEffect(() => {
    // Function to get the Monday of the given date
    const getMonday = (date: Date) => {
      const day = date.getDay();
      const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday (0)
      return new Date(date.setDate(diff));
    };

    // Function to format a date as "YYYY-MM-DD"
    const formatDate = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    // Get the dates for the whole week (Monday to Sunday) of the first todo's date
    if (todos.length > 0) {
      const firstTodoDate = new Date(todos[0].date);
      const mondayDate = getMonday(firstTodoDate);
      const weekDates: string[] = [];

      for (let i = 0; i < 7; i++) {
        const currentDate = new Date(mondayDate);
        currentDate.setDate(mondayDate.getDate() + i);
        weekDates.push(formatDate(currentDate));
      }

      setEmptyDates(weekDates);
    }
  }, [todos]);

  // Get an array of unique dates that the tasks belong to in this week
  const dates = [...new Set(todos.map((todo) => todo.date))];

  // Get tasks for the week and weed out the reminders to get only the tasks
  const weekTasks = [
    ...new Set(todos.filter((todo) => todo.taskorreminder !== "reminder")),
  ];
  // Get completed tasks for the week and weed out the reminders to get only the tasks
  const completedTasks = weekTasks.filter(
    (task) => task.completed && task.taskorreminder !== "reminder"
  );
  // Use both previous variables to calculate the percentage of completed tasks
  const weekPercentage = (
    (completedTasks.length / weekTasks.length) *
    100
  ).toFixed(0);

  //calculate how much of the week is not complete -only used for the style
  const weekNotComplete = parseInt(weekPercentage) - 100;

  //Change the Collapsed state
  const handleCollapseClick = () => {
    setWeekCollapsed(!weekCollapsed);
  };

  //get dates of the week that have no todos

  return (
    <div
      className={`Weekly-divider ${
        weekList === true ? "vertical-divider-list" : "Weekly-divider-list"
      }`}
      style={{
        backgroundColor: allColors?.weeklyCardBG,
        border: "1px solid " + allColors?.weeklyBorder,
      }}
    >
      <WeekHeader
        parentElement={parentElement}
        week={week}
        weekPercentage={weekPercentage}
        todos={todos}
        weekCollapsed={weekCollapsed}
        handleCollapseClick={handleCollapseClick}
        weekNotComplete={weekNotComplete}
      />
      <div
        style={{
          maxHeight: weekCollapsed ? 0 : "2000px",
          transition: "max-height 0.7s",
        }}
        className={`Weekly-divider__Content content_week_of_${parentElement}`}
      >
        {dates.map((date) => (
          <DailyDivider
            key={date}
            date={date}
            weekDisplayType={weekList}
            parentElement={parentElement}
            todos={todos.filter((todo) => todo.date === date)}
          />
        ))}
      </div>
    </div>
  );
};
