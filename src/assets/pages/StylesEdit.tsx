import { useContext } from "react";
import { AppContext } from "../../App";
import Navigation from "../components/Navigations/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import StyleChangerConsole from "../components/Styles/StyleChangerConsole";
import PersonalLinks from "../components/Navigations/PersonalLinks";

interface IColorFuncts {
  change_outerBackgroundColor: (color: string) => void;
  change_innerBackgroundColor: (color: string) => void;
  change_titleTextColor: (color: string) => void;
  change_weeklyCardBG: (color: string) => void;
  change_weeklyCardTxt: (color: string) => void;
  change_buttonIcons: (color: string) => void;
  change_buttonText: (color: string) => void;
  change_formBackgroundColor: (color: string) => void;
  change_itemBackgroundColor: (color: string) => void;
  change_itemText: (color: string) => void;
  change_reminderBackgroundColor: (color: string) => void;
}

function StylesEdit() {
  const { allColors } = useContext(AppContext) || {}; // Destructure allColors from the context

  return (
    <div
      className={`TodoWrapper`}
      style={{ backgroundColor: allColors?.innerBackgroundColor }}
    >
      <Navigation />
      <div className="MainTitle-and-subtitle">
        <PersonalLinks />
        <h1 style={{ color: allColors?.mainTitleColor }}>Styles</h1>
        <p className="h1sub" style={{ color: allColors?.mainTitleColor }}>
          By Cheo
        </p>
      </div>
      <h2 style={{ color: allColors?.titleTextColor }}>Edit Styles</h2>
      <StyleChangerConsole />

      <br />
      <h3 style={{ color: allColors?.titleTextColor }}>Example:</h3>
      <br />
      {/* FORM */}
      <form
        className="TodoForm"
        style={{ background: allColors?.formBackgroundColor }}
      >
        <div className="TodoForm__Task">
          <input
            type="text"
            placeholder="Example of new task"
            className="TodoForm__Task__input"
          />
          <button
            type="submit"
            className="add-btn"
            style={{
              backgroundColor: allColors?.buttonIcons,
              color: allColors?.buttonText,
            }}
          >
            Add Task
          </button>
        </div>
        <div className="TodoForm__CatDate">
          <div className="TodoForm__CatDate__category">
            <select id="type" name="type" value="types">
              <option value="">Example type</option>
            </select>
          </div>
          <div className="TodoForm__CatDate__category">
            <select id="taskOrReminder" name="task-reminder" value="task">
              <option value="task">Task</option>
              <option value="reminder">Reminder</option>
            </select>
          </div>
          <div className="TodoForm__CatDate__date">
            <input
              type="time"
              id="startTime"
              placeholder="00:00"
              value="10:00"
            />
          </div>
          <div className="TodoForm__CatDate__date">
            <input
              type="date"
              id="startDate"
              name="trip-start"
              //Default value is current date
              value="2018-01-01"
              min="2018-01-01"
              max="2099-12-31"
            />
          </div>
        </div>
        <div className="TodoForm__overlay"></div>
      </form>

      {/* THE ITEMS */}
      <div
        className={`Weekly-divider`}
        style={{ backgroundColor: allColors?.weeklyCardBG }}
      >
        <div className="Weekly-divider__Header">
          <div
            className={`Weekly-divider__Header__Titles`}
            style={{
              background: `repeating-linear-gradient(to right, #2cd477 0%, #2cd477 49%, ${allColors?.weeklyCardBG} 50%, ${allColors?.weeklyCardBG} 100%)`,
              transition: "background 0.5s ease-in-out",
            }}
          >
            <h3 style={{ color: allColors?.weeklyCardTxt }}>Week plan</h3>
            <p style={{ color: allColors?.weeklyCardTxt }}>
              Week is 50% completed
            </p>
          </div>
          <div className={`Weekly-divider__Header__EditableContent`}>
            <p
              className="Weekly-divider__Header__EditableContent__paragraph"
              style={{ color: allColors?.weeklyCardTxt }}
            >
              Week objective here
            </p>
            <div className="editOrCollapse">
              <button
                style={{
                  backgroundColor: allColors?.buttonIcons,
                  color: allColors?.buttonText,
                }}
              >
                edit
              </button>
              <FontAwesomeIcon
                icon={faChevronCircleDown}
                style={{
                  color: allColors?.buttonIcons,
                }}
              />
            </div>
          </div>
        </div>
        <div className="Weekly-divider__Content">
          <div className={`Daily-divider`}>
            <div className="Daily-divider__Header">
              <h3 className={`Daily-divider__Header__Title date`}>
                {" "}
                Mon, 29 May
              </h3>
              <p className="Daily-divider__Header__Title">Day 50% completed</p>
            </div>
            <ul>
              <li
                className={`TodoItem Todo-task`}
                style={{
                  color: allColors?.itemText,
                  backgroundColor: allColors?.itemBackgroundColor,
                }}
              >
                <div
                  className="TodoItem__type-color"
                  style={{
                    backgroundColor: "gray",
                  }}
                ></div>
                <div className="TodoItem__container">
                  {" "}
                  <p>Here goes the task / No-cat</p>
                </div>
                <div className="TodoItem__icons">
                  <FontAwesomeIcon
                    icon={faEdit}
                    style={{ color: allColors?.buttonIcons }}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ color: allColors?.buttonIcons }}
                  />
                </div>
              </li>
              <li
                className={`TodoItem Todo-task`}
                style={{
                  color: allColors?.itemText,
                  backgroundColor: allColors?.itemBackgroundColor,
                }}
              >
                <div
                  className="TodoItem__type-color"
                  style={{
                    backgroundColor: "gray",
                  }}
                ></div>
                <div className="TodoItem__container">
                  {" "}
                  <p>A second task / No-cat</p>
                </div>
                <div className="TodoItem__icons">
                  <FontAwesomeIcon
                    icon={faEdit}
                    style={{ color: allColors?.buttonIcons }}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ color: allColors?.buttonIcons }}
                  />
                </div>
              </li>
              <li
                className={`TodoItem Todo-reminder`}
                style={{ backgroundColor: allColors?.reminderBackgroundColor }}
              >
                <div
                  className="TodoItem__type-color"
                  style={{
                    backgroundColor: "gray",
                  }}
                ></div>
                <div className="TodoItem__container">
                  {" "}
                  <p>Reminder example</p>
                </div>
                <div className="TodoItem__icons">
                  <FontAwesomeIcon
                    icon={faEdit}
                    style={{ color: allColors?.buttonIcons }}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ color: allColors?.buttonIcons }}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StylesEdit;
