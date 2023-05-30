import React from "react";
import { NavLink, Link } from "react-router-dom";

//Define all Style of every individual color of the app
interface IColors {
  outerBackgroundColor: string;
  innerBackgroundColor: string;
  weeklyCardBG: string;
  titleTextColor: string;
}

//combine all colors in an array
interface IcolorArray {
  allColors: IColors;
}

function Navigation(props: IcolorArray) {
  const { allColors } = props;

  return (
    <div className="navigation">
      <Link
        to="/Complex-todolist/"
        style={{ backgroundColor: allColors.innerBackgroundColor }}
      >
        <p style={{ color: allColors.titleTextColor }}>Home</p>
      </Link>
      <Link
        to="/Complex-todolist/styles"
        style={{ backgroundColor: allColors.innerBackgroundColor }}
      >
        <p style={{ color: allColors.titleTextColor }}>Styles</p>
      </Link>
    </div>
  );
}

export default Navigation;
