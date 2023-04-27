import React, { useState, useEffect } from "react";
import { DailyDivider } from "./DailyDivider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";

interface IType {
  type: string;
  color: string;
  id: string;
}

interface WeeklyDividerProps {
  week: string;
  types: IType[];
  todos: {
    id: string;
    task: string;
    completed: boolean;
    isEditing: boolean;
    nType: string;
    date: string;
  }[];
  deleteTodoTask: (id: string) => void;
  toggleCompleteTask: (id: string) => void;
  editTodoTask: (id: string) => void;
  finishEditTask: (
    task: string,
    id: string,
    date: string,
    type: string
  ) => void;
}

export const WeeklyDivider = (props: WeeklyDividerProps) => {
  const {
    week,
    types,
    todos,
    deleteTodoTask,
    toggleCompleteTask,
    editTodoTask,
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

  // Get tasks for the week
  const weekTasks = [...new Set(todos.map((todo) => todo))];
  // Get completed tasks for the week
  const completedTasks = weekTasks.filter((task) => task.completed);
  // Use both previous variables to calculate the percentage of completed tasks
  const weekPercentage = (
    (completedTasks.length / weekTasks.length) *
    100
  ).toFixed(0);

  //calculate how much of the week is not complete -only used for the style
  const weekNotComplete = parseInt(weekPercentage) - 100;

  return (
    <div className="Weekly-divider">
      <div className="Weekly-divider__Header">
        <div
          className={`Weekly-divider__Header__Titles ${
            weekPercentage === "100" &&
            "Weekly-divider__Header__Titles-complete"
          }`}
          style={{
            background: `repeating-linear-gradient(to right, #2cd477 0%, #2cd477 ${weekPercentage}%, #008b8e ${weekNotComplete}%, #008b8e 100%)`,
            transition: "background 0.5s ease-in-out",
          }}
        >
          <h3>Week plan</h3>
          <p>Week is {weekPercentage}% completed</p>
        </div>
        <div
          className={`Weekly-divider__Header__EditableContent ${
            weekPercentage === "100" &&
            "Weekly-divider__Header__EditableContent-complete"
          }`}
        >
          {editingWeekObjective ? (
            <>
              {" "}
              <textarea
                className="Weekly-divider__Header__EditableContent__Editinginput"
                value={weekObjective}
                onChange={(e) => setWeekObjective(e.target.value)}
              ></textarea>
              <button onClick={handleWeekObjective}>edit</button>
            </>
          ) : (
            <>
              {" "}
              <p className="Weekly-divider__Header__EditableContent__paragraph">
                {weekObjective ? weekObjective : "Write your week objective"}
              </p>
              <div className="editOrCollapse">
                <button onClick={() => setEditingWeekObjective(true)}>
                  edit
                </button>
                <FontAwesomeIcon
                  icon={weekCollapsed ? faChevronCircleDown : faChevronCircleUp}
                  onClick={() => setWeekCollapsed(!weekCollapsed)}
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
            types={types}
            editTodoTask={editTodoTask}
            toggleCompleteTask={toggleCompleteTask}
            deleteTodoTask={deleteTodoTask}
            finishEditTask={finishEditTask}
            todos={todos.filter((todo) => todo.date === date)}
          />
        ))}
      </div>
    </div>
  );
};
