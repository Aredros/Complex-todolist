import { useContext } from "react";
import { AppContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { auth, db } from "../../../config/firebase";
import { addDoc, collection } from "firebase/firestore";

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
  };
}
interface ITSubtaskTodo {
  subTaskCompleted: boolean;
  subTask: string;
  subTaskID: string;
  isSubtaskEditing: boolean;
}

export const DuplicateItemButton = (props: TodoItemProps) => {
  const { todo } = props;

  const {
    allColors,
    allTodos = [],
    setAllTodos = () => {},
    isLoggedIn,
  } = useContext(AppContext) || {}; // Destructure allColors from the context

  //function to add a TODO
  const addNewTodo = async () => {
    const newTodo = {
      id: uuidv4(),
      task: todo.task,
      completed: todo.completed,
      isEditing: false,
      taskorreminder: todo.taskorreminder,
      nType: todo.nType,
      user: auth.currentUser?.email || "",
      date: todo.date,
      startTime: todo.startTime,
      archived: todo.archived,
      subTask: todo.subTask,
    };

    const updatedTodos = allTodos ? [...allTodos, newTodo] : [newTodo];
    setAllTodos(updatedTodos);

    if (isLoggedIn) {
      try {
        // Create a new Firestore collection reference
        const todosCollectionRef = collection(db, "todos");

        // Add the newTodo to Firestore
        await addDoc(todosCollectionRef, newTodo);

        console.log("sending to Firebase");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <FontAwesomeIcon
      icon={faCopy}
      onClick={() => addNewTodo()}
      style={{ color: allColors?.buttonIcons }}
    />
  );
};
