import React from "react";
import classNames from "classnames";

interface Params {
    children: React.ReactNode;
    className?: string;
}

const Panel = ({ children, className = "" }: Params) => {
    return (
        <div
            className={classNames({
                "tintedPanel flex items-center": true,
                "flex-col justify-center": true,
                "md:flex-row md:justify-around": true,
                [`${className}`]: className,
            })}
        >
            {children}
        </div>
    );
};

export default Panel;
