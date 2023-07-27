import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";
import { TodoItem } from "./TodoItem/TodoItem";
import { EditTodoForm } from "./Forms/EditTodoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";

interface DailyDividerProps {
  weekDisplayType: boolean;
  parentElement: string;
  date: string;
  todos: ITodos[];
}
interface ITodos {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
  taskorreminder: string;
  user: string;
  nType: string;
  date: string;
  startTime: string;
  archived: boolean;
  subTask: ITSubtaskTodo[];
}
interface ITSubtaskTodo {
  subTaskCompleted: boolean;
  subTask: string;
  subTaskID: string;
  isSubtaskEditing: boolean;
}

interface ITlocalStorageCollapse {
  dayDate: string;
  IsDayCollapsed: boolean;
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
    //AFTER DOING A CHANGE IN COLLAPSE SEND IT TO LOCAL STORAGE
    const storedCollapses = localStorage.getItem("collapsedItems");
    const parsedCollapses = storedCollapses ? JSON.parse(storedCollapses) : [];

    const existingCollapse = parsedCollapses.find(
      (itemOfCollapse: ITlocalStorageCollapse) =>
        itemOfCollapse.dayDate === date
    );
    if (existingCollapse) {
      // If the collapse for the specific day already exists, update its collapse status
      existingCollapse.IsDayCollapsed = !dayCollapsed;
    } else {
      // Create a new collapse and add it to parsedCollapses
      const newCollapse = {
        dayDate: date,
        IsDayCollapsed: !dayCollapsed,
      };
      parsedCollapses.push(newCollapse);
    }
    // Update localStorage with the updated collapses
    localStorage.setItem("collapsedItems", JSON.stringify(parsedCollapses));
  };

  const sortTodos = (todos: DailyDividerProps["todos"]) => {
    return todos.sort((a, b) => {
      const [hourA, minuteA] = a.startTime?.split(":").map(Number) ?? [0, 0];
      const [hourB, minuteB] = b.startTime?.split(":").map(Number) ?? [0, 0];

      if (hourA !== hourB) {
        return hourA - hourB; // Sort by hour first
      } else {
        return minuteA - minuteB; // If hours are equal, sort by minute
      }
    });
  };

  //Get the COLLAPSES from localStorage
  useEffect(() => {
    const storedCollapses = localStorage.getItem("collapsedItems") || "";
    // Fetch todos from LocalStorage
    const ParsedCollapses: ITlocalStorageCollapse[] = storedCollapses
      ? JSON.parse(storedCollapses)
      : [];

    const specificDay = ParsedCollapses.find(({ dayDate }) => dayDate === date);
    if (specificDay) {
      setDayCollapsed(specificDay.IsDayCollapsed);
    }
  }, []);

  return (
    <>
      <div
        className={`Daily-divider ${dayOfWeek} ${
          dayPercentage === "100" && "-completed-day"
        }`}
        style={{
          maxHeight: dayCollapsed ? 25 : "3000px",
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
                  dayPercentage === "100"
                    ? "#2cd477"
                    : allColors?.weeklyCardTxt,
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
          {sortTodos(todos).map((todo) =>
            todo.isEditing ? (
              <EditTodoForm key={todo.task} task={todo} />
            ) : (
              <TodoItem key={todo.task} todo={todo} />
            )
          )}
        </ul>
      </div>
      <p className="days-separator">. . .</p>
    </>
  );
};
