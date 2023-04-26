import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

interface IType {
  id: string;
  type: string;
  color: string;
}

interface TypeItemProps {
  types: IType[]; // update the types prop to an array of IType objects
  deleteType: (id: string) => void;
}

export const TypeItem = (props: TypeItemProps) => {
  const { types, deleteType } = props;

  return (
    <>
      {types.map((type) => (
        <div className={`TodoItem`} key={`typeItem-${type.id}`}>
          <div
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "8px",
              background: type.color,
            }}
          ></div>
          <p>{type.type}</p>
          <div>
            <FontAwesomeIcon
              key={type.id}
              icon={faTrash}
              onClick={() => deleteType(type.id)}
            />
          </div>
        </div>
      ))}
    </>
  );
};
