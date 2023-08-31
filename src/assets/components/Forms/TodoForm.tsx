import React, { useState, useContext, useEffect, useRef } from "react";
import "../../styles/components/new-form.scss";
import { AppContext } from "../../../App";
import { v4 as uuidv4 } from "uuid";
import { auth, db } from "../../../config/firebase";
import { addDoc, collection } from "firebase/firestore";

export const TodoForm = () => {
  const {
    allColors,
    allTodos = [],
    setAllTodos = () => {},
    allTypes = [],
    isLoggedIn,
  } = useContext(AppContext) || {}; // Destructure allColors from the context

  const [value, setValue] = useState("");
  const [type, setType] = useState((allTypes && allTypes[0]?.id) || "");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [startTimeValue, setStartTimeValue] = useState("10:00");
  const [taskorreminder, setTaskorreminder] = useState("task");

  const mainFormHideRef = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    mainFormHideRef.current?.showModal();
  };

  const closeModal = () => {
    mainFormHideRef.current?.close();
  };

  //function to add a TODO
  const addNewTodo = async (
    todo: string,
    type: string,
    date: string,
    startTime: string,
    taskorreminder: string
  ) => {
    const newTodo = {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false,
      taskorreminder: taskorreminder,
      nType: taskorreminder === "task" ? type : "", // Set nType to type only if taskorreminder is "task", otherwise set it to empty
      user: auth.currentUser?.email || "",
      date: date,
      startTime: startTime,
      archived: false,
      subTask: [],
      failed: false,
      favorite: false,
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

  //function to add a TODO to the array of todos
  const handleSubmit = (e: React.FormEvent) => {
    //preventDefault will prevent the page from reloading
    e.preventDefault();
    // If no date is selected, set it to the current date
    if (!date) {
      setDate(new Date().toISOString().slice(0, 10));
    }

    if (!value) return;
    //call the addTodo function that was passed down from the App component and send the value of the input field and the type
    addNewTodo(value, type, date, startTimeValue, taskorreminder);
    //reset the input fields after submitting
    setValue("");

    setDate(new Date().toISOString().slice(0, 10));
    closeModal();
  };

  useEffect(() => {
    if (!isLoggedIn) {
      // Update localStorage whenever allTodos changes
      localStorage.setItem("todosLocal", JSON.stringify(allTodos));
    }
  }, [allTodos]);

  return (
    <>
      <div className="add-buttons">
        <button
          onClick={openModal}
          style={{
            backgroundColor: allColors?.buttonIcons,
            color: allColors?.buttonText,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-dasharray="18"
              stroke-dashoffset="18"
              stroke-linecap="round"
              stroke-width="2"
            >
              <path d="M12 5V19">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.4s"
                  dur="0.3s"
                  values="18;0"
                />
              </path>
              <path d="M5 12H19">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.3s"
                  values="18;0"
                />
              </path>
            </g>
          </svg>{" "}
          Task
        </button>
      </div>

      <dialog
        className="FormContainer"
        ref={mainFormHideRef}
        style={{ background: allColors?.formBackgroundColor }}
      >
        <div className="FormContainer__header">
          <h3>New Task</h3>

          <svg
            onClick={closeModal}
            width="25px"
            height="25px"
            viewBox="0 0 133 133"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="check-group"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <circle
                id="outline"
                stroke="transparent"
                strokeWidth="4"
                cx="66.5"
                cy="66.5"
                r="54.5"
              />
              <polyline
                id="check"
                stroke="#FFFFFF"
                strokeWidth="5.5"
                points="41 40 67 64 41 88"
              />
              <polyline
                id="check"
                stroke="#FFFFFF"
                strokeWidth="5.5"
                points="92 40 67 64 92 88"
              />
            </g>
          </svg>
        </div>

        <form className="TodoForm" onSubmit={handleSubmit}>
          <div className="TodoForm__radio">
            {" "}
            <div className="TodoForm__radio__option">
              <input
                type="radio"
                id="taskreminder"
                name="task-reminder"
                value="task"
                checked={taskorreminder === "task"}
                onChange={() => setTaskorreminder("task")}
              />{" "}
              <label htmlFor="task">Task</label>
            </div>
            <div className="TodoForm__radio__option">
              <input
                type="radio"
                id="taskreminder"
                name="task-reminder"
                value="reminder"
                checked={taskorreminder === "reminder"}
                onChange={() => setTaskorreminder("reminder")}
              />{" "}
              <label htmlFor="reminder">Reminder</label>
            </div>
          </div>

          <div className="TodoForm__Task">
            <input
              type="text"
              value={value}
              placeholder="Add a new task"
              className="TodoForm__Task__input"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="TodoForm__Category">
            <select
              id="type"
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              {...(taskorreminder === "reminder" && { disabled: true })}
            >
              {allTypes?.map((type) => (
                <option key={`type-id ${type?.id}`} value={type?.id}>
                  {type.typeName}
                </option>
              ))}
            </select>
          </div>
          <div className="TodoForm__CatDate">
            <div className="TodoForm__CatDate__date">
              <input
                type="time"
                id="startTime"
                placeholder="00:00"
                value={startTimeValue}
                onChange={(e) => setStartTimeValue(e.target.value)}
              />
            </div>
            <div className="TodoForm__CatDate__date">
              <input
                type="date"
                id="startDate"
                name="trip-start"
                //Default value is current date
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min="2018-01-01"
                max="2099-12-31"
              />
            </div>
          </div>
          <button
            type="submit"
            className="add-btn"
            style={{
              backgroundColor: allColors?.buttonIcons,
              color: allColors?.buttonText,
            }}
          >
            Add Task
          </button>
          <div className="TodoForm__overlay"></div>
        </form>
      </dialog>
    </>
  );
};
