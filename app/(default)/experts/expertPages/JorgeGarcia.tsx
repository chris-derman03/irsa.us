import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";

const JorgeGarcia = () => {
  return (
    <div className="flex flex-col gap-10 px-0 md:px-[10%] lg:px-[15%] 2xl:px-[25%] items-center">
      <p className="text-center text-xl">
        With a background in <StyledList items={["Mechanical Engineering"]} />{" "}
        and a passion for{" "}
        <RouteLink
          href="/services/accident_recon"
          label="accident reconstruction"
        />
        , Mr. Garcia applies advanced physics, mathematics, and data analysis to
        investigate complex vehicle and premises liability cases. His expertise
        spans accident reconstruction,{" "}
        <RouteLink href="/services/human_factors" label="human factors" />,{" "}
        <RouteLink href="/services/biomechanics" label="biomechanics" />,{" "}
        <RouteLink href="/services/imaging_science" label="video analysis" />,{" "}
        <RouteLink href="/services/threeD" label="3D scanning" />,{" "}
        <RouteLink href="/services/animations_simulations" label="animations" />
        , EDR (Event Data Recorder) imaging, and technical drafting.
      </p>
      <p className="text-center text-xl">
        Mr. Garcia has completed <StyledList items={["extensive training"]} />{" "}
        in crash data retrieval, advanced EDR analysis, and specialized courses
        through WREX and NAPARS, covering topics such as critical speed yaw
        analysis, nighttime visibility studies, and tire forensic analysis. His{" "}
        <StyledList items={["hands-on experience"]} /> with auto body repair and
        previous work in engineering documentation enhance his practical
        understanding of accident dynamics and vehicle systems.
      </p>
      <p className="text-center text-xl">
        As a member of the{" "}
        <StyledList
          items={[
            "Society of Automotive Engineers",
            "National Association of Professional Accident Reconstruction Specialists",
          ]}
          conjunction=" and the "
        />
        , Mr. Garcia provides technical consulting, expert analysis, and data
        interpretation for attorneys, insurance professionals, and clients
        seeking detailed, fact-based insights into vehicle crash data, video
        analysis, and reconstruction findings.
      </p>
    </div>
  );
};

export default JorgeGarcia;
