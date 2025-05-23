"use client";
import React from "react";
import "./ButtonStyles.css";
import Link from "next/link";

interface Params {
  text: string;
  primary?: boolean;
  href: string;
}

const Button = ({ text, primary = false, href }: Params) => {
  return (
    <Link
      className={`w-[120px] h-[40px] lg:w-[150px] lg:h-[50px] 
      button border-2 rounded-md flex items-center justify-center font-bold
      ${primary ? "primaryButton" : "defaultButton"}`}
      href={href}
    >
      <p className="lg:text-xl">{text}</p>
    </Link>
  );
};

export default Button;
