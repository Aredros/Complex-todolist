import React, { useContext } from "react";
import { AppContext } from "../../App";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

function DbAndLogOut() {
  const { allColors, isLoggedIn } = useContext(AppContext) || {}; // Destructure allColors from the context

  //function to log out//
  const logItOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

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
