import React from "react";
import "./testStyles.css";
import StatGauge from "./StatGauge";

const WorkbenchPage = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="tintedPanel w-8/10 h-[200px] flex items-center justify-center">
                <StatGauge />
            </div>
        </div>
    );
};

export default WorkbenchPage;
