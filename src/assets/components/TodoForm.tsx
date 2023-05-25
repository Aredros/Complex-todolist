import React, { useState } from "react";

interface TodoFormProps {
  addTodo: (
    task: string,
    nType: string,
    date: string,
    taskorreminder: string
  ) => void;
  types: { id: string; type: string; color: string }[];
}

export const TodoForm = ({ addTodo, types }: TodoFormProps) => {
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [taskorreminder, setTaskorreminder] = useState("task");

  //function to add a TODO to the array of todos
  const handleSubmit = (e: React.FormEvent) => {
    //preventDefault will prevent the page from reloading
    e.preventDefault();
    // If no date is selected, set it to the current date
    if (!date) {
      setDate(new Date().toISOString().slice(0, 10));
    }
    //If no type is selected, set it to the first type in the array
    if (!type) {
      setType(types[0].type);
    }
    if (!value) return;
    //call the addTodo function that was passed down from the App component and send the value of the input field and the type
    addTodo(value, type, date, taskorreminder);
    //reset the input fields after submitting
    setValue("");

    setDate(new Date().toISOString().slice(0, 10));
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <div className="TodoForm__TaskReminder">
        <input
          type="radio"
          name="task-reminder"
          value="task"
          onChange={() => setTaskorreminder("task")}
          checked={taskorreminder === "task"}
        />{" "}
        <label>Task </label>
        <input
          type="radio"
          name="task-reminder"
          value="reminder"
          onChange={() => setTaskorreminder("reminder")}
        />
        <label>Reminder</label>
      </div>
      <div className="TodoForm__Task">
        <input
          type="text"
          value={value}
          placeholder="Add a new task"
          className="TodoForm__Task__input"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="add-btn">
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
            <option key="type-id-no-type" value="No-cat">
              No-cat
            </option>
            {types.map((type) => (
              <option key={`type-id ${type.id}`} value={type.type}>
                {type.type}
              </option>
            ))}
          </select>
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
