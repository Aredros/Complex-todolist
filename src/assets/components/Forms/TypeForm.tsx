import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../App";
import { v4 as uuidv4 } from "uuid";
import { auth, db } from "../../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { IconSelection } from "./IconSelection";

interface IType {
  id: string; // Add ID field to IType interface
  user: string;
  typeName: string;
  color: string;
  icon: string;
  isEditing: boolean;
}

export const TypeForm = () => {
  const [typeValue, setTypeValue] = useState("");
  const [colorValue, setColorValue] = useState("#ABABAB");
  const [iconValue, setIconValue] = useState("");

  const {
    allColors,
    allTypes = [],
    setAllTypes = () => {},
    isLoggedIn,
  } = useContext(AppContext) || {};

  //function to create a new Type
  const addType = async (typeName: string, color: string, icon: string) => {
    if (allTypes === null) {
      // Handle the case where types is null (optional)
      console.log("Types array is null");
      return;
    }
    //check if the type already exists
    if (!allTypes?.some((t) => t.typeName === typeName)) {
      const newType: IType = {
        id: uuidv4(), // Assign a unique ID to the new type
        user: auth.currentUser?.email || "",
        typeName: typeName,
        color: color,
        icon: icon || "",
        isEditing: false,
      };
      const newTypes = [...allTypes, newType];
      //add the new type to the types array
      setAllTypes(newTypes);

      if (isLoggedIn) {
        try {
          // Create a new Firestore collection reference
          const typesCollectionRef = collection(db, "categories");

          // Add the newTodo to Firestore
          await addDoc(typesCollectionRef, newType);

          console.log("sending TYPE to Firebase");
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typeValue) return;
    addType(typeValue, colorValue, iconValue);
    setTypeValue("");
    setColorValue("#ABABAB");
    setIconValue("");
  };

  const IconSelectionFunction = (SelectedIcon: string) => {
    return setIconValue(SelectedIcon);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      // Update localStorage whenever allTodos changes
      localStorage.setItem("typesLocal", JSON.stringify(allTypes));
    }
  }, [allTypes]);

  return (
    <form
      className="TypeForm"
      onSubmit={handleSubmit}
      style={{ background: allColors?.formBackgroundColor }}
    >
      <div className="TypeForm__Task type-form-organizer">
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
          placeholder="New Category"
          onChange={(e) => setTypeValue(e.target.value)}
        />
        <button
          type="submit"
          className="add-btn"
          style={{
            backgroundColor: allColors?.buttonIcons,
            color: allColors?.buttonText,
          }}
        >
          Add Type
        </button>
      </div>
      <IconSelection
        iconValue={iconValue}
        IconSelectionFunction={IconSelectionFunction}
      />
    </form>
  );
};
