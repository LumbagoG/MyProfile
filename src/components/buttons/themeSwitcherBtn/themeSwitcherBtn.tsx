import React, { useEffect, useState, useRef } from "react";

// Styles
import "./ThemeSwitcherBtn.css";

// Components
import Notification from "../../notification/notification";

// Images
import DarkThemeImg from "../../../images/theme/dark_mode_black_24dp.svg";
import LightThemeImg from "../../../images/theme/light_mode_black_24dp.svg";

/**
 * Button switcher color theme
 * @constructor
 */
const ThemeSwitcherBtn = (): JSX.Element => {
  const [stateTheme, setStateTheme] = useState(localStorage.theme);
  const [stateNotification, setStateNotification] = useState("none");
  const buttonTheme = useRef(stateTheme);

  /**
   * Работа с localstorage для переключения темы
   */
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  useEffect(() => {
    if (stateTheme === "dark" && localStorage.theme === "dark") {
      setStateTheme("light");
    } else if (stateTheme === "light" && localStorage.theme === "light") {
      setStateTheme("dark");
    }
  }, [stateTheme]);

  const switchThemeBtn = () => {
    if (stateTheme === "dark") {
      setStateNotification("fixed");
      setStateTheme("light");
      localStorage.theme = "dark";
    } else if (stateTheme === "light") {
      setStateNotification("fixed");
      setStateTheme("dark");
      localStorage.theme = "light";
    }
  };

  /**
   * Компонент уведомления
   * @param props
   * @constructor
   */
  const RenderNotification = (props: {
    display: React.SetStateAction<string>;
  }) => {
    return <Notification isOpen={props.display} />;
  };

  const RenderImageTheme = () => {
    if (stateTheme === "dark") {
      return <img src={LightThemeImg} alt="" ref={buttonTheme} />;
    } else {
      return <img src={DarkThemeImg} alt="" ref={buttonTheme} />;
    }
  };

  return (
    <>
      {/*Кнопка именении темы*/}
      <div className="theme-switcher flex justify-center sm:justify-end sm:mr-1">
        <button
          onClick={switchThemeBtn}
          className={`theme-switcher-button rounded-md theme-switcher-${stateTheme}`}
        >
          <RenderImageTheme />
        </button>
      </div>

      {/*Уведомление об изменении темы*/}
      <RenderNotification display={stateNotification} />
    </>
  );
};

export default ThemeSwitcherBtn;
