import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../App";
import { IconWeekType } from "../WeekHead/IconWeekType";
import { StartTypeEditButton } from "./StartTypeEditButton";
import { DeleteTypeItemButton } from "./DeleteTypeItemButton";

interface IType {
  type: {
    id: string; // Add ID field to IType interface
    user: string;
    typeName: string;
    color: string;
    icon: string;
    isEditing: boolean;
  };
}

export const TypeItem = (props: IType) => {
  const { type } = props;

  const {
    allColors,
    allTodos = [],
    allTypes = [],
    isLoggedIn,
  } = useContext(AppContext) || {}; // Destructure allColors from the context

  //Get all items from this type
  const CountAllItems = (typeID: string) => {
    const todosArray = allTodos ? allTodos : [];
    if (Array.isArray(todosArray)) {
      return todosArray.filter((t) => t.nType === typeID).length;
    } else {
      // Handle the case where todosArray is not an array
      return 0;
    }
  };

  //Get all completed items from this type
  const CountCompletedItems = (typeID: string) => {
    if (!Array.isArray(allTodos)) {
      return 0;
    }
    const completedTodos = allTodos.filter(
      (t) => t.nType === typeID && t.completed === true
    );

    return completedTodos.length;
  };

  useEffect(() => {
    if (!isLoggedIn) {
      // Update localStorage whenever allTodos changes
      localStorage.setItem("typesLocal", JSON.stringify(allTypes));
    }
  }, [allTypes]);

  return (
    <div
      className={`TypeItem`}
      key={`typeItem-${type.id}`}
      style={{
        backgroundColor: allColors?.formBackgroundColor,
        color: allColors?.itemText,
      }}
    >
      <IconWeekType todoType={type.id} customKey={`typeItem-${type.id}`} />
      <div className="types-nameNnumber">
        {" "}
        <p>{type.typeName}</p>
        <p className="types-nameNnumber__number">
          {`[${CountCompletedItems(type.id)}/${CountAllItems(type.id)}]`}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <StartTypeEditButton type={type} key={`${type.id}-edit-button`} />
        <DeleteTypeItemButton type={type} key={`${type.id}-delete-button`} />
      </div>
    </div>
  );
};
