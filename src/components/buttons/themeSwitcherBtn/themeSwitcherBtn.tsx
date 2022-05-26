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

  /**
   * Исправление бага при обновлении страницы с включенной темой
   * (чтобы тема из LS не совпадала с состоянием темы)
   */
  useEffect(() => {
    if (stateTheme === "dark" && localStorage.theme === "dark") {
      setStateTheme("light");
    } else if (stateTheme === "light" && localStorage.theme === "light") {
      setStateTheme("dark");
    }
  }, [stateTheme]);

  /**
   * Слушатель кнопки переключения темы
   */
  const switchThemeBtnHandler = () => {
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

  /**
   * Рендер иконки темы
   * @constructor
   */
  const RenderImageTheme = () => {
    if (stateTheme === "dark") {
      return <img src={LightThemeImg} alt="" />;
    } else {
      return <img src={DarkThemeImg} alt="" />;
    }
  };

  return (
    <>
      {/*Кнопка именении темы*/}
      <div className="theme-switcher flex justify-center sm:justify-end sm:mr-1">
        <button
          onClick={switchThemeBtnHandler}
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
