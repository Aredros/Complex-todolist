import { useContext, useEffect } from "react";
import { AppContext } from "../../../../App";
import { auth, db } from "../../../../config/firebase";
import {
  collection,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

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

export const CreateSubTaskItemButton = (props: TodoItemProps) => {
  const { todo } = props;
  const {
    allColors,
    allTodos = [],
    setAllTodos = () => {},
    isLoggedIn,
  } = useContext(AppContext) || {}; // Destructure allColors from the context

  //START EDIT THE TODO
  // Function to add a new subtask to the todo
  const addSubtaskTodoTask = async (id: string) => {
    const newSubTaskTodo = {
      subTaskCompleted: false,
      subTask: "",
      subTaskID: todo.id + "-" + uuidv4(),
      isSubtaskEditing: false,
    };

    const updatedSubTaskArray = [...todo.subTask, newSubTaskTodo];

    const updatedTodos = (allTodos || []).map((todo) =>
      todo.id === id ? { ...todo, subTask: updatedSubTaskArray } : todo
    );

    setAllTodos(updatedTodos);

    if (isLoggedIn) {
      try {
        console.log("updating todo with new subtask in Firebase");
        const userEmail = auth.currentUser?.email;
        const q = query(
          collection(db, "todos"),
          where("user", "==", userEmail),
          where("id", "==", id)
        );

        const querySnapshot = await getDocs(q);

        querySnapshot.docs.forEach(async (doc) => {
          await updateDoc(doc.ref, { subTask: updatedSubTaskArray });
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleEditClick = () => {
    addSubtaskTodoTask?.(todo.id);
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
      <svg
        onClick={handleEditClick}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill={allColors?.buttonIcons}
          d="M3 3h6v4H3V3m12 7h6v4h-6v-4m0 7h6v4h-6v-4m-2-4H7v5h6v2H5V9h2v2h6v2Z"
        />
      </svg>
    </>
  );
};
