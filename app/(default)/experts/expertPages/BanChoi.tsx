import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";

const BanChoi = () => {
  return (
    <div className="flex flex-col gap-10 px-0 md:px-[10%] lg:px-[15%] 2xl:px-[25%] items-center">
      <p className="text-center text-xl">
        As a forensic scientist, Mr. Choi specialize in the scientific analysis
        of accidents by applying principles from physics, engineering, and human
        factors. His work involves detailed{" "}
        <RouteLink href="/services/accident_recon" label="reconstructions" /> of
        events in both automobile collisions and{" "}
        <RouteLink href="/services/premises" label="premises liability" />{" "}
        incidents to determine causes, contributing factors, and the potential
        for injury.
      </p>

      <p className="text-center text-xl">
        In automobile{" "}
        <RouteLink
          href="/services/accident_recon"
          label="accident reconstruction"
        />
        , he uses concepts such as conservation of momentum, energy transfer,
        and vehicle kinematics to analyze crash dynamics. This includes
        passenger vehicle collisions, as well as bicycle and pedestrian
        accidents. He also incorporates{" "}
        <RouteLink href="/services/human_factors" label="human factors" />{" "}
        principles such as perception-response time to assess how individuals
        may have perceived and responded to events leading up to a collision.
      </p>

      <p className="text-center text-xl">
        For <RouteLink href="/services/premises" label="premises liability" />{" "}
        cases, he applies his knowledge of building codes, industry standards,
        and federal regulations to evaluate accident causes and safety
        compliance. These cases often involve slip/trip and falls, falling
        objects, and construction site incidents.
      </p>

      <p className="text-center text-xl">
        In biomechanical analysis, he leverages his background in{" "}
        <StyledList items={["physics", "biomedical engineering"]} /> to assess
        the forces involved in an incident and the potential for injury. He uses
        established metrics such as the Head Injury Criterion (HIC), Neck Injury
        Criterion (Nij), delta-V, and acceleration profiles.
      </p>

      <p className="text-center text-xl text-secondary italic">
        To date, he has analyzed over 250 vehicle accident cases and more than
        300 premises liability cases. He provides expert opinions in accident
        reconstruction, biomechanics, and human factors through reports,
        declarations, consultations, and testimony.
      </p>
    </div>
  );
};

export default BanChoi;
