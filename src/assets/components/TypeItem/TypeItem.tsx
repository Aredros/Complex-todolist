import React, { useContext } from "react";
import { AppContext } from "../../../App";
import { TypesContext } from "../../pages/TodoWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

interface TypeItemProps {
  deleteType: (type: string, id: string) => void;
}

export const TypeItem = (props: TypeItemProps) => {
  const { deleteType } = props;

  const { allColors } = useContext(AppContext) || {}; // Destructure allColors from the context
  const { types } = useContext(TypesContext) || { types: null }; // Destructure allColors from the context

  return (
    <>
      {types?.map((type) => (
        <div
          className={`TodoItem`}
          key={`typeItem-${type.id}`}
          style={{
            backgroundColor: allColors?.itemBackgroundColor,
            color: allColors?.itemText,
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
              style={{ color: allColors?.buttonIcons }}
            />
          </div>
        </div>
      ))}
    </>
  );
};
