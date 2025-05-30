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
        , <RouteLink href="/services/human_factors" label="Human Factors" />,
        <RouteLink href="/services/biomechanics" label="biomechanics" />, and
        safety analysis to identify root causes of accidents, assess
        injury-prevention alternatives, and recommend safety practices and
        procedures as they relate to post-accident evaluation. During his over
        two decades of service with the Institute of Risk and Safety Analyses,
        he has been involved in over 1,800 forensic investigations which have
        included auto accidents,{" "}
        <RouteLink href="/services/premises" label="premises liability" />,
        industrial and construction safety, machinery operation, product defect,
        OSHA violations, and code requirements. Mr. Chao has testified in trials
        and depositions, and he has also assisted with rebuttal work against
        opposing experts.
      </p>

      <p className="text-center text-xl">
        Mr. Chao specializes in{" "}
        <StyledList items={["accident reconstruction"]} /> and is proficient
        with crush analysis (energy), momentum balance, video analysis, CDR data
        analysis, drag factor assessments, critical speed yaw determinations,
        and evaluations of traffic signal phases and timing. Furthermore, he is
        a <StyledList items={["human factors expert"]} /> on aspects such as
        line of sight, lighting conditions, visibility, visual cues,
        perception-response time, and event sequencing. In terms of{" "}
        <StyledList items={["biomechanics"]} />, Mr. Chao has conducted
        extensive analyses regarding the forces and movements affecting human
        body structures. Additionally, he is familiar with code compliance
        (OSHA, ANSI, ADA, ASTM, etc.) issues and has provided expert testimony
        in industrial machinery and product defect cases.
      </p>

      <p className="text-center text-xl">
        Mr. Chao’s <StyledList items={["academic", "civic contributions"]} />{" "}
        began as early as 1995; after the 1994 Northridge earthquake, Mr. Chao
        researched and designed a computer-simulating model of{" "}
        <StyledList items={["Resilient-Friction Base Isolator"]} /> to prevent
        excessive damage to building structures during earthquakes. Since the
        early 2000s, Mr. Chao has actively participated in research and
        experiments with accelerometers and compiled a{" "}
        <StyledList items={["study"]} /> titled “G-Force in Daily Activities”
        (2003, updated in 2014). Mr. Chao’s extensive knowledge pertaining to
        air-bag deployment is evident by his co-authorship of the{" "}
        <StyledList items={["scientific book"]} />{" "}
        <span className="italic">
          Defining the Criteria for Air Bag Activation in Passenger Vehicle
        </span>{" "}
        (2015).
      </p>

      <p className="text-center text-xl">
        Mr. Chao is highly skilled in utilizing{" "}
        <StyledList items={["software tools"]} /> such as Google Earth Pro,
        AutoCAD, FARO 3D scans, and various{" "}
        <StyledList items={["animation programs"]} />, including 3D Max, FARO
        Reality, and Virtual Crash. He has contributed to the development of
        numerous trial exhibit presentations, enhancing the visual
        representation of complex case elements.
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
