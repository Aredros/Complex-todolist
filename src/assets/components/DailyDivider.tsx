import React from "react";
import { TodoItem } from "./TodoItem";
import { EditTodoForm } from "./EditTodoForm";

//Define all Style of every individual color of the app
interface IColors {
  outerBackgroundColor: string;
  innerBackgroundColor: string;
  titleTextColor: string;
  weeklyCardBG: string;
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
interface DailyDividerProps {
  date: string;
  allColors: IColors;
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
    allColors,
  } = props;

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

  return (
    <div
      className={`Daily-divider ${dayOfWeek} ${
        dayPercentage === "100" && "-completed-day"
      }`}
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
              allColors={allColors}
              types={types}
              editTask={finishEditTask}
            />
          ) : (
            <TodoItem
              key={todo.task}
              todo={todo}
              allColors={allColors}
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
