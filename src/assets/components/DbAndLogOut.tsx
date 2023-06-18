import React, { useContext } from "react";
import { AppContext } from "../../App";

interface ITDBandLog {
  isLoggedIn: Boolean;
  sendDataToFirestore: () => void;
  logItOut: () => void;
  getTodosFromDatabase: () => void;
}

function DbAndLogOut(props: ITDBandLog) {
  const { isLoggedIn, logItOut, sendDataToFirestore, getTodosFromDatabase } =
    props;

  const { allColors } = useContext(AppContext) || {}; // Destructure allColors from the context
  return (
    <div className="bottom-buttons">
      {isLoggedIn && (
        <>
          <button
            onClick={sendDataToFirestore}
            style={{
              backgroundColor: allColors?.buttonIcons,
              color: allColors?.buttonText,
            }}
          >
            Send to Database
          </button>

          <button
            onClick={getTodosFromDatabase}
            style={{
              backgroundColor: allColors?.buttonIcons,
              color: allColors?.buttonText,
            }}
          >
            Get Todos from Database
          </button>
        </>
      )}
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
