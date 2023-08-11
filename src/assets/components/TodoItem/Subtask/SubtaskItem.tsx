import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../../../../config/firebase";
import {
  collection,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { EditSubtaskButton } from "./EditSubtaskButton";
import { DeleteSubtaskButton } from "./DeleteSubtaskButton";

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
    favorite: boolean;
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
        <div key={subtask.subTaskID} className={`TodoItem__subtask__item`}>
          <FontAwesomeIcon
            icon={subtask.subTaskCompleted ? faCircleCheck : faCircle}
            style={{ color: allColors?.buttonIcons }}
            onClick={() => toggleSubTaskComplete(todo.id, subtask.subTaskID)}
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
            <p
              className={`${subtask.subTaskCompleted && "completed"}`}
              onClick={() => toggleSubTaskComplete(todo.id, subtask.subTaskID)}
            >
              {subtask.subTask === "" ? "New subtask" : subtask.subTask}
            </p>
          )}

          <EditSubtaskButton
            IndivSubtask={subtask}
            todoID={todo.id}
            subtaskText={subtaskText}
            setSubtaskText={setSubtaskText}
          />
          <DeleteSubtaskButton IndivSubtask={subtask} todoID={todo.id} />
        </div>
      ))}
    </div>
  );
};
