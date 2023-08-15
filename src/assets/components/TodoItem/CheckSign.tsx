import { useContext, useEffect } from "react";
import { AppContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCheck,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../../../config/firebase";
import {
  collection,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { FailButtonItem } from "./buttons/FailButtonItem";

interface TodoItemProps {
  setEditCompletionMenu: React.Dispatch<React.SetStateAction<boolean>>;
  handleToggleClick?: () => void;
  editCompletionMenu: boolean;
  todo: {
    id: string;
    task: string;
    completed: boolean;
    isEditing: boolean;
    taskorreminder: string;
    user: string;
    nType: string;
    date: string;
    startTime: string;
    subTask: ITSubtaskTodo[];
    failed: boolean;
    favorite: boolean;
  };
}
interface ITSubtaskTodo {
  subTaskCompleted: boolean;
  subTask: string;
  subTaskID: string;
  isSubtaskEditing: boolean;
}

export const CheckSign = (props: TodoItemProps) => {
  const { editCompletionMenu, todo, handleToggleClick, setEditCompletionMenu } =
    props;

  const {
    allColors,
    allTodos = [],
    setAllTodos = () => {},
    isLoggedIn,
  } = useContext(AppContext) || {}; // Destructure allColors from the context

  //UPDATE LocalStorage when allTodos changes
  useEffect(() => {
    if (!isLoggedIn) {
      // Update localStorage whenever allTodos changes
      localStorage.setItem("todosLocal", JSON.stringify(allTodos));
    }
  }, [allTodos]);

  return (
    <>
      {todo.taskorreminder === "task" &&
        (editCompletionMenu ? (
          <>
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                color: todo.favorite ? "#dfa201" : allColors?.buttonIcons,
              }}
              onClick={handleToggleClick}
            />
            <FailButtonItem todo={todo} />{" "}
          </>
        ) : (
          <svg
            onClick={
              todo.completed
                ? handleToggleClick
                : () => setEditCompletionMenu(true)
            }
            width="20px"
            height="20px"
            viewBox="0 0 133 133"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="check-group"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <circle
                id="filled-circle"
                fill={todo.completed ? "#07b481" : "#FFFFFF"}
                cx="66.5"
                cy="66.5"
                r="54.5"
              />
              <circle
                id="white-circle"
                fill="#FFFFFF"
                cx="66.5"
                cy="66.5"
                r="55.5"
              />
              <circle
                id="outline"
                stroke="#07b481"
                stroke-width="4"
                cx="66.5"
                cy="66.5"
                r="54.5"
              />
              <polyline
                id="check"
                stroke="#FFFFFF"
                stroke-width="5.5"
                points="41 70 56 85 92 49"
              />
            </g>
          </svg>
        ))}
    </>
  );
};
