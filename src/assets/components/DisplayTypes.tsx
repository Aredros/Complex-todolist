import { useContext } from "react";
import { DisplayTypesContext } from "../pages/TodoWrapper";
import { AppContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faList } from "@fortawesome/free-solid-svg-icons";

export const DisplayTypes = () => {
  const { allColors } = useContext(AppContext) || {}; // Destructure allColors from the context
  const { setWeekList, weekList } = useContext(DisplayTypesContext) || {
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
          style={{
            backgroundColor: allColors?.buttonIcons,
            opacity: weekList ? 1 : 0.85,
          }}
          onClick={() => setWeekList(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 22 22"
          >
            <g
              stroke={allColors?.buttonText}
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <g
                fill="none"
                stroke-dasharray="10"
                stroke-dashoffset="10"
                stroke-width="2"
              >
                <path d="M3 5L5 7L9 3">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.2s"
                    values="10;0"
                  />
                </path>
                <path d="M3 12L5 14L9 10">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.5s"
                    dur="0.2s"
                    values="10;0"
                  />
                </path>
                <path d="M3 19L5 21L9 17">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1s"
                    dur="0.2s"
                    values="10;0"
                  />
                </path>
              </g>
              <g
                fill={allColors?.buttonText}
                fill-opacity="0"
                stroke-dasharray="22"
                stroke-dashoffset="22"
              >
                <rect width="9" height="3" x="11.5" y="3.5" rx="1.5">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.2s"
                    dur="0.5s"
                    values="22;0"
                  />
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="1.7s"
                    dur="0.5s"
                    values="0;1"
                  />
                </rect>
                <rect width="9" height="3" x="11.5" y="10.5" rx="1.5">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.7s"
                    dur="0.5s"
                    values="22;0"
                  />
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="1.9s"
                    dur="0.5s"
                    values="0;1"
                  />
                </rect>
                <rect width="9" height="3" x="11.5" y="17.5" rx="1.5">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.2s"
                    dur="0.5s"
                    values="22;0"
                  />
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="2.1s"
                    dur="0.5s"
                    values="0;1"
                  />
                </rect>
              </g>
            </g>
          </svg>

          <span style={{ color: allColors?.buttonText }}> List</span>
        </div>
        <div
          className="changeWeekList__buttons__button"
          style={{
            backgroundColor: allColors?.buttonIcons,
            opacity: weekList ? 0.85 : 1,
          }}
          onClick={() => setWeekList(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 22 22"
          >
            <g
              fill="none"
              stroke={allColors?.buttonText}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <rect
                width="16"
                height="16"
                x="4"
                y="4"
                stroke-dasharray="64"
                stroke-dashoffset="64"
                rx="1"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.5s"
                  values="64;0"
                />
              </rect>
              <path
                stroke-dasharray="6"
                stroke-dashoffset="6"
                d="M7 4V2M17 4V2"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.5s"
                  dur="0.2s"
                  values="6;0"
                />
              </path>
              <path stroke-dasharray="12" stroke-dashoffset="12" d="M7 11H17">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.8s"
                  dur="0.2s"
                  values="12;0"
                />
              </path>
              <path stroke-dasharray="9" stroke-dashoffset="9" d="M7 15H14">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="1s"
                  dur="0.2s"
                  values="9;0"
                />
              </path>
            </g>
            <rect
              width="14"
              height="0"
              x="5"
              y="5"
              fill={allColors?.buttonText}
            >
              <animate
                fill="freeze"
                attributeName="height"
                begin="0.5s"
                dur="0.2s"
                values="0;3"
              />
            </rect>
          </svg>

          <span style={{ color: allColors?.buttonText }}> Calendar</span>
        </div>
      </div>
    </div>
  );
};
