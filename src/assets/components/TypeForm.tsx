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
    <form className="TypeForm" onSubmit={handleSubmit}>
      <div className="TypeForm__Task type-form-organizer">
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
          placeholder="New Category"
          onChange={(e) => setTypeValue(e.target.value)}
        />
        <button type="submit" className="add-btn">
          Add Type
        </button>
      </div>
    </form>
  );
};
