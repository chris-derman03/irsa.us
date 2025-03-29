"use client";
import { useState } from "react";
import AccidentTypesCover from "./AccidentTypesCover";
import AccidentTypesDropdown from "./AccidentTypesDropdown";
import AccidentTypesButton from "./AccidentTypesButton";

const AccidentTypesSection = () => {
    const [isExpanded, setExpanded] = useState(false);

    return (
        <div className="h-[70px] w-full border-1">
            <div className="w-full h-full flex items-center justify-center relative">
                <AccidentTypesCover
                    src={"/image/home/accidents/transportation.png"}
                />
                <div className="flex justify-between items-center absolute">
                    <h2 className="text-xl text-center w-1/4">
                        Transportation Accident
                    </h2>
                    <AccidentTypesButton
                        onClick={() => setExpanded((prev) => !prev)}
                    />
                </div>
                <AccidentTypesDropdown expanded={isExpanded} />
            </div>
        </div>
    );
};

export default AccidentTypesSection;
