import PanelDivider from "@/app/Components/PanelDivider";
import Picture from "@/app/Components/Picture";
import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";
import Image from "next/image";

const drone = () => {
  return (
    <div className="tintedPanel flex flex-col items-center gap-10 py-10 lg:py-15 px-[5%] 2xl:px-[15%]">
      <h1 className="text-4xl text-center">
        Our <RouteLink href="https://www.faa.gov/" label="FAA" />
        -licensed engineers will pilot drones for your use case
      </h1>
      <ul className="font-bold text-3xl text-secondary text-center space-y-3">
        {[
          "Image/Video",
          "Survey",
          "3D Model/Scan",
          "Site Inspect",
          "Get a New Perspective of your Site or Scene",
        ].map((use_case) => (
          <li key={use_case}>{use_case}</li>
        ))}
      </ul>

      <div className="flex flex-col md:flex-row gap-10 md:gap-[10%]">
        <Picture
          src="/services/drone/d1.jpg"
          alt="Drone Controls Image"
          override
          className="w-full md:w-[45%] h-auto"
        />
        <Picture
          src="/services/drone/d2.jpg"
          alt="Drone Controls Image"
          override
          className="w-full md:w-[45%] h-auto"
        />
      </div>

      <PanelDivider className="my-20" />

      <h1 className="text-3xl mb-10 text-center">
        Drones offer <StyledList items={["critical perspectives"]} /> for
        accident scenes.
      </h1>

      <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-[5%] justify-center">
        <div className="w-full lg:w-[50%] flex flex-col items-center gap-3">
          <h2 className="font-bold text-lg">Raw Drone Footage</h2>
          <Image
            src={`/services/drone/droneShot.gif`}
            alt={"Drone Shot Examples"}
            width={0}
            height={0}
            className="w-full h-full rounded-xl shadow-[0_0_8px_white]"
            unoptimized
            priority
          />
        </div>
        <div className="w-full lg:w-[50%] flex flex-col items-center gap-3">
          <h2 className="font-bold text-lg">3D Animation from Footage</h2>
          <Image
            src={`/services/drone/animation.gif`}
            alt={"Drone Shot Examples"}
            width={0}
            height={0}
            className="w-full h-full rounded-xl shadow-[0_0_8px_white]"
            unoptimized
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default drone;
