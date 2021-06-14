import React from "react";
import "./styles/index.css";

const App = () => {
  const [openNotif, setOpenNotif] = React.useState("fixed");
  const [openBurgerMenu, setopenBurgerMenu] = React.useState("none");

  const Anchor = (
    props: JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLAnchorElement> &
      React.AnchorHTMLAttributes<HTMLAnchorElement>
  ): JSX.Element => {
    return <a {...props}>{props.children}</a>;
  };

  const Notification = (): JSX.Element => {
    React.useEffect(() => {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      if (openNotif !== "none") {
        setTimeout(() => {
          setOpenNotif("none");
        }, 2550);
      }
    }, []);

    return (
      <div
        style={{ display: `${openNotif}`, position: "absolute" }}
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
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

  const BurgerMenu = (): JSX.Element => {
    return (
      <div style={{ display: `${openBurgerMenu}` }} className="md:hidden" id="mobile-menu">

        {/* Anchors burger menu */}
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Anchor
            children="About me"
            className="bg-gray-800 text-white block px-3 py-2 rounded-md text-base font-medium"
          />

          <Anchor
            children="My skills"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          />

          <Anchor
            children="Contact me"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          />
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>

      {/* Notification for changing theme */}
      <Notification />

      {/* Navbar */}
      <nav className="dark:bg-gray-800 dark:text-white bg-blue-50 text-gray-800">

        {/* Header desctop */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Anchors navbar */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl">My Pofile</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Anchor
                    children="About me"
                    className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium"
                  />

                  <Anchor
                    children="My skils"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  />

                  <Anchor
                    children="Contact me"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Burger menu */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => (openBurgerMenu !== 'none') ? setopenBurgerMenu('none') : setopenBurgerMenu('flex')}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Burger menu mobile */}
        <BurgerMenu />

      </nav>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0"></div>
        </div>
      </main>

    </React.Fragment>
  );
};

export default App;
