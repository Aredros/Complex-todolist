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

  //Get all items from this type
  const CountAllItems = (typeName: string) =>
    allTodos?.filter((t) => t.nType === typeName).length || [];

  //Get all completed items from this type
  const CountCompletedItems = (typeName: string) => {
    const MoreThanZero = allTodos?.filter(
      (t) => t.nType === typeName && t.completed === true
    ).length;
    if (MoreThanZero && MoreThanZero > 0) {
      return MoreThanZero;
    } else {
      return 0;
    }
  };

  return (
    <>
      {allTypes?.map((type) => (
        <div
          className={`TypeItem`}
          key={`typeItem-${type.id}`}
          style={{
            backgroundColor: allColors?.formBackgroundColor,
            color: allColors?.itemText,
          }}
        >
          <div
            className="TypeItem__color"
            style={{
              background: type.color,
            }}
          ></div>
          <div className="types-nameNnumber">
            {" "}
            <p>{type.typeName}</p>
            <p className="types-nameNnumber__number">
              {`[${CountCompletedItems(type.typeName)}/${CountAllItems(
                type.typeName
              )}]`}
            </p>
          </div>

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
