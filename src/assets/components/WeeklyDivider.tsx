import React, { useState, useEffect } from "react";
import { DailyDivider } from "./DailyDivider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";

//Define all Style of every individual color of the app
interface IColors {
  outerBackgroundColor: string;
  innerBackgroundColor: string;
  titleTextColor: string;
  weeklyCardBG: string;
  weeklyBorder: string;
  weeklyCardTxt: string;
  buttonIcons: string;
  buttonText: string;
  formBackgroundColor: string;
  itemBackgroundColor: string;
  itemText: string;
  reminderBackgroundColor: string;
}

interface IType {
  typeName: string;
  color: string;
  id: string;
}

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

interface WeeklyDividerProps {
  parentElement: string;
  weekList: boolean;
  allColors: IColors;
  week: string;
  types: IType[];
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
  deleteTodoTask: (id: string) => void;
  toggleCompleteTask?: (id: string) => void;
  editTodoTask?: (id: string) => void;
  finishEditTask?: (
    task: string,
    type: string,
    date: string,
    taskorreminder: string,
    id: string
  ) => void;
  getDoneTodoList?: (doneTodoList: ITodo[]) => void;
  archiveMultipleTodos?: (id: string[]) => void;
}

export const WeeklyDivider = (props: WeeklyDividerProps) => {
  const {
    parentElement,
    week,
    allColors,
    weekList,
    types,
    todos,
    deleteTodoTask,
    toggleCompleteTask,
    editTodoTask,
    archiveMultipleTodos,
    finishEditTask,
  } = props;
  const [weekObjective, setWeekObjective] = useState("");
  const [editingWeekObjective, setEditingWeekObjective] = useState(false);
  //state for making the week element collapse when clicking on a button
  const [weekCollapsed, setWeekCollapsed] = useState(false);

  //Get the week objective from local storage
  useEffect(() => {
    const weekObjective = localStorage.getItem(`${week}-weekObjective`);
    if (weekObjective) {
      setWeekObjective(weekObjective);
    }
  }, []);

  //Save the week objective to local storage
  React.useEffect(() => {
    localStorage.setItem(`${week}-weekObjective`, weekObjective);
  }, [weekObjective]);

  const handleWeekObjective = (e: React.FormEvent) => {
    e.preventDefault();
    setWeekObjective(weekObjective);
    localStorage.setItem(`${week}-weekObjective`, weekObjective);
    setEditingWeekObjective(false);
  };

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

  //handle the click to send ALL items to the archive
  const handleArchiveClick = (todos: ITodo[]) => {
    (archiveMultipleTodos as (ids: string[]) => void)(
      todos.map((todo) => todo.id)
    );
  };

  return (
    <div
      className={`Weekly-divider ${!weekList && "Weekly-divider-list"}`}
      style={{
        backgroundColor: allColors.weeklyCardBG,
        border: "1px solid " + allColors.weeklyBorder,
      }}
    >
      <div className="Weekly-divider__Header">
        <div
          className={`Weekly-divider__Header__Titles ${
            weekPercentage === "100" &&
            "Weekly-divider__Header__Titles-complete"
          }`}
          style={{
            background: `repeating-linear-gradient(to right, #2cd477 0%, #2cd477 ${weekPercentage}%, ${allColors.weeklyCardBG} ${weekNotComplete}%, ${allColors.weeklyCardBG} 100%)`,
            transition: "background 0.5s ease-in-out",
          }}
        >
          <h3 style={{ color: allColors.weeklyCardTxt }}>Week plan</h3>
          <p style={{ color: allColors.weeklyCardTxt }}>
            Week is {weekPercentage}% completed
          </p>
        </div>
        <div
          className={`Weekly-divider__Header__EditableContent ${
            weekPercentage === "100" &&
            "Weekly-divider__Header__EditableContent-complete"
          }`}
          style={{
            borderTop: "1px solid " + allColors.weeklyBorder,
          }}
        >
          {editingWeekObjective ? (
            <>
              {" "}
              <textarea
                className="Weekly-divider__Header__EditableContent__Editinginput"
                value={weekObjective}
                onChange={(e) => setWeekObjective(e.target.value)}
              ></textarea>
              <button
                onClick={handleWeekObjective}
                style={{
                  backgroundColor: allColors.buttonIcons,
                  color: allColors.buttonText,
                }}
              >
                edit
              </button>
            </>
          ) : (
            <>
              {" "}
              <p
                className="Weekly-divider__Header__EditableContent__paragraph"
                style={{ color: allColors.weeklyCardTxt }}
              >
                {weekObjective ? weekObjective : "Write your week objective"}
              </p>
              <div className="editOrCollapse">
                <button
                  onClick={() => setEditingWeekObjective(true)}
                  style={{
                    backgroundColor: allColors.buttonIcons,
                    color: allColors.buttonText,
                  }}
                >
                  edit
                </button>
                <FontAwesomeIcon
                  icon={weekCollapsed ? faChevronCircleDown : faChevronCircleUp}
                  onClick={() => setWeekCollapsed(!weekCollapsed)}
                  style={{
                    color: allColors.buttonIcons,
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <div
        style={{
          maxHeight: weekCollapsed ? 0 : "2000px",
          transition: "max-height 0.7s",
        }}
        className="Weekly-divider__Content"
      >
        {dates.map((date) => (
          <DailyDivider
            key={date}
            date={date}
            allColors={allColors}
            types={types}
            editTodoTask={editTodoTask}
            toggleCompleteTask={toggleCompleteTask}
            deleteTodoTask={deleteTodoTask}
            finishEditTask={finishEditTask}
            todos={todos.filter((todo) => todo.date === date)}
          />
        ))}
        {parentElement === "TodoWrapper" && (
          <button onClick={() => handleArchiveClick(todos)}>Archive</button>
        )}
      </div>
    </div>
  );
};
