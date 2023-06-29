import React, { useState, useEffect, useContext } from "react";
import { DisplayTypesContext } from "../pages/TodoWrapper";
import { AppContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faList } from "@fortawesome/free-solid-svg-icons";

export const DisplayTypes = () => {
  const { allColors } = useContext(AppContext) || {}; // Destructure allColors from the context
  const { setWeekList } = useContext(DisplayTypesContext) || {
    setWeekList: () => {},
  }; // Destructure setWeekList from the context

  return (
    <div className="changeWeekList">
      <p
        className="changeWeekList__title"
        style={{ color: allColors?.titleTextColor }}
      >
        Display type
      </p>
      <div className="changeWeekList__buttons">
        <div
          className="changeWeekList__buttons__button"
          style={{ backgroundColor: allColors?.buttonIcons }}
          onClick={() => setWeekList(true)}
        >
          <FontAwesomeIcon
            icon={faList}
            style={{ color: allColors?.buttonText }}
          />
          <span style={{ color: allColors?.buttonText }}> List</span>
        </div>
        <div
          className="changeWeekList__buttons__button"
          style={{ backgroundColor: allColors?.buttonIcons }}
          onClick={() => setWeekList(false)}
        >
          <FontAwesomeIcon
            icon={faCalendarDays}
            style={{ color: allColors?.buttonText }}
          />
          <span style={{ color: allColors?.buttonText }}> Calendar</span>
        </div>
      </div>
    </div>
  );
};
