"use client";
import { useState } from "react";
import { Service } from "./page";
import ServicePageLink from "./ServicePageLink";

const ServicePageLinks = ({ services }: { services: Service[] }) => {
  const [clickedID, setClickedID] = useState<string | null>(null);

  return (
    <div className="w-full flex flex-col lg:flex-row pt-0 lg:pt-[100px] lg:fixed lg:bottom-0 overflow-auto">
      {services ? (
        services.map((service) => (
          <ServicePageLink
            service={service}
            key={service.name + "_link"}
            clicked={clickedID === service.serviceID}
            onClick={() => setClickedID(service.serviceID)}
          />
        ))
      ) : (
        <h2 className="text-4xl">
          <span className="text-secondary font-bold">Error 500: </span>
          Services Data Cannot be Loaded Right Now
        </h2>
      )}
    </div>
  );
};

export default ServicePageLinks;
