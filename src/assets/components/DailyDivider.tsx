import React from "react";
import { TodoItem } from "./TodoItem";
import { EditTodoForm } from "./EditTodoForm";

interface IType {
  type: string;
  color: string;
  id: string;
}
interface DailyDividerProps {
  date: string;
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

export const DailyDivider = (props: DailyDividerProps) => {
  const {
    date,
    types,
    todos,
    deleteTodoTask,
    toggleCompleteTask,
    editTodoTask,
    finishEditTask,
  } = props;

  //Get the total tasks for the day
  const totalDayTasks = todos.length;
  // Get completed tasks for the day
  const completedDayTasks = todos.filter((task) => task.completed);
  // Use both previous variables to calculate the percentage of completed tasks
  const dayPercentage = (
    (completedDayTasks.length / totalDayTasks) *
    100
  ).toFixed(0);

  //get today's date so it can be compared with the date title and give a different style and text
  const today = new Date().toLocaleDateString("en-GB");
  //get the date from the props and convert it to a date object so it can be compared with today's date
  const dateObj = new Date(date).toLocaleDateString("en-GB");

  return (
    <div
      className={`Daily-divider ${dayPercentage === "100" && "-completed-day"}`}
    >
      <div className="Daily-divider__Header">
        <h3
          className={`Daily-divider__Header__Title ${
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
        <p className="Daily-divider__Header__Title">
          Day {dayPercentage}% completed
        </p>
      </div>

      <ul>
        {todos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm
              key={todo.task}
              task={todo}
              types={types}
              editTask={finishEditTask}
            />
          ) : (
            <TodoItem
              key={todo.task}
              todo={todo}
              types={types}
              editTodoTask={editTodoTask}
              toggleCompleteTask={toggleCompleteTask}
              deleteTodoTask={deleteTodoTask}
            />
          )
        )}
      </ul>
    </div>
  );
};
