import React, { useState, useContext } from "react";
import { AppContext } from "../../App";
import { v4 as uuidv4 } from "uuid";

interface IType {
  id: string; // Add ID field to IType interface
  typeName: string;
  color: string;
}

export const TypeForm = () => {
  const [typeValue, setTypeValue] = useState("");
  const [colorValue, setColorValue] = useState("#ABABAB");

  const {
    allColors,
    allTypes = [],
    setAllTypes = () => {},
  } = useContext(AppContext) || {};

  //function to create a new Type
  const addType = (typeName: string, color: string) => {
    if (allTypes === null) {
      // Handle the case where types is null (optional)
      console.log("Types array is null");
      return;
    }
    //check if the type already exists
    if (!allTypes?.some((t) => t.typeName === typeName)) {
      const newType: IType = {
        id: uuidv4(), // Assign a unique ID to the new type
        typeName: typeName,
        color: color,
      };
      const newTypes = [...allTypes, newType];
      //add the new type to the types array
      setAllTypes(newTypes);
      //save the new types array to local storage
      localStorage.setItem("typesLocal", JSON.stringify(newTypes));
    }
  };

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
      style={{ background: allColors?.formBackgroundColor }}
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
            backgroundColor: allColors?.buttonIcons,
            color: allColors?.buttonText,
          }}
        >
          Add Type
        </button>
      </div>
    </form>
  );
};
