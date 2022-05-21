import React from "react";

// Components
import Navbar from "../../components/navbar/navbar";

// Styles
import "../../styles/index.css";
import "../../components/notification/notification";

/**
 * App component
 * @constructor
 */
const App = (): JSX.Element => {
  return (
    <React.Fragment>
      {/* Navbar */}
      <Navbar />

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0"></div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default App;
