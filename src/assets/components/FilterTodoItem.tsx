import React, { useState } from "react";
import { darken } from "polished";

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

interface IType {
  id: string;
  typeName: string;
  color: string;
}

interface TodoFormProps {
  allColors: IColors;
  types: IType[];
  filterOneItem: (IType: any) => void;
}

export const FilterTodoItem = ({
  types,
  allColors,
  filterOneItem,
}: TodoFormProps) => {
  const [markedOneItem, setMarkedOneItem] = useState("");

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
      style={{ background: allColors.formBackgroundColor }}
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
            {types.map((type) => (
              <option key={`type-id ${type.id}`} value={type.typeName}>
                {type.typeName}
              </option>
            ))}
          </select>
        </div>
        <label style={{ color: allColors.titleTextColor }}>
          Filter One (testing)
        </label>
      </div>
    </form>
  );
};
