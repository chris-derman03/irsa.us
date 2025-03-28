import React from "react";

interface Params {
    children: React.ReactNode;
    className?: string;
}

const Panel = ({ children, className = "" }: Params) => {
    return (
        <div
            className={
                "tintedPanel flex flex-col items-center justify-center gap-10 " +
                className
            }
        >
            {children}
        </div>
    );
};

export default Panel;
