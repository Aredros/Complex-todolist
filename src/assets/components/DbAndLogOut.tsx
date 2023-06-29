import React, { useContext } from "react";
import { AppContext } from "../../App";

interface ITDBandLog {
  isLoggedIn: Boolean;
  logItOut: () => void;
}

function DbAndLogOut(props: ITDBandLog) {
  const { isLoggedIn, logItOut } = props;

  const { allColors } = useContext(AppContext) || {}; // Destructure allColors from the context
  return (
    <div className="bottom-buttons">
      <button
        onClick={logItOut}
        style={{
          backgroundColor: allColors?.buttonIcons,
          color: allColors?.buttonText,
        }}
      >
        LogOut
      </button>
    </div>
  );
}

export default DbAndLogOut;
