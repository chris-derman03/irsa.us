import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";

const RicardoEsquivel = () => {
  return (
    <div className="flex flex-col gap-10 px-0 md:px-[10%] lg:px-[15%] 2xl:px-[25%] items-center">
      <p className="text-center text-xl">
        Mr. Esquivel earned his{" "}
        <StyledList
          items={["Bachelor of Science", "Mechanical Engineering"]}
          conjunction=" in "
        />{" "}
        from the University of California, Los Angeles. His academic background
        includes extensive study in physics, thermodynamics, kinematics,
        statics, dynamics, and computer-aided analysis.
      </p>

      <p className="text-center text-xl">
        Mr. Esquivel applies his engineering expertise to the field of{" "}
        <RouteLink
          href="/services/accident_recon"
          label="accident
        reconstruction"
        />
        , utilizing principles of physics and mathematics to analyze
        transportation-related accidents. He focuses on identifying key factors
        such as vehicle speeds, impact angles, crush deformation, changes in
        velocity, and collision forces.
      </p>

      <p className="text-center text-xl">
        Mr. Esquivel holds the{" "}
        <StyledList
          items={["Crash Data Retrieval System Operations Certification"]}
        />{" "}
        from Northwestern University Center for Public Safety (NUCPS), allowing
        him to download Event Data Recorder (EDR) data from supported passenger
        vehicles--providing valuable electronic evidence to support forensic
        analysis.
      </p>

      <p className="text-center text-xl">
        He has experience investigating a wide range of accident types,
        including vehicle-to-vehicle, vehicle-to-pedestrian, and vehicle-to
        motorcycle collisions.
      </p>
    </div>
  );
};

export default RicardoEsquivel;
