import React, { useEffect, useState } from "react";

// Styles
import "./ThemeSwitcherBtn.css";

// Components
import Notification from "../../notification/notification";

/**
 * Button switcher color theme
 * @constructor
 */
const ThemeSwitcherBtn = (): JSX.Element => {
  const [stateTheme, setStateTheme] = useState(localStorage.theme);
  const [stateNotification, setStateNotification] = useState("none");

  /**
   * Работа с localstorage для переключения темы
   */
  useEffect(() => {
    return () => {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        localStorage.theme = stateTheme;
        document.documentElement.classList.add("dark");
      } else {
        localStorage.theme = stateTheme;
        document.documentElement.classList.remove("dark");
      }
    };
  }, [stateTheme]);

  /**
   * Рендер уведомления при изменении темы
   */
  useEffect(() => {
    return () => {
      setStateNotification("fixed");
    };
  }, [stateTheme]);

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

  /**
   * Слушатель события для переключения темы
   */
  const changeColorThemeHandler = () => {
    if (stateTheme === "dark") {
      setStateTheme("light");
    } else {
      setStateTheme("dark");
    }
  };

  return (
    <>
      {/*Уведомление об изменении темы*/}
      <RenderNotification display={stateNotification} />

      {/*Чек-бокс*/}
      <div className="theme-switcher flex justify-center">
        <input
          className="theme-switcher-checkbox"
          id="themeSwitcherCheckbox"
          name="themeSwitcherCheckbox"
          type="checkbox"
          onChange={changeColorThemeHandler}
        />

        <label
          className="theme-switcher-label"
          htmlFor="themeSwitcherCheckbox"
        ></label>
      </div>
    </>
  );
};

export default ThemeSwitcherBtn;
