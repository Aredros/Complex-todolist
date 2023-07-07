import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";
import { TodoItem } from "./TodoItem/TodoItem";
import { EditTodoForm } from "./EditTodoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";

interface DailyDividerProps {
  weekDisplayType: boolean;
  parentElement: string;
  date: string;
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

export const DailyDivider = (props: DailyDividerProps) => {
  const { weekDisplayType, date, todos } = props;
  const [dayCollapsed, setDayCollapsed] = useState(false); //state for making the day element collapse when clicking on a button

  const { allColors } = useContext(AppContext) || {}; // Destructure allColors from the context

  //Get the total tasks for the day
  const totalDayTasks = todos.filter(
    (each) => each.taskorreminder !== "reminder"
  ).length;
  // Get completed tasks for the day
  const completedDayTasks = todos.filter(
    (task) => task.completed && task.taskorreminder !== "reminder"
  );
  // Use both previous variables to calculate the percentage of completed tasks
  const dayPercentage = (
    (completedDayTasks.length / totalDayTasks) *
    100
  ).toFixed(0);

  //get today's date so it can be compared with the date title and give a different style and text
  const today = new Date().toLocaleDateString("en-GB");
  //get the date from the props and convert it to a date object so it can be compared with today's date
  const dateObj = new Date(date).toLocaleDateString("en-GB");

  //get in a string the name of the day of the week "monday, tuesday, etc"
  const dayOfWeek = new Date(date).toLocaleDateString("en-GB", {
    weekday: "short",
  });

  //Change the Collapsed state
  const handleCollapseDayClick = () => {
    setDayCollapsed(!dayCollapsed);
  };

  return (
    <div
      className={`Daily-divider ${dayOfWeek} ${
        dayPercentage === "100" && "-completed-day"
      }`}
      style={{
        maxHeight: dayCollapsed ? 25 : "2000px",
        transition: "max-height 0.7s",
        overflow: "hidden",
      }}
    >
      <div className="Daily-divider__Header">
        <h3
          className={`Daily-divider__Header__Title date ${
            dateObj === today ? "todayDate" : ""
          }`}
        >
          {" "}
          {
            //use the new Date function to convert the date string to a date object
            new Date(date).toLocaleDateString("en-GB", {
              weekday: "short",
              day: "numeric",
              month: "short",
            })
          }
        </h3>

        <div className="percentageAndArchive">
          <p
            className="Daily-divider__Header__Title"
            style={{
              color:
                dayPercentage === "100" ? "#2cd477" : allColors?.weeklyCardTxt,
            }}
          >
            {isNaN(parseFloat(dayPercentage))
              ? "No tasks today"
              : `Day ${dayPercentage}% completed`}
          </p>
          {weekDisplayType && (
            <FontAwesomeIcon
              icon={dayCollapsed ? faChevronCircleDown : faChevronCircleUp}
              onClick={handleCollapseDayClick}
              style={{
                color: allColors?.buttonIcons,
                fontSize: "14px",
                alignSelf: "center",
              }}
            />
          )}
        </div>
      </div>

      <ul>
        {todos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm key={todo.task} task={todo} />
          ) : (
            <TodoItem key={todo.task} todo={todo} />
          )
        )}
      </ul>
    </div>
  );
};
