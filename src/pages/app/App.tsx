import React, { useEffect, useState } from "react";

// Components
import Navbar from "../../components/navbar/navbar";
import AboutMe from "../aboutMe/aboutMe";
import Preloader from "../../components/preloader/preloader";

// Styles
import "../../styles/index.css";
import "../../components/notification/notification";

/**
 * App component
 * @constructor
 */
const App = (): JSX.Element => {
  const [preloader, setPreloader] = useState("flex");

  window.addEventListener("load", (event) => {
    event.preventDefault();

    setTimeout(() => {
      setPreloader("none");
      document.body.style.overflow = "scroll";
    }, 900);
  });

  return (
    <>
      {/* Preloader */}
      <Preloader
        wrapper={{ style: { display: `${preloader}` } }}
        loader={{ className: "animate-pulse" }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Main wrapper */}
      <main className="main">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <AboutMe />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
