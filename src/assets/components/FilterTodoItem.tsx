import React, { useState, useContext } from "react";
import { TypesContext } from "../pages/TodoWrapper";
import { AppContext } from "../../App";

interface TodoFormProps {
  filterOneItem: (IType: any) => void;
}

export const FilterTodoItem = ({ filterOneItem }: TodoFormProps) => {
  const [markedOneItem, setMarkedOneItem] = useState("");

  const { allColors } = useContext(AppContext) || {};
  const { types } = useContext(TypesContext) || {};

  // function to handle filtering of items
  const handleButtonClick = (filteredItem: string) => {
    if (filteredItem === "") {
      // If "Show all" option is selected, pass an empty string to indicate showing all items
      filterOneItem("");
    } else {
      filterOneItem(filteredItem);
    }
    setMarkedOneItem(filteredItem);
  };

  return (
    <form
      className="TodoForm"
      style={{ background: allColors?.formBackgroundColor }}
    >
      <div className="TodoForm__CatDate">
        <div className="TodoForm__CatDate__category">
          <select
            id="type"
            name="type"
            value={markedOneItem}
            onChange={(e) => handleButtonClick(e.target.value)}
          >
            <option key="type-id-no-type" value="">
              Show all
            </option>
            {types?.map((type) => (
              <option key={`type-id ${type.id}`} value={type.typeName}>
                {type.typeName}
              </option>
            ))}
          </select>
        </div>
        <label style={{ color: allColors?.titleTextColor }}>
          Filter One (testing)
        </label>
      </div>
    </form>
  );
};
