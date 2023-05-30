import React, { useState } from "react";

//Define all Style of every individual color of the app
interface IColors {
  outerBackgroundColor: string;
  innerBackgroundColor: string;
  titleTextColor: string;
  weeklyCardBG: string;
  weeklyBorder: string;
  weeklyCardTxt: string;
  buttonIcons: string;
  buttonText: string;
  formBackgroundColor: string;
  itemBackgroundColor: string;
  itemText: string;
  reminderBackgroundColor: string;
}

interface TypeFormProps {
  addType: (type: string, color: string) => void;
  allColors: IColors;
}

export const TypeForm = ({ addType, allColors }: TypeFormProps) => {
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
    <form
      className="TypeForm"
      onSubmit={handleSubmit}
      style={{ background: allColors.formBackgroundColor }}
    >
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
        <button
          type="submit"
          className="add-btn"
          style={{
            backgroundColor: allColors.buttonIcons,
            color: allColors.buttonText,
          }}
        >
          Add Type
        </button>
      </div>
    </form>
  );
};
