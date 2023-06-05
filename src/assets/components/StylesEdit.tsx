import React from "react";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faChevronCircleDown,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

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

//combine all colors in an array
interface IcolorArray {
  allColors: IColors;
  allColorFunctions: IColorFuncts;
}

function StylesEdit(props: IcolorArray) {
  const { allColors, allColorFunctions } = props;

  const [outerBGcolor, setOuterBGcolor] = React.useState(
    allColors.outerBackgroundColor
  );
  const [innerBGcolor, setInnerBGcolor] = React.useState(
    allColors.innerBackgroundColor
  );
  const [TitleTextColor, setTitleTextColor] = React.useState(
    allColors.titleTextColor
  );
  const [weeklyCardBG, setWeeklyCardBG] = React.useState(
    allColors.weeklyCardBG
  );
  const [weeklyCardTextColor, setWeeklyCardTextColor] = React.useState(
    allColors.weeklyCardTxt
  );
  const [buttonIconsColor, setButtonIconsColor] = React.useState(
    allColors.buttonIcons
  );
  const [buttonTextColor, setButtonTextColor] = React.useState(
    allColors.buttonText
  );
  const [formBackgroundColor, setFormBackgroundColor] = React.useState(
    allColors.formBackgroundColor
  );
  const [itemBackgroundColor, setItemBackgroundColor] = React.useState(
    allColors.itemBackgroundColor
  );
  const [itemTextColor, setItemTextColor] = React.useState(allColors.itemText);

  const [reminderBackgroundColor, setReminderBackgroundColor] = React.useState(
    allColors.reminderBackgroundColor
  );

  return (
    <div
      className={`TodoWrapper`}
      style={{ backgroundColor: allColors.innerBackgroundColor }}
    >
      <Navigation allColors={allColors} />
      <h1 style={{ color: allColors.titleTextColor }}>Week Planner</h1>
      <h2 style={{ color: allColors.titleTextColor }}>Edit Styles</h2>
      <form className="editColor-form">
        <div>
          <input
            type="color"
            value={outerBGcolor}
            onChange={(e) => {
              allColorFunctions.change_outerBackgroundColor(e.target.value);
              setOuterBGcolor(e.target.value);
            }}
          />
          <label> Outer Background</label>
        </div>
        <div>
          <input
            type="color"
            value={innerBGcolor}
            onChange={(e) => {
              allColorFunctions.change_innerBackgroundColor(e.target.value);
              setInnerBGcolor(e.target.value);
            }}
          />
          <label> Inner Background</label>
        </div>
        <div>
          <input
            type="color"
            value={TitleTextColor}
            onChange={(e) => {
              allColorFunctions.change_titleTextColor(e.target.value);
              setTitleTextColor(e.target.value);
            }}
          />
          <label>Outer Text</label>
        </div>
        <div>
          <input
            type="color"
            value={weeklyCardBG}
            onChange={(e) => {
              allColorFunctions.change_weeklyCardBG(e.target.value);
              setWeeklyCardBG(e.target.value);
            }}
          />
          <label> Week-Card</label>
        </div>
        <div>
          <input
            type="color"
            value={weeklyCardTextColor}
            onChange={(e) => {
              allColorFunctions.change_weeklyCardTxt(e.target.value);
              setWeeklyCardTextColor(e.target.value);
            }}
          />
          <label> Week-Card Text</label>
        </div>
        <div>
          <input
            type="color"
            value={buttonIconsColor}
            onChange={(e) => {
              allColorFunctions.change_buttonIcons(e.target.value);
              setButtonIconsColor(e.target.value);
            }}
          />
          <label> Buttons and icons</label>
        </div>
        <div>
          <input
            type="color"
            value={buttonTextColor}
            onChange={(e) => {
              allColorFunctions.change_buttonText(e.target.value);
              setButtonTextColor(e.target.value);
            }}
          />
          <label> Buttons Text</label>
        </div>
        <div>
          <input
            type="color"
            value={formBackgroundColor}
            onChange={(e) => {
              allColorFunctions.change_formBackgroundColor(e.target.value);
              setFormBackgroundColor(e.target.value);
            }}
          />
          <label> Form Background</label>
        </div>
        <div>
          <input
            type="color"
            value={itemBackgroundColor}
            onChange={(e) => {
              allColorFunctions.change_itemBackgroundColor(e.target.value);
              setItemBackgroundColor(e.target.value);
            }}
          />
          <label> Item Background</label>
        </div>
        <div>
          <input
            type="color"
            value={itemTextColor}
            onChange={(e) => {
              allColorFunctions.change_itemText(e.target.value);
              setItemTextColor(e.target.value);
            }}
          />
          <label> Item Text</label>
        </div>
        <div>
          <input
            type="color"
            value={reminderBackgroundColor}
            onChange={(e) => {
              allColorFunctions.change_reminderBackgroundColor(e.target.value);
              setReminderBackgroundColor(e.target.value);
            }}
          />
          <label> Reminder Background</label>
        </div>
      </form>
      <br />
      <h3>Example:</h3>
      <br />
      <div
        className={`Weekly-divider`}
        style={{ backgroundColor: allColors.weeklyCardBG }}
      >
        <div className="Weekly-divider__Header">
          <div
            className={`Weekly-divider__Header__Titles`}
            style={{
              background: `repeating-linear-gradient(to right, #2cd477 0%, #2cd477 49%, ${allColors.weeklyCardBG} 50%, ${allColors.weeklyCardBG} 100%)`,
              transition: "background 0.5s ease-in-out",
            }}
          >
            <h3 style={{ color: allColors.weeklyCardTxt }}>Week plan</h3>
            <p style={{ color: allColors.weeklyCardTxt }}>
              Week is 50% completed
            </p>
          </div>
          <div className={`Weekly-divider__Header__EditableContent`}>
            <p
              className="Weekly-divider__Header__EditableContent__paragraph"
              style={{ color: allColors.weeklyCardTxt }}
            >
              Week objective here
            </p>
            <div className="editOrCollapse">
              <button
                style={{
                  backgroundColor: allColors.buttonIcons,
                  color: allColors.buttonText,
                }}
              >
                edit
              </button>
              <FontAwesomeIcon
                icon={faChevronCircleDown}
                style={{
                  color: allColors.buttonIcons,
                }}
              />
            </div>
          </div>
        </div>
        <div className="Weekly-divider__Content">
          <div className={`Daily-divider`}>
            <div className="Daily-divider__Header">
              <h3 className={`Daily-divider__Header__Title`}> Mon, 29 May</h3>
              <p className="Daily-divider__Header__Title">Day 50% completed</p>
            </div>
            <ul>
              <li
                className={`TodoItem Todo-task`}
                style={{
                  color: allColors.itemText,
                  backgroundColor: allColors.itemBackgroundColor,
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
                    style={{ color: allColors.buttonIcons }}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ color: allColors.buttonIcons }}
                  />
                </div>
              </li>
              <li
                className={`TodoItem Todo-task`}
                style={{
                  color: allColors.itemText,
                  backgroundColor: allColors.itemBackgroundColor,
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
                    style={{ color: allColors.buttonIcons }}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ color: allColors.buttonIcons }}
                  />
                </div>
              </li>
              <li
                className={`TodoItem Todo-reminder`}
                style={{ backgroundColor: allColors.reminderBackgroundColor }}
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
                    style={{ color: allColors.buttonIcons }}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ color: allColors.buttonIcons }}
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
