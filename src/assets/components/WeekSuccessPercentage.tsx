import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faChevronCircleDown,
  faBoxArchive,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

//Define all Style of every individual color of the app
interface IColors {
  outerBackgroundColor: string;
  innerBackgroundColor: string;
  titleTextColor: string;
  weeklyCardBG: string;
  weeklyBorder: string;
  weeklyCardTxt: string;
  buttonIcons: string;
  buttonText: string;
  formBackgroundColor: string;
  itemBackgroundColor: string;
  itemText: string;
  reminderBackgroundColor: string;
}
// Define interface for Todo object
interface ITodo {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
  taskorreminder: string;
  user: string;
  nType: string;
  date: string;
  archived: boolean;
}

interface ISuccessProps {
  parentElement: string;
  weekPercentage: string;
  weekNotComplete: number;
  weekCollapsed: Boolean;
  week: string;
  allColors: IColors;
  handleArchiveClick: () => void;
  handleCollapseClick: () => void;
  todos: ITodo[];
}

export const WeekSuccessPercentage = (props: ISuccessProps) => {
  const {
    todos,
    parentElement,
    week,
    weekPercentage,
    weekNotComplete,
    allColors,
    handleArchiveClick,
    weekCollapsed,
    handleCollapseClick,
  } = props;

  const [weekObjective, setWeekObjective] = useState("");
  const [editingWeekObjective, setEditingWeekObjective] = useState(false);

  //Get the week objective from local storage
  useEffect(() => {
    const weekObjective = localStorage.getItem(`${week}-weekObjective`);
    if (weekObjective) {
      setWeekObjective(weekObjective);
    }
  }, []);

  const handleWeekObjective = (e: React.FormEvent) => {
    e.preventDefault();
    setWeekObjective(weekObjective);
    localStorage.setItem(`${week}-weekObjective`, weekObjective);
    setEditingWeekObjective(false);
  };

  return (
    <div className={`Weekly-divider__Header header_week_of_${parentElement}`}>
      <div
        className={`Weekly-divider__Header__Titles ${
          weekPercentage === "100" && "Weekly-divider__Header__Titles-complete"
        }`}
        style={{
          background: `repeating-linear-gradient(to right, #2cd477 0%, #2cd477 ${weekPercentage}%, ${allColors.weeklyCardBG} ${weekNotComplete}%, ${allColors.weeklyCardBG} 100%)`,
          transition: "background 0.5s ease-in-out",
        }}
      >
        <h3 style={{ color: allColors.weeklyCardTxt }}>
          {parentElement === "TodoWrapper" ? "Week plan" : week}{" "}
        </h3>
        <p style={{ color: allColors.weeklyCardTxt }}>
          Week is {weekPercentage}% completed
        </p>
      </div>
      <div
        className={`Weekly-divider__Header__EditableContent ${
          weekPercentage === "100" &&
          "Weekly-divider__Header__EditableContent-complete"
        }`}
        style={{
          borderTop: "1px solid " + allColors.weeklyBorder,
        }}
      >
        {editingWeekObjective ? (
          <>
            {" "}
            <textarea
              className="Weekly-divider__Header__EditableContent__Editinginput"
              value={weekObjective}
              onChange={(e) => setWeekObjective(e.target.value)}
            ></textarea>
            <button
              onClick={handleWeekObjective}
              style={{
                backgroundColor: allColors.buttonIcons,
                color: allColors.buttonText,
              }}
            >
              edit
            </button>
          </>
        ) : (
          <>
            {" "}
            <p
              className="Weekly-divider__Header__EditableContent__paragraph"
              style={{ color: allColors.weeklyCardTxt }}
            >
              {weekObjective ? weekObjective : "Write your week objective"}
            </p>
            <div className="editOrCollapse">
              <div>
                <button
                  onClick={() => setEditingWeekObjective(true)}
                  style={{
                    backgroundColor: allColors.buttonIcons,
                    color: allColors.buttonText,
                  }}
                >
                  <FontAwesomeIcon icon={faEdit} />
                  edit
                </button>
                {parentElement === "TodoWrapper" && (
                  <button
                    onClick={() => handleArchiveClick()}
                    style={{
                      backgroundColor: allColors.buttonIcons,
                      color: allColors.buttonText,
                    }}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faBoxArchive} />
                    archive
                  </button>
                )}
              </div>
              <FontAwesomeIcon
                icon={weekCollapsed ? faChevronCircleDown : faChevronCircleUp}
                onClick={handleCollapseClick}
                style={{
                  color: allColors.buttonIcons,
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
