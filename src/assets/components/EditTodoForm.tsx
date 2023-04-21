import React, { useState } from "react";

interface IType {
  type: string;
  color: string;
  id: string;
}

interface EditTodoFormProps {
  editTask: (task: string, type: string, date: string, id: string) => void;
  task: {
    task: string;
    nType: string;
    date: string;
    id: string;
    completed: boolean;
    isEditing: boolean;
  };
  types: IType[];
}

export const EditTodoForm = (props: EditTodoFormProps) => {
  const { editTask, task, types } = props;

  const [value, setValue] = useState(task.task);
  const [type, setType] = useState(task.nType);
  const [date, setDate] = useState(task.date);

  //this function is called when the user types in the input field
  const handleSubmit = (e: React.FormEvent) => {
    //preventDefault will prevent the page from reloading
    e.preventDefault();
    editTask(value, type, date, task.id);
  };

  return (
    <form className="EditTodoForm" onSubmit={handleSubmit}>
      <div className="Text-input">
        <input
          type="text"
          value={value}
          placeholder="Update task"
          className="todo-input"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Update
        </button>
      </div>
      <div className="under-line-inputs">
        <div className="Type-input">
          <select
            id={task.id}
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {types.map((type) => (
              <option key={type.id} value={type.type}>
                {type.type}
              </option>
            ))}
          </select>
        </div>
        <div className="Date-input">
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
