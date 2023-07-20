import { useContext } from "react";
import { AppContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../../../config/firebase";
import {
  collection,
  doc,
  query,
  updateDoc,
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
  archived: boolean;
}

interface ArchiveButtonIT {
  Weektodos: IDoneTodo[];
}

export const ArchiveWeekButton = (props: ArchiveButtonIT) => {
  const { Weektodos } = props;

  const {
    allColors,
    allTodos = [],
    setAllTodos = () => {},
    isLoggedIn,
  } = useContext(AppContext) || { allTodos: [], setAllTodos: () => {} };

  //////

  //Function to change the Archived boolean status
  const archiveMultipleTodos = (ids: string[]) => {
    const updatedTodos = Weektodos?.map((todo) => {
      if (ids.includes(todo.id)) {
        // Only modify archived property if it's not already true
        return { ...todo, archived: !todo.archived };
      }
      return todo;
    }) as IDoneTodo[];

    // Modify the Weektodos array outside of setAllTodos
    if (allTodos) {
      const modifiedAllTodos = [
        ...allTodos.filter(
          (todo) => !Weektodos.find((item) => item.id === todo.id)
        ),
        ...updatedTodos,
      ];

      setAllTodos(modifiedAllTodos);
    }

    ids.forEach(async (id: string) => {
      if (isLoggedIn) {
        try {
          console.log("updating editing status in Firebase");

          const userEmail = auth.currentUser?.email;
          const q = query(
            collection(db, "todos"),
            where("user", "==", userEmail),
            where("id", "==", id)
          );

          const querySnapshot = await getDocs(q);

          querySnapshot.docs.forEach(async (doc) => {
            await updateDoc(doc.ref, { archived: !doc.data().archived });
          });
        } catch (err) {
          console.log(err);
        }
      }
    });
  };

  //handle the click to send ALL items to the archive
  const handleArchiveClick = (
    todosToArchive: IDoneTodo[] | undefined = Weektodos
  ) => {
    if (Array.isArray(todosToArchive)) {
      const filteredTodos = todosToArchive.map((todo) => todo.id);
      archiveMultipleTodos(filteredTodos);
    }

    if (!isLoggedIn) {
      // Update local storage for offline mode
      localStorage.setItem("todosLocal", JSON.stringify(allTodos));
    }
  };

  return (
    <button
      onClick={() => handleArchiveClick()}
      style={{
        backgroundColor: allColors?.buttonIcons,
        color: allColors?.buttonText,
      }}
    >
      {" "}
      <FontAwesomeIcon icon={faBoxArchive} />
      {Weektodos[0]?.archived ? "Unarchive" : "Archive"}
    </button>
  );
};
