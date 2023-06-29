import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../App";

interface ISuccessProps {
  parentElement: string;
  weekPercentage: string;
  weekNotComplete: number;
  week: string;
}

export const WeekSuccessPercentage = (props: ISuccessProps) => {
  const { parentElement, week, weekPercentage, weekNotComplete } = props;

  const { allColors } = useContext(AppContext) || {}; // Destructure allColors from the context

  return (
    <div
      className={`Weekly-divider__Header__Titles ${
        weekPercentage === "100" && "Weekly-divider__Header__Titles-complete"
      }`}
      style={{
        background: `repeating-linear-gradient(to right, #2cd477 0%, #2cd477 ${weekPercentage}%, ${allColors?.weeklyCardBG} ${weekNotComplete}%, ${allColors?.weeklyCardBG} 100%)`,
        transition: "background 0.5s ease-in-out",
      }}
    >
      <h3 style={{ color: allColors?.weeklyCardTxt }}>
        {parentElement === "TodoWrapper" ? "Week plan" : week}{" "}
      </h3>
      <p style={{ color: allColors?.weeklyCardTxt }}>
        Week is {weekPercentage}% completed
      </p>
    </div>
  );
};
