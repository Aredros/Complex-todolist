import { useContext, useEffect } from "react";
import { AppContext } from "../../../App";
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

interface ITIconSelection {
  iconValue: string;
  IconSelectionFunction: (value: string) => void;
}

export const IconSelection = (props: ITIconSelection) => {
  const { IconSelectionFunction, iconValue } = props;

  const {
    allColors,
    allTodos = [],
    setAllTodos = () => {},
    isLoggedIn,
  } = useContext(AppContext) || {}; // Destructure allColors from the context

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

  return (
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
        onClick={(e) => IconSelectionFunction("")}
      />
      <FontAwesomeIcon
        icon={faShieldHeart}
        style={{
          backgroundColor:
            iconValue === "faShieldHeart" // Add "fa" prefix to the comparison
              ? lightenDarkenColor(allColors?.buttonIcons || "", -20)
              : allColors?.buttonIcons,
          color: allColors?.buttonText,
        }}
        onClick={(e) => IconSelectionFunction("faShieldHeart")} // Add "fa" prefix to the icon value
      />
      <FontAwesomeIcon
        icon={faLandmark}
        style={{
          backgroundColor:
            iconValue === "faLandmark" // Add "fa" prefix to the comparison
              ? lightenDarkenColor(allColors?.buttonIcons || "", -20)
              : allColors?.buttonIcons,
          color: allColors?.buttonText,
        }}
        onClick={(e) => IconSelectionFunction("faLandmark")} // Add "fa" prefix to the icon value
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
        onClick={(e) => IconSelectionFunction("faCar")}
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
        onClick={(e) => IconSelectionFunction("faLaptop")}
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
        onClick={(e) => IconSelectionFunction("faWeightScale")}
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
        onClick={(e) => IconSelectionFunction("faBook")}
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
        onClick={(e) => IconSelectionFunction("faMoneyBillTrendUp")}
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
        onClick={(e) => IconSelectionFunction("faGuitar")}
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
        onClick={(e) => IconSelectionFunction("faHome")}
      />
    </div>
  );
};
