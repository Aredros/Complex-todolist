import React, { useContext } from "react";
import { AppContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const TypeItem = () => {
  const {
    allColors,
    allTodos,
    allTypes,
    setAllTypes = () => {},
  } = useContext(AppContext) || {}; // Destructure allColors from the context

  //function to delete a Type
  const deleteType = (type: string, id: string) => {
    //check if the type is being used
    if (allTodos && allTodos.some((t) => t.nType === type)) {
      //if the type is being use, alert the use
      alert("You cannot delete a type that is being used");
    } else {
      //filter the type to be deleted
      const updatedTypes = allTypes?.filter((t) => t.id !== id) || [];
      //save the new types array to local storage
      localStorage.setItem("typesLocal", JSON.stringify(updatedTypes));
      //set the types array to the updated array
      setAllTypes(updatedTypes);
    }
  };

  return (
    <>
      {allTypes?.map((type) => (
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