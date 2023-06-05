import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

//Define all Style of every individual color of the app
interface IColors {
  outerBackgroundColor: string;
  innerBackgroundColor: string;
  titleTextColor: string;
  weeklyCardBG: string;
  weeklyCardTxt: string;
  buttonIcons: string;
  itemBackgroundColor: string;
  itemText: string;
  reminderBackgroundColor: string;
}

interface IType {
  id: string;
  typeName: string;
  color: string;
}

interface TypeItemProps {
  types: IType[]; // update the types prop to an array of IType objects
  deleteType: (type: string, id: string) => void;
  allColors: IColors;
}

export const TypeItem = (props: TypeItemProps) => {
  const { types, deleteType, allColors } = props;

  return (
    <>
      {types.map((type) => (
        <div
          className={`TodoItem`}
          key={`typeItem-${type.id}`}
          style={{
            backgroundColor: allColors.itemBackgroundColor,
            color: allColors.itemText,
          }}
        >
          <div
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "8px",
              background: type.color,
            }}
          ></div>
          <p>{type.typeName}</p>
          <div>
            <FontAwesomeIcon
              key={type.id}
              icon={faTrash}
              onClick={() => deleteType(type.typeName, type.id)}
              style={{ color: allColors.buttonIcons }}
            />
          </div>
        </div>
      ))}
    </>
  );
};
