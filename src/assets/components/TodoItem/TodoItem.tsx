import { useContext, useEffect, useState, useRef } from "react";
import { AppContext } from "../../../App";
import { auth, db } from "../../../config/firebase";
import {
  collection,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { StartEditButton } from "./buttons/StartEditButton";
import { IconAndColorItem } from "./IconAndColorItem";
import { DuplicateItemButton } from "./buttons/DuplicateItemButton";
import { CreateSubTaskItemButton } from "./buttons/CreateSubTaskItemButton";
import { SubTaskItem } from "./SubtaskItem";
import { FailButtonItem } from "./buttons/FailButtonItem";
import { DeleteItemButton } from "./buttons/DeleteItemButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCheck,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

interface TodoItemProps {
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
    archived: boolean;
    subTask: ITSubtaskTodo[];
    failed: boolean;
  };
}

interface ITSubtaskTodo {
  subTaskCompleted: boolean;
  subTask: string;
  subTaskID: string;
  isSubtaskEditing: boolean;
}

export const TodoItem = (props: TodoItemProps) => {
  const { todo } = props;

  const {
    allColors,
    allTodos = [],
    setAllTodos = () => {},
    isLoggedIn,
  } = useContext(AppContext) || {}; // Destructure allColors from the context

  const [editCompletionMenu, setEditCompletionMenu] = useState(false);

  // Add a reference to the TodoItem container
  const todoItemRef = useRef<HTMLLIElement | null>(null);

  // Close the completion menu when a click occurs outside the TodoItem
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        todoItemRef.current &&
        !todoItemRef.current.contains(event.target as Node)
      ) {
        setEditCompletionMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //function to change the completed status of a TODO
  const toggleCompleteTask = async (id: string) => {
    // Update the completed status in the local todos state
    const updatedTodos = (allTodos || []).map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setAllTodos(updatedTodos);
    if (isLoggedIn) {
      try {
        console.log("updating status in Firebase");

        // Get the current user's email
        const userEmail = auth.currentUser?.email;

        // Create a query to fetch the specific todo based on the user and todo ID
        const q = query(
          collection(db, "todos"),
          where("user", "==", userEmail),
          where("id", "==", id)
        );

        // Get the document that matches the query
        const querySnapshot = await getDocs(q);

        // Update the completed status of the document associated with the user and todo ID
        querySnapshot.docs.forEach(async (doc) => {
          await updateDoc(doc.ref, { completed: !doc.data().completed }); // Use updateDoc instead of doc.ref.update
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleToggleClick = () => {
    //handle the mark task as completed
    todo.taskorreminder === "task" ? toggleCompleteTask?.(todo.id) : null;
    setEditCompletionMenu(false);
  };

  //UPDATE LocalStorage when allTodos changes
  useEffect(() => {
    if (!isLoggedIn) {
      // Update localStorage whenever allTodos changes
      localStorage.setItem("todosLocal", JSON.stringify(allTodos));
    }
  }, [allTodos]);

  return (
    <li
      ref={todoItemRef}
      className={`TodoItem ${todo.completed && "completed"} Todo-${
        todo.taskorreminder
      }`}
      style={{
        color: allColors?.itemText,
        backgroundColor:
          todo.taskorreminder === "reminder"
            ? allColors?.reminderBackgroundColor
            : allColors?.itemBackgroundColor,
      }}
    >
      <IconAndColorItem todo={todo} handleToggleClick={handleToggleClick} />
      <div className="TodoItem__container">
        {" "}
        {todo.taskorreminder === "task" &&
          !todo.completed &&
          (editCompletionMenu ? (
            <>
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: allColors?.buttonIcons }}
                onClick={handleToggleClick}
              />
              <FailButtonItem todo={todo} />{" "}
            </>
          ) : (
            <FontAwesomeIcon
              icon={faCircle}
              style={{ color: allColors?.buttonIcons }}
              onClick={() => setEditCompletionMenu(true)}
            />
          ))}
        {todo.completed && (
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ color: allColors?.buttonIcons }}
            onClick={handleToggleClick}
          />
        )}
        <p className={`${todo.completed && "completed"}`}>
          <b>
            {todo.startTime !== undefined && todo.startTime !== ""
              ? `${todo.startTime} | `
              : null}
            {todo.task}
          </b>
          {todo.taskorreminder !== "reminder" && (
            <CreateSubTaskItemButton todo={todo} />
          )}
        </p>
      </div>

      <div className="TodoItem__icons">
        {todo.taskorreminder !== "reminder" ? (
          <DuplicateItemButton todo={todo} />
        ) : (
          <DeleteItemButton todo={todo} />
        )}
        <StartEditButton todo={todo} />
      </div>
      {todo.subTask?.length > 0 && <SubTaskItem todo={todo} />}
    </li>
  );
};
