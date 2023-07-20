import React, { useState, useContext, useEffect } from "react";
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
  const [startTimeValue, setStartTimeValue] = useState("");
  const [taskorreminder, setTaskorreminder] = useState("task");

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
  };

  useEffect(() => {
    if (!isLoggedIn) {
      // Update localStorage whenever allTodos changes
      localStorage.setItem("todosLocal", JSON.stringify(allTodos));
    }
  }, [allTodos]);

  return (
    <form
      className="TodoForm"
      onSubmit={handleSubmit}
      style={{ background: allColors?.formBackgroundColor }}
    >
      <div className="TodoForm__Task">
        <input
          type="text"
          value={value}
          placeholder="Add a new task"
          className="TodoForm__Task__input"
          onChange={(e) => setValue(e.target.value)}
        />
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
      </div>
      <div className="TodoForm__CatDate">
        <div className="TodoForm__CatDate__category">
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
        <div className="TodoForm__CatDate__category">
          <select
            id="taskOrReminder"
            name="task-reminder"
            value={taskorreminder}
            onChange={(e) => setTaskorreminder(e.target.value)}
          >
            <option value="task">Task</option>
            <option value="reminder">Reminder</option>
          </select>
        </div>
        <div className="TodoForm__CatDate__date">
          <input
            type="time"
            id="startTime"
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
    </form>
  );
};
