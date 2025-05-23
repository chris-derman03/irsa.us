import RouteLink from "@/app/Components/RouteLink";

const Description = () => {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-xl">
        The Laboratory of Risk & Safety Analyses (est. 1995) is the sister
        company of the Institute of Risk & Safety Analyses (est. 1974). The
        Institute (IRSA) conducts analytic investigations of accidents using
        tools within{" "}
        <RouteLink
          href="/services/accident_recon"
          label="Accident Reconstruction"
          endspc={false}
        />
        , Engineering, Math, Physics,{" "}
        <RouteLink
          href="/services/biomechanics"
          label="Biomechanics"
          endspc={false}
        />
        , and{" "}
        <RouteLink
          href="/services/human_factors"
          label="Human Factors"
          endspc={false}
        />
        . The Lab deals with product testing, empirical investigations,
        applications as well as computer{" "}
        <RouteLink
          href="/services/animations_simulations"
          label="simulations/animations"
          endspc={false}
        />
        .
      </p>

      <p className="text-xl">
        The Laboratory has been involved in thousands of traffic collision
        investigations. With extensive knowledge of vehicular kinematics, skid
        mark examination, vehicle code research, signal phase patterns, and
        perception-reaction analyses, we provide state-of-the-art reconstruction
        to uncover the facts in an accident. For site inspections, the
        Laboratory has professional quality, multi-camera and video capabilities
        that allow scene re-creations to be simultaneously documented from
        multiple viewpoints. These views can be synced together to produce
        useful visual demonstrations with professional results. Our in-house
        video production facilities allow greater flexibility and accuracy when
        reconstructing an accident than a separate outside video production
        firm. Our experience is widely applied to red light disputes, high-speed
        collisions, vehicle rollovers, multi-vehicular accidents, and more. We
        also offer options of 3D animation to recreate and illustrate the event
        scenarios in detail using state-of-the-art 3D animation software, 3D
        scale modeling, and 3D scanning of the site.{" "}
      </p>

      <p className="text-xl">
        In addition to auto-collision investigations, the Laboratory is also
        involved in many other areas. We investigate failure cause and evaluate
        warning adequacy for both consumer products (chairs, ladders, toys,
        appliances, etc.) and industrial equipment (presses, conveyors,
        elevators, scaffolding, forklifts, etc.). Our facility offers a variety
        of destructive and non-destructive testing techniques including optical
        and electron microscopy. For premises liability (slip-and-fall,
        trip-and-fall, swimming pool, etc.), the Laboratory provides in-house
        friction tests as well as on-site inspection and code research. We have
        also developed industry standards regarding warnings on swimming pools.
        Moreover, our assessments propose alternative solutions for improving
        safety levels overall and reducing the risk of unnecessary and
        preventable accidents.
      </p>
    </div>
  );
};

export default Description;
