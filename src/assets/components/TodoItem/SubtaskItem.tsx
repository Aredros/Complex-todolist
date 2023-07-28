import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../../../config/firebase";
import {
  collection,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

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

export const SubTaskItem = (props: TodoItemProps) => {
  const { todo } = props;

  const {
    allColors,
    allTodos = [],
    setAllTodos = () => {},
    isLoggedIn,
  } = useContext(AppContext) || {}; // Destructure allColors from the context

  const [subtaskText, setSubtaskText] = useState<string>("");

  //START EDIT THE Subtask
  // Function to change the editing status of a SubTask
  const editSubTask = async (id: string, theSubID: string) => {
    const updatedTodos = (allTodos || []).map((todo) =>
      todo.id === id
        ? {
            ...todo,
            subTask: todo.subTask?.map((each) =>
              each.subTaskID === theSubID
                ? {
                    ...each,
                    isSubtaskEditing: !each.isSubtaskEditing,
                    subTask: each.isSubtaskEditing ? subtaskText : each.subTask,
                  }
                : each
            ),
          }
        : todo
    );
    setAllTodos(updatedTodos);
    setSubtaskText("");
    if (isLoggedIn) {
      try {
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

        // Update the subTask of the document associated with the user and todo ID
        querySnapshot.docs.forEach(async (doc) => {
          const updatedSubTask = doc
            .data()
            .subTask.map((subtask: ITSubtaskTodo) =>
              subtask.subTaskID === theSubID
                ? {
                    ...subtask,
                    isSubtaskEditing: !subtask.isSubtaskEditing,
                    subTask: subtask.isSubtaskEditing
                      ? subtaskText
                      : subtask.subTask,
                  }
                : subtask
            );
          await updateDoc(doc.ref, { subTask: updatedSubTask });
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  //Delete the selecte SubTask
  const deleteSubTask = async (id: string, theSubID: string) => {
    const updatedTodos = (allTodos || []).map((todo) =>
      todo.id === id
        ? {
            ...todo,
            subTask: todo.subTask?.filter(
              (each) => each.subTaskID !== theSubID
            ),
          }
        : todo
    );
    setAllTodos(updatedTodos);
    if (isLoggedIn) {
      try {
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

        // Update the subTask of the document associated with the user and todo ID
        querySnapshot.docs.forEach(async (doc) => {
          const updatedSubTask = doc
            .data()
            .subTask.filter(
              (subtask: ITSubtaskTodo) => subtask.subTaskID !== theSubID
            );
          await updateDoc(doc.ref, { subTask: updatedSubTask });
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const toggleSubTaskComplete = async (id: string, theSubID: string) => {
    const updatedTodos = (allTodos || []).map((todo) =>
      todo.id === id
        ? {
            ...todo,
            subTask: todo.subTask?.map((each) =>
              each.subTaskID === theSubID
                ? {
                    ...each,
                    subTaskCompleted: !each.subTaskCompleted,
                  }
                : each
            ),
          }
        : todo
    );
    setAllTodos(updatedTodos);

    if (isLoggedIn) {
      try {
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

        // Update the subTaskCompleted status of the document associated with the user and todo ID
        querySnapshot.docs.forEach(async (doc) => {
          const updatedSubTask = doc
            .data()
            .subTask.map((subtask: ITSubtaskTodo) =>
              subtask.subTaskID === theSubID
                ? {
                    ...subtask,
                    subTaskCompleted: !subtask.subTaskCompleted,
                  }
                : subtask
            );
          await updateDoc(doc.ref, { subTask: updatedSubTask });
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  //UPDATE LocalStorage when allTodos changes
  useEffect(() => {
    if (!isLoggedIn) {
      // Update localStorage whenever allTodos changes
      localStorage.setItem("todosLocal", JSON.stringify(allTodos));
    }
  }, [allTodos]);

  return (
    <div className="TodoItem__subtask">
      {todo.subTask?.map((subtask: ITSubtaskTodo) => (
        <div
          key={subtask.subTaskID}
          className={`TodoItem__subtask__item ${
            subtask.subTaskCompleted && "completed"
          }`}
        >
          <input
            type="checkbox"
            checked={subtask.subTaskCompleted}
            onChange={() => toggleSubTaskComplete(todo.id, subtask.subTaskID)}
          />
          {subtask.isSubtaskEditing ? (
            <input
              type="text"
              placeholder={
                subtask.subTask === "" ? "New subtask" : subtask.subTask
              }
              style={{ color: allColors?.itemText }}
              onChange={(e) => setSubtaskText(e.target.value)}
            />
          ) : (
            <p>{subtask.subTask === "" ? "New subtask" : subtask.subTask}</p>
          )}

          <FontAwesomeIcon
            icon={faPenToSquare}
            style={{ color: allColors?.buttonIcons }}
            onClick={() => editSubTask(todo.id, subtask.subTaskID)}
          />
          <FontAwesomeIcon
            icon={faDeleteLeft}
            style={{ color: allColors?.buttonIcons }}
            onClick={() => deleteSubTask(todo.id, subtask.subTaskID)}
          />
        </div>
      ))}
    </div>
  );
};
