"use client";
import classNames from "classnames";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const iconSizing = classNames("h-8 w-8");

interface Params {
    onClick: () => void;
}

const AccidentTypesButton = ({ onClick }: Params) => {
    const [isClicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked((prev) => !prev);
        onClick();
    };

    return (
        <button onClick={handleClick}>
            {isClicked ? (
                <IoIosArrowDown className={iconSizing} />
            ) : (
                <IoIosArrowBack className={iconSizing} />
            )}
        </button>
    );
};

export default AccidentTypesButton;
