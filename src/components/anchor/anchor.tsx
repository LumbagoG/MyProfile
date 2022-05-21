import React from 'react';

// Styles
import "./anchor.css";

/**
 * <a> components
 * @param props
 * @constructor
 */
const Anchor = (
    props: JSX.IntrinsicAttributes &
        React.ClassAttributes<HTMLAnchorElement> &
        React.AnchorHTMLAttributes<HTMLAnchorElement>
): JSX.Element => {
    return (
        <a {...props}>
            {props.children}
        </a>
    );
};

export default Anchor;
