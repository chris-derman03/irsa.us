import React from "react";

interface Params {
    children: React.ReactNode;
    className?: string;
}

const OverlayBox = ({ children, className = "" }: Params) => {
    return (
        <div className={`w-full h-full absolute ${className}`}>{children}</div>
    );
};

export default OverlayBox;
