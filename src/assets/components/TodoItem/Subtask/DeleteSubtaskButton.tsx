import { useContext, useEffect } from "react";
import { AppContext } from "../../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../../../../config/firebase";
import {
  collection,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

interface ISubtask {
  subTaskCompleted: boolean;
  subTask: string;
  subTaskID: string;
  isSubtaskEditing: boolean;
}

interface ITSubtaskTodo {
  todoID: string;
  IndivSubtask: ISubtask;
}

export const DeleteSubtaskButton = (props: ITSubtaskTodo) => {
  const { IndivSubtask, todoID } = props;

  const {
    allColors,
    allTodos = [],
    setAllTodos = () => {},
    isLoggedIn,
  } = useContext(AppContext) || {}; // Destructure allColors from the context

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
              (subtask: ITSubtaskTodo) => IndivSubtask.subTaskID !== theSubID
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
    <FontAwesomeIcon
      icon={faDeleteLeft}
      style={{ color: allColors?.buttonIcons }}
      onClick={() => deleteSubTask(todoID, IndivSubtask.subTaskID)}
    />
  );
};
