import React, { useState, useEffect, useContext, createContext } from "react";
import { AppContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { WeekSuccessPercentage } from "./WeekSuccessPercentage";
import { EditWeekObjective } from "./EditWeekObjective";
import { ArchiveWeekButton } from "./ArchiveWeekButton";

interface ISuccessProps {
  parentElement: string;
  weekPercentage: string;
  weekNotComplete: number;
  weekCollapsed: Boolean;
  week: string;
  handleCollapseClick: () => void;
  todos: {
    id: string;
    task: string;
    completed: boolean;
    isEditing: boolean;
    taskorreminder: string;
    user: string;
    nType: string;
    date: string;
    archived: boolean;
  }[];
}

export const WeekHeaderContext = createContext<{
  setEditingWeekObjective: (value: boolean) => void;
  weekObjective: string;
  setWeekObjective: (value: string) => void;
  editingWeekObjective: boolean;
}>({
  weekObjective: "",
  setWeekObjective: () => {},
  editingWeekObjective: false,
  setEditingWeekObjective: () => {},
});

export const WeekHeader = (props: ISuccessProps) => {
  const {
    parentElement,
    week,
    weekPercentage,
    weekNotComplete,
    todos,
    weekCollapsed,
    handleCollapseClick,
  } = props;

  const [weekObjective, setWeekObjective] = useState("");
  const [editingWeekObjective, setEditingWeekObjective] = useState(false);

  const { allColors } = useContext(AppContext) || {}; // Destructure allColors from the context

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
    <WeekHeaderContext.Provider
      value={{
        weekObjective,
        setWeekObjective,
        editingWeekObjective,
        setEditingWeekObjective,
      }}
    >
      <div className={`Weekly-divider__Header header_week_of_${parentElement}`}>
        <WeekSuccessPercentage
          parentElement={parentElement}
          week={week}
          weekPercentage={weekPercentage}
          weekNotComplete={weekNotComplete}
        />
        <div
          className={`Weekly-divider__Header__EditableContent ${
            weekPercentage === "100" &&
            "Weekly-divider__Header__EditableContent-complete"
          }`}
          style={{
            borderTop: "1px solid " + allColors?.weeklyBorder,
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
                  backgroundColor: allColors?.buttonIcons,
                  color: allColors?.buttonText,
                }}
              >
                edit
              </button>
            </>
          ) : (
            <>
              {" "}
              <pre
                className="Weekly-divider__Header__EditableContent__paragraph"
                style={{ color: allColors?.weeklyCardTxt }}
              >
                {weekObjective ? weekObjective : "Write your week objective"}
              </pre>
              <div className="editOrCollapse">
                <div>
                  <EditWeekObjective />

                  {parentElement === "TodoWrapper" && (
                    <ArchiveWeekButton Weektodos={todos} />
                  )}
                </div>
                <FontAwesomeIcon
                  icon={weekCollapsed ? faChevronCircleDown : faChevronCircleUp}
                  onClick={handleCollapseClick}
                  style={{
                    color: allColors?.buttonIcons,
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </WeekHeaderContext.Provider>
  );
};
