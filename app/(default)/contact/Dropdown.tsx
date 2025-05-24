"use client";
import { useState } from "react";
import DropdownButton from "./DropdownButton";
import DropdownItems from "./DropdownItems";

interface Props {
  items: string[];
  setInput: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  className?: string;
}

const Dropdown = ({ items, setInput, placeholder, className }: Props) => {
  const [clicked, setClicked] = useState(false);
  const [display, setDisplay] = useState(placeholder);

  return (
    <div
      className={`${className} relative flex border-3 bg-[rgba(16,24,40,0.97)] text-gray-500 ${
        clicked ? "rounded-t-xl" : "rounded-xl"
      } shadow-[0_0_3px_white] transition-all duration-200`}
    >
      <h2 className="w-full text-2xl font-bold pl-[3%] py-2 overflow-hidden text-ellipsis">
        {display}
      </h2>
      <DropdownButton clicked={clicked} setClicked={setClicked} />
      <DropdownItems
        clicked={clicked}
        items={items}
        setDisplay={setDisplay}
        setInput={setInput}
        setClicked={setClicked}
      />
    </div>
  );
};

export default Dropdown;
