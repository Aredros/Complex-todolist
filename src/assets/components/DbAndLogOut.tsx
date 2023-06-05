import React from "react";

//Define all Style of every individual color of the app
interface IColors {
  outerBackgroundColor: string;
  innerBackgroundColor: string;
  titleTextColor: string;
  weeklyCardBG: string;
  weeklyCardTxt: string;
  buttonIcons: string;
  buttonText: string;
  formBackgroundColor: string;
  itemBackgroundColor: string;
  itemText: string;
  reminderBackgroundColor: string;
}

interface ITDBandLog {
  isLoggedIn: Boolean;
  allColors: IColors;
  sendDataToFirestore: () => void;
  logItOut: () => void;
  getTodosFromDatabase: () => void;
}

function DbAndLogOut(props: ITDBandLog) {
  const {
    isLoggedIn,
    allColors,
    logItOut,
    sendDataToFirestore,
    getTodosFromDatabase,
  } = props;
  return (
    <div className="bottom-buttons">
      {isLoggedIn && (
        <>
          <button
            onClick={sendDataToFirestore}
            style={{
              backgroundColor: allColors.buttonIcons,
              color: allColors.buttonText,
            }}
          >
            Send to Database
          </button>

          <button
            onClick={getTodosFromDatabase}
            style={{
              backgroundColor: allColors.buttonIcons,
              color: allColors.buttonText,
            }}
          >
            Get Todos from Database
          </button>
        </>
      )}
      <button
        onClick={logItOut}
        style={{
          backgroundColor: allColors.buttonIcons,
          color: allColors.buttonText,
        }}
      >
        LogOut
      </button>
    </div>
  );
}

export default DbAndLogOut;
