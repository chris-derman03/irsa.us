"use client";
import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";

interface Props {
  searchParams: string;
  setSearchParams: React.Dispatch<React.SetStateAction<string>>;
}

const ExpertSearchBar = ({ searchParams, setSearchParams }: Props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(false);
        setSearchParams("");
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [setSearchParams]);

  const searchBarVisuals =
    "rounded-[8px] bg-[rgba(0,0,0,0.4)] outline-1 hover:shadow-[0_0_15px_var(--primary)]";

  return (
    <div className="w-full pt-10 px-10 xl:px-50">
      <div
        className={`${
          active
            ? "outline-[var(--primary)] shadow-[0_0_8px_var(--primary)]"
            : "outline-white shadow-[0_0_8px_white]"
        }  flex items-center gap-3 py-4 px-3 ${searchBarVisuals}`}
        onClick={() => setActive(true)}
      >
        <div className="w-[10%] md:w-[5%] lg:w-[3%] text-secondar">
          <FcSearch style={{ width: "100%", height: "100%" }} />
        </div>

        <div className="flex-grow">
          {active ? (
            <input
              type="text"
              className="w-full bg-transparent outline-none text-4xl text-white placeholder-white"
              placeholder={searchParams}
              onChange={(e) => setSearchParams(e.target.value)}
              autoFocus
            />
          ) : searchParams.length > 1 ? (
            <p className="text-4xl hidden md:inline">{searchParams}</p>
          ) : (
            <>
              <p className="text-3xl opacity-50 hidden md:inline">
                Search e.g. EDR, Kenneth, Biomechanics
              </p>
              <p className="text-3xl opacity-50 md:hidden">Search</p> :{" "}
              <div></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpertSearchBar;
