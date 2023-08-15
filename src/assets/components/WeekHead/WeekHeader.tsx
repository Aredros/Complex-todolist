import React, { useState, useEffect, useContext, createContext } from "react";
import { AppContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faChevronCircleDown,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { WeekSuccessPercentage } from "./WeekSuccessPercentage";
import { EditWeekObjective } from "./EditWeekObjective";
import { ArchiveWeekButton } from "./ArchiveWeekButton";
import { WeekTypeCounter } from "./WeekTypeCounter";

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
    startTime: string;
    archived: boolean;
    subTask: ITSubtaskTodo[];
    failed: boolean;
    favorite: boolean;
  }[];
}
interface ITSubtaskTodo {
  subTaskCompleted: boolean;
  subTask: string;
  subTaskID: string;
  isSubtaskEditing: boolean;
}

export const WeekHeaderContext = createContext<
  | {
      setEditingWeekObjective: (value: boolean) => void;
      weekObjective: string;
      setWeekObjective: (value: string) => void;
      editingWeekObjective: boolean;
    }
  | undefined
>(undefined);

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
  const [displayWeekTypeCounter, setDisplayWeekTypeCounter] = useState(true);

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
        setEditingWeekObjective,
        weekObjective,
        setWeekObjective,
        editingWeekObjective,
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

                  <ArchiveWeekButton Weektodos={todos} />

                  <button
                    onClick={() =>
                      setDisplayWeekTypeCounter(!displayWeekTypeCounter)
                    }
                    style={{
                      backgroundColor: allColors?.buttonIcons,
                      color: allColors?.buttonText,
                    }}
                  >
                    <FontAwesomeIcon icon={faLayerGroup} />
                    Progress
                  </button>
                </div>
                <FontAwesomeIcon
                  icon={faChevronCircleDown}
                  onClick={handleCollapseClick}
                  style={{
                    color: allColors?.buttonIcons,
                    transform: weekCollapsed ? "" : "rotate(180deg)",
                    transition: "transform 1s",
                  }}
                />
              </div>
            </>
          )}
        </div>
        <div
          style={{
            maxHeight: displayWeekTypeCounter ? 0 : "2000px",
            transition: "max-height 0.7s",
            overflow: "hidden",
            width: "100%",
            margin: "10px auto",
          }}
        >
          <WeekTypeCounter todos={todos} week={week} />
        </div>
      </div>
    </WeekHeaderContext.Provider>
  );
};
