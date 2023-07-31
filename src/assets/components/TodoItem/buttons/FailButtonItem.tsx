import { useContext, useEffect } from "react";
import { AppContext } from "../../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../../../../config/firebase";
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

export const FailButtonItem = (props: TodoItemProps) => {
  const { todo } = props;

  const {
    allColors,
    allTodos = [],
    setAllTodos = () => {},
    isLoggedIn,
  } = useContext(AppContext) || {}; // Destructure allColors from the context

  //SEND TO FAILED
  // Function to change the editing status of a TODO
  const failTodoTask = async (id: string) => {
    const updatedTodos = (allTodos || []).map((todo) =>
      todo.id === id ? { ...todo, failed: true } : todo
    );
    setAllTodos(updatedTodos);

    if (isLoggedIn) {
      try {
        console.log("updating fail status in Firebase");
        const userEmail = auth.currentUser?.email;
        const q = query(
          collection(db, "todos"),
          where("user", "==", userEmail),
          where("id", "==", id)
        );

        const querySnapshot = await getDocs(q);

        querySnapshot.docs.forEach(async (doc) => {
          await updateDoc(doc.ref, { failed: true });
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleEditClick = () => {
    failTodoTask?.(todo.id);
  };

  //UPDATE LocalStorage when allTodos changes
  useEffect(() => {
    if (!isLoggedIn) {
      // Update localStorage whenever allTodos changes
      localStorage.setItem("todosLocal", JSON.stringify(allTodos));
    }
  }, [allTodos]);

  return (
    <>
      {" "}
      {!todo.completed && todo.taskorreminder !== "reminder" && (
        <FontAwesomeIcon
          icon={faFileCircleXmark}
          onClick={handleEditClick}
          style={{ color: allColors?.buttonIcons }}
        />
      )}
    </>
  );
};
