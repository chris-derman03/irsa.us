"use client";
import classNames from "classnames";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const iconSizing = classNames("h-8 w-8 lg:h-10 lg:w-10");
const iconAnimation = classNames(
    "transition-transform duration-300 ease-in-out"
);

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
            <IoIosArrowBack
                className={classNames(iconSizing, iconAnimation, {
                    "-rotate-90": isClicked,
                })}
            />
        </button>
    );
};

export default AccidentTypesButton;
