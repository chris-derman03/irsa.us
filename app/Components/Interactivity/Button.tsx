"use client";
import React from "react";
import classNames from "classnames";
import "./ButtonStyles.css";

interface Params {
    text: string;
    primary?: boolean;
}

const Button = ({ text, primary = false }: Params) => {
    return (
        <button
            className={classNames({
                "border-2 rounded-md flex items-center justify-center font-bold":
                    true,
                "w-[120px] h-[40px]": true,
                "lg:w-[150px] lg:h-[50px]": true,
                defaultButton: !primary,
                primaryButton: primary,
            })}
        >
            <p className="lg:text-xl">{text}</p>
        </button>
    );
};

export default Button;
