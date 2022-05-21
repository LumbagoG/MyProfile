import React from "react";

// Styles
import "./notification.css";

/**
 * Notification component
 * @constructor
 */
const Notification = (props: {
  isOpen: React.SetStateAction<string>;
}): JSX.Element => {
  return (
    <div
      style={{ display: `${props.isOpen}`, position: "absolute" }}
      className="notification lg:w-1/3 inset-0 items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end"
    >
      <div className="dark:bg-green-400 dark:text-gray-50 bg-white shadow-lg rounded-lg pointer-events-auto">
        <div className="rounded-lg shadow-xs overflow-hidden">
          <div className="p-4">
            <div className="flex items-start justify-center text-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 dark:text-white text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium">Тема успешно изменена!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
