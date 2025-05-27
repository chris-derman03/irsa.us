"use client";
import "./NavStyles.css";
import NavPanel from "./NavPanel";
import { useEffect, useRef, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Picture from "../Picture";

const NavBar = () => {
  const [panelOut, setPanelOut] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on reroute
  useEffect(() => {
    setPanelOut(false);
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    const handleInteraction = (event: MouseEvent | KeyboardEvent) => {
      if (
        event instanceof MouseEvent &&
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setPanelOut(false);
      }

      if (event instanceof KeyboardEvent && event.key === "Escape") {
        setPanelOut(false);
      }
    };

    if (panelOut) {
      document.addEventListener("mousedown", handleInteraction);
      document.addEventListener("keydown", handleInteraction);
    }

    return () => {
      document.removeEventListener("mousedown", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };
  }, [panelOut]);

  // Stop body scrolling while panel is out
  // useEffect(() => {
  //   if (panelOut) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }
  // }, [panelOut]);

  return (
    <>
      <nav className="z-[1000] relative tinted h-full w-full flex items-center justify-between px-5 md:px-7 backdrop-blur-[2px]">
        <div className="relative h-8/10 aspect-square">
          <Link href="/">
            <Picture
              src={"/utils/logoDark.png"}
              alt="IRSA"
              override
              className="w-full h-full shadow-none"
            />
          </Link>
        </div>
        <h1 className="hidden md:inline text-center text-2xl">
          Institute of Risk and Safety Analyses
        </h1>
        <button
          onClick={() => setPanelOut(!panelOut)}
          className="flex justify-center items-center"
        >
          <div
            className={`transition-transform duration-300 ${
              panelOut ? "rotate-[-90deg]" : "rotate-0"
            }`}
          >
            {panelOut ? <IoCloseOutline size={50} /> : <HiBars3 size={50} />}
          </div>
        </button>
      </nav>
      <NavPanel show={panelOut} ref={panelRef} setPanelOut={setPanelOut} />
    </>
  );
};

export default NavBar;
