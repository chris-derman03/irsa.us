"use client";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

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
        className={`h-8 w-8 lg:h-10 lg:w-10 hover:scale-120 hover:text-[var(--primary)] transition-transform duration-200 ease-out ${
          isClicked ? "-rotate-90" : ""
        }`}
      />
    </button>
  );
};

export default AccidentTypesButton;
