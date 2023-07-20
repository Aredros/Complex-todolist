import { useContext, useEffect } from "react";
import { AppContext } from "../../../App";
import { TypeItem } from "./TypeItem";
import { EditTypeForm } from "../Forms/EditTypeForm";

export const TypeArea = () => {
  const {
    allTypes,

    isLoggedIn,
  } = useContext(AppContext) || {}; // Destructure allColors from the context

  useEffect(() => {
    if (!isLoggedIn) {
      // Update localStorage whenever allTodos changes
      localStorage.setItem("typesLocal", JSON.stringify(allTypes));
    }
  }, [allTypes]);

  return (
    <>
      {allTypes?.map((type) =>
        type.isEditing ? (
          <EditTypeForm key={type.id} type={type} />
        ) : (
          <TypeItem key={type.id} type={type} />
        )
      )}
    </>
  );
};
