import React, { useState } from "react";

interface TypeFormProps {
  addType: (type: string, color: string) => void;
}

export const TypeForm = ({ addType }: TypeFormProps) => {
  const [typeValue, setTypeValue] = useState("");
  const [colorValue, setColorValue] = useState("#ABABAB");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typeValue) return;
    addType(typeValue, colorValue);
    setTypeValue("");
    setColorValue("#ABABAB");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <div className="Text-input type-form-input">
        <input
          type="color"
          id="favcolor"
          name="favcolor"
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
        />
        <input
          type="text"
          value={typeValue}
          placeholder="Introduce a New Type"
          className="todo-input"
          onChange={(e) => setTypeValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          New-type
        </button>
      </div>
    </form>
  );
};
