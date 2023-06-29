import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { WeekHeaderContext } from "./WeekHeader";

export const EditWeekObjective = () => {
  const { allColors } = useContext(AppContext) || {}; // Destructure allColors from the context
  const { setEditingWeekObjective } = useContext(WeekHeaderContext);

  return (
    <button
      onClick={() => setEditingWeekObjective(true)}
      style={{
        backgroundColor: allColors?.buttonIcons,
        color: allColors?.buttonText,
      }}
    >
      <FontAwesomeIcon icon={faEdit} />
      edit
    </button>
  );
};
