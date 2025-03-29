"use client";
import { useState } from "react";
import AccidentTypesCover from "./AccidentTypesCover";
import AccidentTypesDropdown from "./AccidentTypesDropdown";
import AccidentTypesButton from "./AccidentTypesButton";
import classNames from "classnames";

interface Params {
    type: string;
    examples: string[];
    imgPath: string;
}

const AccidentTypesSection = ({ type, examples, imgPath }: Params) => {
    const [isExpanded, setExpanded] = useState(false);

    // Preset pixel values for dropdown menu (necessary for visually pleasing expansion)
    const examplesFontSize = 24;
    const accidentTypeMargin = 20;
    const dropdownPaddingY = 20;
    const dropdownHeight =
        examples.length * examplesFontSize +
        dropdownPaddingY +
        accidentTypeMargin;

    return (
        <div
            className="h-[70px] w-full border-1 rounded-sm"
            style={{
                marginBottom: isExpanded
                    ? `${dropdownHeight}px`
                    : `${accidentTypeMargin}px`,
                transition: "margin-bottom 300ms ease-in-out",
            }}
        >
            <div className="w-full h-full flex items-center justify-center relative">
                <AccidentTypesCover src={imgPath} />
                <div className="w-full flex justify-between items-center absolute px-2">
                    <h2 className="w-3/4 text-xl text-left">{type}</h2>
                    <AccidentTypesButton
                        onClick={() => setExpanded((prev) => !prev)}
                    />
                </div>
                <AccidentTypesDropdown
                    expanded={isExpanded}
                    examples={examples}
                    fontSize={examplesFontSize}
                    paddingY={dropdownPaddingY}
                />
            </div>
        </div>
    );
};

export default AccidentTypesSection;
