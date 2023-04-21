import React, { useState } from "react";
import { DailyDivider } from "./DailyDivider";

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
    <div className="weekly-divider">
      <div className="week-titles">
        <div
          className={`week-titles-header ${
            weekPercentage === "100" && "completed-week-titles"
          }`}
          style={{
            background: `repeating-linear-gradient(to right, #2cd477 0%, #2cd477 ${weekPercentage}%, #8758ff ${weekNotComplete}%, #8758ff 100%)`,
            transition: "background 0.5s ease-in-out",
          }}
        >
          <h3>Week plan</h3>
          <p>Week is {weekPercentage}% completed</p>
        </div>
        <div
          className={`week-titles-editable-content ${
            weekPercentage === "100" && "completed-week-titles"
          }`}
        >
          {editingWeekObjective ? (
            <>
              {" "}
              <input
                type="text"
                value={weekObjective}
                onChange={(e) => setWeekObjective(e.target.value)}
                onBlur={() => setEditingWeekObjective(false)}
              />
              <button onClick={() => setEditingWeekObjective(false)}>
                edit
              </button>
            </>
          ) : (
            <>
              {" "}
              <p onClick={() => setEditingWeekObjective(true)}>
                {weekObjective ? weekObjective : "Write your week objective"}
              </p>
              <button onClick={() => setEditingWeekObjective(true)}>
                edit
              </button>
            </>
          )}
        </div>
      </div>
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
  );
};
