import PanelDivider from "@/app/Components/PanelDivider";
import RouteLink from "@/app/Components/RouteLink";
import StyledList from "@/app/Components/StyledList";

const WeiChao = () => {
  return (
    <div className="flex flex-col gap-10 px-0 md:px-[10%] lg:px-[15%] 2xl:px-[25%] items-center">
      <p className="text-center text-xl">
        Mr. Chao employs the multiple disciplines of{" "}
        <RouteLink
          href="/services/accident_recon"
          label="Accident Reconstruction"
        />
        ,
        <RouteLink href="/services/human_factors" label="Human Factors" />, and
        Safety Analysis to identify root causes of accidents, assess
        injury-prevention alternatives, and recommend safety practices and
        procedures as they relate to post-accident evaluation. During his more
        than two decades of service with the Institute of Risky and Safety
        Analyses, he has been involved in over{" "}
        <StyledList items={["2,500 forensic investigations"]} /> which have
        included vehicle and pedestrian collisions, roadway design, signal
        phasing, premises liability, industrial and construction safety,
        machinery operation, design defect, OSHA violations, and code
        requirements. In addition to providing timely consultation, Mr. Chao has
        also assisted with{" "}
        <StyledList items={["time-sensitive rebuttal work"]} /> against opposing
        experts on numerous occasions.
      </p>

      <p className="text-center text-xl">
        Mr. Chao’s <StyledList items={["academic", "civic contributions"]} />{" "}
        began as early as 1995; for example, a year after the 1994 Northridge
        earthquake, Mr. Chao researched and designed a computer-simulating model
        of <StyledList items={["Resilient-Friction Base Isolator"]} /> to
        prevent excessive damage to building structures during earthquakes.
        While working as a system engineer at the{" "}
        <StyledList items={["Fluid Research Corporation"]} /> in 1998, Mr. Chao
        was heavily involved in design, machine configuration, research and
        development, and quality assurance. Since the early 2000s, he has
        actively participated in research and experiments with accelerometers
        and compiled a <StyledList items={["study"]} /> titled “G-Force in Daily
        Activities” (2003, updated in 2014). Mr. Chao’s extensive knowledge
        pertaining to air-bag deployment is evident by his co-authorship of the{" "}
        <StyledList items={["scientific book"]} /> Defining the Criteria for Air
        Bag Activation in Passenger Vehicle (2015).
      </p>

      <p className="text-center text-xl">
        For numerous <StyledList items={["major vehicle accidents"]} />, Mr.
        Chao has presented his speed reconstruction via multiple approaches,
        including but not limited to crush analysis (energy), momentum balance,
        video analysis, and CDR data analysis. He has also performed{" "}
        <StyledList items={["analyses"]} /> pertaining to line of sight,
        visibility, visual cue, perception-response time, event sequence,
        roadway design, and via signal-timing charts to assist with determining
        liability issues. In some cases, he utilizes Google Earth, AutoCAD, FARO
        3D scans, and animation software (e.g., 3D Max, FARO Reality) to prepare
        exhibits used in trials. For industrial, machinery, construction and
        product defect cases, Mr. Chao addresses not only code compliance (OSHA,
        ANSI, ADA, ASTM, etc.) issues, but also presents root cause and failure
        analysis via flow charts and Ishikawa (Fishbone) diagrams.
      </p>

      <PanelDivider />
      <h1 className="text-3xl text-secondary">EXEMPLAR CASE WORK</h1>

      <p className="text-center text-xl">
        Mr. Chao was retained as a defense expert witness in a personal injury
        case involving allegations of a severe head injury sustained by the
        plaintiff at a grocery store. The plaintiff claimed that a patio
        umbrella, positioned atop a freezer, fell and struck his head. Mr. Chao
        conducted a series of tests and provided expert opinions in the field of
        accident reconstruction. The case proceeded to trial in 2023, resulting
        in a defense verdict rendered by the jury.
      </p>

      <p className="text-center text-xl">
        Mr. Chao was retained as a plaintiff’s expert witness in a wrongful
        death case involving a fatal jetski explosion that occurred in the
        presence of the decedent’s wife, daughters, and other family members. He
        conducted a damage analysis and provided expert testimony regarding a
        manufacturing defect in the fuel filler neck, which had been
        over-torqued and damaged during installation. This defect permitted
        gasoline vapors to escape from the fuel line into the vessel’s hull,
        ultimately contributing to the explosion. In 2024, the jury returned a
        verdict awarding $22.1 million to the decedent’s wife and daughters.
      </p>
    </div>
  );
};

export default WeiChao;
