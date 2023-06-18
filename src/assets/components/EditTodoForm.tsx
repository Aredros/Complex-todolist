import React, { useState, useContext } from "react";
import { AppContext } from "../../App";
import { TypesContext } from "../pages/TodoWrapper";

interface EditTodoFormProps {
  editTask?: (
    task: string,
    type: string,
    date: string,
    taskorreminder: string,
    id: string
  ) => void;
  task: {
    task: string;
    nType: string;
    date: string;
    taskorreminder: string;
    id: string;
    completed: boolean;
    isEditing: boolean;
  };
}

export const EditTodoForm = (props: EditTodoFormProps) => {
  const { editTask, task } = props;

  const [value, setValue] = useState(task.task);
  const [type, setType] = useState(task.nType);
  const [date, setDate] = useState(task.date);
  const [taskorreminder, setTaskorreminder] = useState(task.taskorreminder);

  const { allColors } = useContext(AppContext) || {}; // Destructure allColors from the context
  const { types } = useContext(TypesContext) || {}; // Destructure types from the context

  //this function is called when the user types in the input field
  const handleSubmit = (e: React.FormEvent) => {
    //preventDefault will prevent the page from reloading
    e.preventDefault();
    editTask?.(value, type, date, taskorreminder, task.id);
  };

  return (
    <form
      className="EditTodoForm"
      onSubmit={handleSubmit}
      style={{ background: allColors?.formBackgroundColor }}
    >
      <div className="TodoForm__TaskReminder">
        <input
          type="radio"
          name="task-reminder"
          onChange={() => setTaskorreminder("task")}
          checked={taskorreminder === "task"}
        />{" "}
        <label style={{ color: allColors?.titleTextColor }}>Task </label>
        <input
          type="radio"
          name="task-reminder"
          onChange={() => setTaskorreminder("reminder")}
          checked={taskorreminder === "reminder"}
        />
        <label style={{ color: allColors?.titleTextColor }}>Reminder</label>
      </div>
      <div className="EditTodoForm__Task">
        <input
          type="text"
          value={value}
          placeholder="Update task"
          className="EditTodoForm__Task__input"
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
          Update
        </button>
      </div>
      <div className="EditTodoForm__CatDate">
        <div className="EditTodoForm__CatDate__category">
          <select
            id={task.id}
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {types?.map((type) => (
              <option key={type.id} value={type.typeName}>
                {type.typeName}
              </option>
            ))}
          </select>
        </div>
        <div className="EditTodoForm__CatDate__date">
          <input
            type="date"
            id="start"
            name="trip-start"
            defaultValue={task.date}
            onChange={(e) => setDate(e.target.value)}
            min="2018-01-01"
            max="2099-12-31"
          />
        </div>{" "}
      </div>
    </form>
  );
};
