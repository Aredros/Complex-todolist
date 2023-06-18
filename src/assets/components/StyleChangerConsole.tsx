import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";

interface IColorFunctions {
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

function StyleChangerConsole() {
  const { allColors, setAllColors } = useContext(AppContext) || {}; // Destructure allColors from the context

  const [outerBGcolor, setOuterBGcolor] = React.useState(
    allColors?.outerBackgroundColor
  );
  const [innerBGcolor, setInnerBGcolor] = React.useState(
    allColors?.innerBackgroundColor
  );
  const [TitleTextColor, setTitleTextColor] = React.useState(
    allColors?.titleTextColor
  );
  const [weeklyCardBG, setWeeklyCardBG] = React.useState(
    allColors?.weeklyCardBG
  );
  const [weeklyCardTextColor, setWeeklyCardTextColor] = React.useState(
    allColors?.weeklyCardTxt
  );
  const [buttonIconsColor, setButtonIconsColor] = React.useState(
    allColors?.buttonIcons
  );
  const [buttonTextColor, setButtonTextColor] = React.useState(
    allColors?.buttonText
  );
  const [formBackgroundColor, setFormBackgroundColor] = React.useState(
    allColors?.formBackgroundColor
  );
  const [itemBackgroundColor, setItemBackgroundColor] = React.useState(
    allColors?.itemBackgroundColor
  );
  const [itemTextColor, setItemTextColor] = React.useState(allColors?.itemText);

  const [reminderBackgroundColor, setReminderBackgroundColor] = React.useState(
    allColors?.reminderBackgroundColor
  );

  //Function to process allColors with a repeating function and save them in localStorage
  const ProcessColorSave = (colorName: string, color: string) => {
    //Save in state
    setAllColors &&
      setAllColors((prevColors) => ({ ...prevColors, [colorName]: color }));
    //Save in local Storage
    localStorage.setItem(colorName, color);
  };
  //Function tos change all colors in the apps
  const changeColor: IColorFunctions = {
    change_outerBackgroundColor: (color) => {
      ProcessColorSave("outerBackgroundColor", color);
    },
    change_innerBackgroundColor: (color) => {
      ProcessColorSave("innerBackgroundColor", color);
    },
    change_titleTextColor: (color) => {
      ProcessColorSave("titleTextColor", color);
    },
    change_weeklyCardBG: (color) => {
      ProcessColorSave("weeklyCardBG", color);
    },
    change_weeklyCardTxt: (color) => {
      ProcessColorSave("weeklyCardTxt", color);
    },
    change_buttonIcons: (color) => {
      ProcessColorSave("buttonIcons", color);
    },
    change_buttonText: (color) => {
      ProcessColorSave("buttonText", color);
    },
    change_formBackgroundColor: (color) => {
      ProcessColorSave("formBackgroundColor", color);
    },
    change_itemBackgroundColor: (color) => {
      ProcessColorSave("itemBackgroundColor", color);
    },
    change_itemText: (color) => {
      ProcessColorSave("itemText", color);
    },
    change_reminderBackgroundColor: (color) => {
      ProcessColorSave("reminderBackgroundColor", color);
    },
  };

  return (
    <form className="editColor-form">
      <div>
        <input
          type="color"
          value={outerBGcolor}
          onChange={(e) => {
            changeColor.change_outerBackgroundColor(e.target.value);
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
            changeColor.change_innerBackgroundColor(e.target.value);
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
            changeColor.change_titleTextColor(e.target.value);
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
            changeColor.change_weeklyCardBG(e.target.value);
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
            changeColor.change_weeklyCardTxt(e.target.value);
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
            changeColor.change_buttonIcons(e.target.value);
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
            changeColor.change_buttonText(e.target.value);
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
            changeColor.change_formBackgroundColor(e.target.value);
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
            changeColor.change_itemBackgroundColor(e.target.value);
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
            changeColor.change_itemText(e.target.value);
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
            changeColor.change_reminderBackgroundColor(e.target.value);
            setReminderBackgroundColor(e.target.value);
          }}
        />
        <label> Reminder Background</label>
      </div>
    </form>
  );
}

export default StyleChangerConsole;
