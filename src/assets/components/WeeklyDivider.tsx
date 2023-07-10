import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";
import { DailyDivider } from "./DailyDivider";
import { WeekHeader } from "./WeekHead/WeekHeader";
import { WeekTypeCounter } from "./WeekHead/WeekTypeCounter";

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

interface WeeklyDividerProps {
  parentElement: string;
  weekList: boolean;
  week: string;
  todos: ITodo[];
}

export const WeeklyDivider = (props: WeeklyDividerProps) => {
  const { parentElement, week, weekList, todos } = props;

  const [weekCollapsed, setWeekCollapsed] = useState(false); //state for making the week element collapse when clicking on a button

  const { allColors } = useContext(AppContext) || {
    doneTodoList: [],
    setDoneTodoList: () => {},
  }; // Destructure allColors from the context

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
