import { useContext } from "react";
import { AppContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../../../config/firebase";
import {
  collection,
  query,
  updateDoc,
  deleteDoc,
  where,
  getDocs,
} from "firebase/firestore";

interface IDoneTodo {
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
  favorite: boolean;
}
interface ITSubtaskTodo {
  subTaskCompleted: boolean;
  subTask: string;
  subTaskID: string;
  isSubtaskEditing: boolean;
}

interface DeleteWeekButtonIT {
  Weektodos: IDoneTodo[];
}

export const DeleteWeekButton = (props: DeleteWeekButtonIT) => {
  const { Weektodos } = props;

  const {
    allColors,
    allTodos = [],
    setAllTodos = () => {},
    isLoggedIn,
  } = useContext(AppContext) || { allTodos: [], setAllTodos: () => {} };

  //////

  //Function to delete all todos icluded
  const deleteMultipleTodos = (ids: string[]) => {
    const updateNdelete =
      allTodos && allTodos.filter((todo) => !ids.includes(todo.id));
    updateNdelete && setAllTodos(updateNdelete);

    ids.forEach(async (id: string) => {
      if (isLoggedIn) {
        try {
          console.log("erasing all todos from this week in Firebase");

          const userEmail = auth.currentUser?.email;
          const q = query(
            collection(db, "todos"),
            where("user", "==", userEmail),
            where("id", "==", id)
          );

          const querySnapshot = await getDocs(q);

          querySnapshot.docs.forEach(async (doc) => {
            await deleteDoc(doc.ref);
          });
        } catch (err) {
          console.log(err);
        }
      }
    });
  };

  //handle the click to send ALL items to the archive
  const handleDeleteClick = (
    todosToDelete: IDoneTodo[] | undefined = Weektodos
  ) => {
    if (Array.isArray(todosToDelete)) {
      const filteredTodos = todosToDelete.map((todo) => todo.id);
      deleteMultipleTodos(filteredTodos);
    }

    if (!isLoggedIn) {
      // Update local storage for offline mode
      localStorage.setItem("todosLocal", JSON.stringify(allTodos));
    }
  };

  return (
    <button
      onClick={() => handleDeleteClick()}
      style={{
        backgroundColor: allColors?.buttonIcons,
        color: allColors?.buttonText,
      }}
    >
      {" "}
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
};
