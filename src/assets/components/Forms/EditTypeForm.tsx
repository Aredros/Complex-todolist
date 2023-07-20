import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../App";
import { auth, db } from "../../../config/firebase";
import {
  collection,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { IconSelection } from "./IconSelection";

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

export const EditTypeForm = (props: IType) => {
  const { type } = props;

  const [typeValue, setTypeValue] = useState(type.typeName);
  const [colorValue, setColorValue] = useState(type.color);
  const [iconValue, setIconValue] = useState(type.icon);

  const {
    allColors,
    allTodos,
    allTypes,
    setAllTypes = () => {},
    isLoggedIn,
  } = useContext(AppContext) || {}; // Destructure allColors from the context

  const IconEditSelectionFunction = (SelectedIcon: string) => {
    return setIconValue(SelectedIcon);
  };

  //function to change the editing status of a TODO
  const finishEditType = async (
    id: string,
    typeName: string,
    color: string,
    icon: string
  ) => {
    if (isLoggedIn) {
      try {
        console.log("Updating ype in Firebase");

        // Get the current user's email
        const userEmail = auth.currentUser?.email;

        // Create a query to fetch the specific todo based on the user and todo ID
        const q = query(
          collection(db, "categories"),
          where("user", "==", userEmail),
          where("id", "==", id)
        );

        // Get the document that matches the query
        const querySnapshot = await getDocs(q);

        // Update the document associated with the user and todo ID
        querySnapshot.docs.forEach(async (doc) => {
          await updateDoc(doc.ref, {
            typeName,
            color,
            icon,
            isEditing: false,
          });
        });
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
    // Update the local todos state
    const updatedTypes = (allTypes || []).map((type) =>
      type.id === id
        ? {
            ...type,
            typeName,
            color,
            icon,
            isEditing: false,
          }
        : type
    );
    setAllTypes(updatedTypes);
  };

  //this function is called when the user types in the input field
  const handleSubmit = (e: React.FormEvent) => {
    //preventDefault will prevent the page from reloading
    e.preventDefault();
    finishEditType?.(type.id, typeValue, colorValue, iconValue);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      // Update localStorage whenever allTodos changes
      localStorage.setItem("typesLocal", JSON.stringify(allTypes));
    }
  }, [allTypes]);

  return (
    <form
      className={`TypeItem`}
      key={`typeItem-${type.id}`}
      style={{
        backgroundColor: allColors?.formBackgroundColor,
        color: allColors?.itemText,
      }}
    >
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
        placeholder="Update task"
        className="EditTodoForm__Task__input"
        onChange={(e) => setTypeValue(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <IconSelection
        iconValue={iconValue}
        IconSelectionFunction={IconEditSelectionFunction}
      />
    </form>
  );
};
