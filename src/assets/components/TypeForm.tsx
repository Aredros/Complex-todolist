import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../App";
import { v4 as uuidv4 } from "uuid";
import { auth, db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHeart,
  faLandmark,
  faCar,
  faLaptop,
  faWeightScale,
  faBook,
  faMoneyBillTrendUp,
  faGuitar,
  faHome,
  faX,
} from "@fortawesome/free-solid-svg-icons";

interface IType {
  id: string; // Add ID field to IType interface
  user: string;
  typeName: string;
  color: string;
  icon: string;
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

  // Function to lighten or darken a color
  const lightenDarkenColor = (color: string, amount: number) => {
    let usePound = false;
    if (color[0] === "#") {
      color = color.slice(1);
      usePound = true;
    }
    const num = parseInt(color, 16);
    let r = (num >> 16) + amount;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;
    let b = ((num >> 8) & 0x00ff) + amount;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;
    let g = (num & 0x0000ff) + amount;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
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
      <div className="TypeForm__icons">
        <FontAwesomeIcon
          icon={faX}
          style={{
            backgroundColor:
              iconValue === ""
                ? lightenDarkenColor(allColors?.buttonIcons || "", -20)
                : allColors?.buttonIcons,
            color: allColors?.buttonText,
          }}
          onClick={(e) => setIconValue("")}
        />
        <FontAwesomeIcon
          icon={faShieldHeart}
          style={{
            backgroundColor:
              iconValue === "faShieldHeart"
                ? lightenDarkenColor(allColors?.buttonIcons || "", -20)
                : allColors?.buttonIcons,
            color: allColors?.buttonText,
          }}
          onClick={(e) => setIconValue("faShieldHeart")}
        />
        <FontAwesomeIcon
          icon={faLandmark}
          style={{
            backgroundColor:
              iconValue === "faLandmark"
                ? lightenDarkenColor(allColors?.buttonIcons || "", -20)
                : allColors?.buttonIcons,
            color: allColors?.buttonText,
          }}
          onClick={(e) => setIconValue("faLandmark")}
        />
        <FontAwesomeIcon
          icon={faCar}
          style={{
            backgroundColor:
              iconValue === "faCar"
                ? lightenDarkenColor(allColors?.buttonIcons || "", -20)
                : allColors?.buttonIcons,
            color: allColors?.buttonText,
          }}
          onClick={(e) => setIconValue("faCar")}
        />
        <FontAwesomeIcon
          icon={faLaptop}
          style={{
            backgroundColor:
              iconValue === "faLaptop"
                ? lightenDarkenColor(allColors?.buttonIcons || "", -20)
                : allColors?.buttonIcons,
            color: allColors?.buttonText,
          }}
          onClick={(e) => setIconValue("faLaptop")}
        />
        <FontAwesomeIcon
          icon={faWeightScale}
          style={{
            backgroundColor:
              iconValue === "faWeightScale"
                ? lightenDarkenColor(allColors?.buttonIcons || "", -20)
                : allColors?.buttonIcons,
            color: allColors?.buttonText,
          }}
          onClick={(e) => setIconValue("faWeightScale")}
        />
        <FontAwesomeIcon
          icon={faBook}
          style={{
            backgroundColor:
              iconValue === "faBook"
                ? lightenDarkenColor(allColors?.buttonIcons || "", -20)
                : allColors?.buttonIcons,
            color: allColors?.buttonText,
          }}
          onClick={(e) => setIconValue("faBook")}
        />
        <FontAwesomeIcon
          icon={faMoneyBillTrendUp}
          style={{
            backgroundColor:
              iconValue === "faMoneyBillTrendUp"
                ? lightenDarkenColor(allColors?.buttonIcons || "", -20)
                : allColors?.buttonIcons,
            color: allColors?.buttonText,
          }}
          onClick={(e) => setIconValue("faMoneyBillTrendUp")}
        />
        <FontAwesomeIcon
          icon={faGuitar}
          style={{
            backgroundColor:
              iconValue === "faGuitar"
                ? lightenDarkenColor(allColors?.buttonIcons || "", -20)
                : allColors?.buttonIcons,
            color: allColors?.buttonText,
          }}
          onClick={(e) => setIconValue("faGuitar")}
        />
        <FontAwesomeIcon
          icon={faHome}
          style={{
            backgroundColor:
              iconValue === "faHome"
                ? lightenDarkenColor(allColors?.buttonIcons || "", -20)
                : allColors?.buttonIcons,
            color: allColors?.buttonText,
          }}
          onClick={(e) => setIconValue("faHome")}
        />
      </div>
    </form>
  );
};
