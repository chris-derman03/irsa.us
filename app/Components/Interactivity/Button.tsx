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
                "w-[100px] h-[40px] border-2 rounded-md flex items-center justify-center font-bold":
                    true,
                defaultButton: !primary,
                primaryButton: primary,
            })}
        >
            {text}
        </button>
    );
};

export default Button;
