import React from "react";
import { IconBaseProps } from "react-icons/lib";

import { RiLoader5Line } from "react-icons/ri";

// Styles
import "./preloader.css";

const Preloader = (props: {
  wrapper: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLElement> &
    React.HTMLAttributes<HTMLElement>;
  loader: JSX.IntrinsicAttributes & IconBaseProps;
}) => {
  return (
    <section {...props.wrapper} className="preloader">
      <div className="preloader__loader">
        {/*<img className="preloader-img" src="" alt="loading..." />*/}
        <RiLoader5Line {...props.loader} className="preloader-img" />
      </div>
    </section>
  );
};

export default Preloader;
