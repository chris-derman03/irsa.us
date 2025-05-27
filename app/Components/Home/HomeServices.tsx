import Link from "next/link";
import servicesData from "../../data/services.json";
import StyledList from "../StyledList";

const HomeServices = () => {
  const linkStyles =
    "border-2 border-[var(--primary)] rounded-xl px-10 py-3 bg-[rgba(0,0,0,0.7)]";
  const linkHoverVisuals =
    "hover:brightness-50 hover:scale-99 transiton-all duration-200 ease-in-out";

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between px-10 2xl:px-50 lg:gap-10 xl:gap-10 pb-20">
      <div className="flex flex-col gap-10 w-full lg:w-5/10 2xl:w-4/10">
        <h1 className="text-7xl text-center lg:text-left">Services</h1>
        <p className="text-xl md:text-3xl pl-5 md:pl-10 hidde">
          <span className="italic">Discover</span> our range of expert witness
          services, each backed by decades of scientific experience and
          real-world application.
        </p>
        <p className="text-xl md:text-3xl pl-5 md:pl-10 hidde">
          Each service is designed to reconstruct, visualize, and explain
          real-world events with <StyledList items={["precision", "clarity"]} />
          .
        </p>
      </div>

      <div className="flex flex-col gap-10 2xl:pr-2clear0 pt-10 lg:pt-0">
        {servicesData.services.map((service) => (
          <Link
            key={service.serviceID}
            href={service.href}
            target="_blank"
            className={`${linkStyles} ${linkHoverVisuals} `}
          >
            <h1 className="text-4xl">{service.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
