"use client";
import { useState } from "react";
import Location from "./Location";
import Contact from "./Contact";
import LoadingSpinner from "@/app/Components/LoadingSpinner";

const Content = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <div className="mt-[10vh] lg:mt-[20vh] w-full flex flex-col items-center gap-30 p-10">
      {mapLoaded ? (
        <>
          <Contact />
          <Location onMapLoad={() => setMapLoaded(true)} />
        </>
      ) : (
        <>
          <div className="text-white text-3xl -mt-[20vh] sticky h-screen flex items-center justify-center">
            <LoadingSpinner />
          </div>

          <div className="absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none">
            <Location onMapLoad={() => setMapLoaded(true)} />
          </div>
        </>
      )}
    </div>
  );
};

export default Content;
