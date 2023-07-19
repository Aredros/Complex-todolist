import { useContext } from "react";
import { AppContext } from "../../../App";
import { Link } from "react-router-dom";

function Navigation() {
  const { allColors } = useContext(AppContext) || {};

  return (
    <div className="navigation">
      <Link
        to="/Complex-todolist/"
        style={{ backgroundColor: allColors?.innerBackgroundColor }}
      >
        <p style={{ color: allColors?.titleTextColor }}>Home</p>
      </Link>
      <Link
        to="/Complex-todolist/archive"
        style={{ backgroundColor: allColors?.innerBackgroundColor }}
      >
        <p style={{ color: allColors?.titleTextColor }}>Archive</p>
      </Link>
      <Link
        to="/Complex-todolist/styles"
        style={{ backgroundColor: allColors?.innerBackgroundColor }}
      >
        <p style={{ color: allColors?.titleTextColor }}>Styles</p>
      </Link>
    </div>
  );
}

export default Navigation;
