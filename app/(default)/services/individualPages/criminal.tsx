import PanelDivider from "@/app/Components/PanelDivider";
import Picture from "@/app/Components/Picture";
import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";
import YouTubeEmbedMulti from "@/app/Components/YouTubeEmbedMulti";
import Image from "next/image";

const criminal = () => {
  return (
    <div className="tintedPanel flex flex-col items-center gap-20 py-10 lg:py-15 px-[5%] 2xl:px-[15%]">
      <div className="flex flex-col-reverse items-center md:flex-row gap-10">
        <div className="flex flex-col gap-10 md:w-5/10">
          <Picture
            src="/services/criminal/crim1.jpg"
            alt="Criminal Proceedings Visual"
            override
            className="w-full h-auto"
          />
          <p className="text-center">
            IRSA has created and produced numerous{" "}
            <RouteLink
              href="/services/animations_simulations"
              label="simulations"
            />{" "}
            and
            <RouteLink href="/services/accident_recon" label="recreations" /> to
            display how the incident occurred. We apply techniques such as using
            deductive and inductive reasoning, physical evidence, scientific
            methods, and interconnect their relationships. <br />
            <br />
            Below are a few simulations that we created to demonstrate the
            subject incident.
          </p>
        </div>
        <div className="flex flex-col md:flex-col-reverse justify-between md:w-5/10 gap-5">
          <Picture
            src="/services/criminal/crim2.jpg"
            alt="Criminal Proceedings Visual"
            override
            className="w-full h-auto"
          />
          <p className="text-center">
            Within the scope of criminal proceedings, we exam the{" "}
            <RouteLink href="/services/human_factors" label="Human Factors" />
            ,
            <RouteLink href="/services/biomechanics" label="Biomechanics" />,
            and/or{" "}
            <RouteLink href="/services/accident_recon" label="Reconstruction" />{" "}
            of accidental verses intended injuries. More specifically, we deal
            with{" "}
            <StyledList
              items={[
                "muders",
                "shootings",
                "drownings",
                "DUI",
                "hit and runs",
                "assault with a deadly weapon",
              ]}
            />
            . IRSA also works with with issues such as probable cause,
            self-defense, vehicle manslaughter, negligence, blunt force trauma,
            and other related incidents.
          </p>
        </div>
      </div>

      <PanelDivider />

      <div className="w-full flex flex-col gap-10">
        {["1", "2", "3", "4", "5"].map((ex, i) => (
          <div
            key={ex}
            className={`w-full mx-0W lg:w-5/10 lg:mx-[8%]
               ${i % 2 == 0 ? "self-start" : "self-end"}`}
          >
            <Image
              src={`/services/criminal/example${ex}.gif`}
              alt={"Criminal Proceedings IRSA example " + i}
              width={0}
              height={0}
              className="w-full h-full rounded-xl shadow-[0_0_8px_white]"
              unoptimized
              priority
            />
          </div>
        ))}
      </div>

      <PanelDivider />

      <div className="w-full flex flex-col gap-5">
        <h1 className="font-bold text-2xl md:text-3xl text-center text-secondary mb-10">
          CRIMINAL PROCEEDINGS SIMULATIONS
        </h1>
        <YouTubeEmbedMulti
          embedData={[
            {
              id: "bCV_TdbbrbQ?si=vo6crczpIjbqEo9o",
              desc: "The male defendant was accused of first degree murder of his wife. IRSA demonstrated it was not murder, but self-defense. Additionally, we identified 2 dozen more issues (after law enforcement checked the scene) and used it in trial; resulting in the aforementioned individual being acquitted.",
            },
            {
              id: "ZlRNi74SQZs?si=FSNSf3zrXWTD-knB",
              desc: "The following non-fictional simulation is a promotional 9-minute video that depicts a behind the scenes look at IRSA's reconstruction process for a murder case. Interviews were performed by IRSA staff members and the actual attorneys involved in the case. Some scenes may be graphic.",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default criminal;
