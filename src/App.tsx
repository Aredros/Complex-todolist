import "./App.scss";
import "./Login.scss";
import "./Editpage.scss";

import { useState, useEffect } from "react";
import { TodoWrapper } from "./assets/components/TodoWrapper";
import { Auth } from "./assets/components/auth";
import { auth } from "./config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StylesEdit from "./assets/components/StylesEdit";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //array that stores all colors
  const [allColors, setAllColors] = useState({
    outerBackgroundColor: "#334549",
    innerBackgroundColor: "#ffffff",
    titleTextColor: "#005657",
    weeklyCardBG: "#ffffff",
    weeklyBorder: "#005657",
    weeklyCardTxt: "#000000",
    buttonIcons: "#005657",
    buttonText: "#ffffff",
    formBackgroundColor: "#5c72b280",
    itemBackgroundColor: "#ffffff",
    itemText: "#000000",
    reminderBackgroundColor: "#ffde8c",
  });

  //useEffect to get all stored colors in localStorage
  useEffect(() => {
    //empty array and local storage
    //localStorage.clear();
    //Stored Outer Background color
    const storedOuterBG = localStorage.getItem("outerBackgroundColor");
    if (storedOuterBG) {
      setAllColors((prevColors) => ({
        ...prevColors,
        outerBackgroundColor: storedOuterBG,
      }));
    }
    //Stored Inner Background color
    const storedInnerBG = localStorage.getItem("innerBackgroundColor");
    if (storedInnerBG) {
      setAllColors((prevColors) => ({
        ...prevColors,
        innerBackgroundColor: storedInnerBG,
      }));
    }
    //Stored Title Text color
    const storedTitleTextColor = localStorage.getItem("titleTextColor");
    if (storedTitleTextColor) {
      setAllColors((prevColors) => ({
        ...prevColors,
        titleTextColor: storedTitleTextColor,
      }));
    }
    //Stored Weekly Card Background color
    const storedWeeklyCardBG = localStorage.getItem("weeklyCardBG");
    if (storedWeeklyCardBG) {
      setAllColors((prevColors) => ({
        ...prevColors,
        weeklyCardBG: storedWeeklyCardBG,
      }));
    }
    //Stored Weekly Card Border color
    const storedWeeklyBorder = localStorage.getItem("weeklyBorder");
    if (storedWeeklyBorder) {
      setAllColors((prevColors) => ({
        ...prevColors,
        weeklyBorder: storedWeeklyBorder,
      }));
    }
    //Stored Weekly Card Text color
    const storedWeeklyCardTxt = localStorage.getItem("weeklyCardTxt");
    if (storedWeeklyCardTxt) {
      setAllColors((prevColors) => ({
        ...prevColors,
        weeklyCardTxt: storedWeeklyCardTxt,
      }));
    }
    //Stored Button Icons color
    const storedButtonIcons = localStorage.getItem("buttonIcons");
    if (storedButtonIcons) {
      setAllColors((prevColors) => ({
        ...prevColors,
        buttonIcons: storedButtonIcons,
      }));
    }
    //Stored Button Text color
    const storedButtonText = localStorage.getItem("buttonText");
    if (storedButtonText) {
      setAllColors((prevColors) => ({
        ...prevColors,
        buttonText: storedButtonText,
      }));
    }
    //Stored Form Background color
    const storedFormBG = localStorage.getItem("formBackgroundColor");
    if (storedFormBG) {
      setAllColors((prevColors) => ({
        ...prevColors,
        formBackgroundColor: storedFormBG,
      }));
    }
    //Stored Item Background color
    const storedItemBG = localStorage.getItem("itemBackgroundColor");
    if (storedItemBG) {
      setAllColors((prevColors) => ({
        ...prevColors,
        itemBackgroundColor: storedItemBG,
      }));
    }
    //Stored Item Text color
    const storedItemText = localStorage.getItem("itemText");
    if (storedItemText) {
      setAllColors((prevColors) => ({
        ...prevColors,
        itemText: storedItemText,
      }));
    }
    //Stored Reminder Background color
    const storedReminderBG = localStorage.getItem("reminderBackgroundColor");
    if (storedReminderBG) {
      setAllColors((prevColors) => ({
        ...prevColors,
        reminderBackgroundColor: storedReminderBG,
      }));
    }
  }, []);

  //Function to change with a button outerBackgroundColor
  const changeOuterBackgroundColor = (color: string) => {
    const newColor = {
      ...allColors,
      outerBackgroundColor: color,
    };
    setAllColors(newColor);
    //save in local storage individualy
    localStorage.setItem("outerBackgroundColor", color);
  };

  //Function to change with a button innerBackgroundColor
  const changeInnerBackgroundColor = (color: string) => {
    const newColor = {
      ...allColors,
      innerBackgroundColor: color,
    };
    setAllColors(newColor);
    //save in local storage
    localStorage.setItem("innerBackgroundColor", color);
  };

  const changeTitleTextColor = (color: string) => {
    const newColor = {
      ...allColors,
      titleTextColor: color,
    };
    setAllColors(newColor);
    //save in local storage
    localStorage.setItem("titleTextColor", color);
  };

  const changeWeeklyCardBG = (color: string) => {
    const newColor = {
      ...allColors,
      weeklyCardBG: color,
    };
    setAllColors(newColor);
    //save in local storage
    localStorage.setItem("weeklyCardBG", color);
  };

  const changeWeeklyBorder = (color: string) => {
    const newColor = {
      ...allColors,
      weeklyBorder: color,
    };
    setAllColors(newColor);
    //save in local storage
    localStorage.setItem("weeklyBorder", color);
  };

  const changeWeeklyCardTxt = (color: string) => {
    const newColor = {
      ...allColors,
      weeklyCardTxt: color,
    };
    setAllColors(newColor);
    //save in local storage
    localStorage.setItem("weeklyCardTxt", color);
  };

  const changeButtonIcons = (color: string) => {
    const newColor = {
      ...allColors,
      buttonIcons: color,
    };
    setAllColors(newColor);
    ///save in local storage
    localStorage.setItem("buttonIcons", color);
  };

  const changeButtonText = (color: string) => {
    const newColor = {
      ...allColors,
      buttonText: color,
    };
    setAllColors(newColor);
    //save in local storage
    localStorage.setItem("buttonText", color);
  };

  const changeFormBackgroundColor = (color: string) => {
    const newColor = {
      ...allColors,
      formBackgroundColor: color,
    };
    setAllColors(newColor);
    //save in local storage
    localStorage.setItem("formBackgroundColor", color);
  };

  const changeItemBackgroundColor = (color: string) => {
    const newColor = {
      ...allColors,
      itemBackgroundColor: color,
    };
    setAllColors(newColor);
    //save in local storage
    localStorage.setItem("itemBackgroundColor", color);
  };

  const changeItemText = (color: string) => {
    const newColor = {
      ...allColors,
      itemText: color,
    };
    setAllColors(newColor);
    //save in local storage
    localStorage.setItem("itemText", color);
  };

  const changeReminderBackgroundColor = (color: string) => {
    const newColor = {
      ...allColors,
      reminderBackgroundColor: color,
    };
    setAllColors(newColor);
    //save in local storage
    localStorage.setItem("reminderBackgroundColor", color);
  };

  const allColorFunctions = {
    changeOuterBackgroundColor,
    changeInnerBackgroundColor,
    changeTitleTextColor,
    changeWeeklyCardBG,
    changeWeeklyBorder,
    changeWeeklyCardTxt,
    changeButtonIcons,
    changeButtonText,
    changeFormBackgroundColor,
    changeItemBackgroundColor,
    changeItemText,
    changeReminderBackgroundColor,
  };

  //useEffect used to  check if the user is authenticated or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    // Cleanup function to unsubscribe from the listener
    return () => unsubscribe();
  }, []);

  return (
    <div
      className="App"
      style={{ backgroundColor: allColors.outerBackgroundColor }}
    >
      {isAuthenticated ? (
        <BrowserRouter>
          <Routes>
            <Route
              path="/Complex-todolist/"
              element={<TodoWrapper allColors={allColors} />}
            />
            <Route
              path="/Complex-todolist/styles"
              element={
                <StylesEdit
                  allColors={allColors}
                  allColorFunctions={allColorFunctions}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;
