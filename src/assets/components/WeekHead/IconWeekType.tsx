import { useContext } from "react";
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

interface TodoTypeProps {
  todoType: string;
  key: string;
}

export const IconWeekType = (props: TodoTypeProps) => {
  const { todoType, key } = props;

  const { allTypes } = useContext(AppContext) || {}; // Destructure allColors from the context

  //get the type color
  const typecolor = allTypes?.find((type) => type.typeName === todoType)?.color;

  // Get the type icon
  const typeIcon = allTypes?.find((type) => type.typeName === todoType)?.icon; // Assign a default icon if none is found

  return (
    <div
      className="((TodoItem__type-color"
      key={key}
      style={{
        backgroundColor: typecolor ?? "gray",
        padding: "1px",
        width: "25px",
        height: "25px",
        borderRadius: "15%",
      }}
    >
      {typeIcon && (
        <FontAwesomeIcon
          height={15}
          width={15}
          icon={
            typeIcon === "faShieldHeart"
              ? faShieldHeart
              : typeIcon === "faLandmark"
              ? faLandmark
              : typeIcon === "faCar"
              ? faCar
              : typeIcon === "faLaptop"
              ? faLaptop
              : typeIcon === "faWeightScale"
              ? faWeightScale
              : typeIcon === "faBook"
              ? faBook
              : typeIcon === "faMoneyBillTrendUp"
              ? faMoneyBillTrendUp
              : typeIcon === "faGuitar"
              ? faGuitar
              : typeIcon === "faHome"
              ? faHome
              : faX
          }
          style={{ color: "#edf9f3" }}
        />
      )}
    </div>
  );
};
