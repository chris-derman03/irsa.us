import { promises as fs } from "fs";
import Image from "next/image";
import Tint from "../../Components/Tint";
import ServicePageLinks from "./ServicePageLinks";

export interface Service {
  serviceID: string;
  name: string;
  imgPath: string;
}

const ServicesPage = async () => {
  const serviceData = await fs.readFile(
    process.cwd() + "/app/data/services.json",
    "utf-8"
  );
  const services: Service[] = JSON.parse(serviceData).services;

  return (
    <>
      <div className="lg:fixed top-0 left-0 w-full lg:w-screen h-[650px] lg:flex items-center justify-center">
        <Image
          src="/services/services_page_backdrop.jpg"
          fill
          style={{ objectFit: "cover" }}
          alt={"Services Backdrop"}
        />
        <Tint alpha={0.7} />
        <h1 className="text-7xl z-10">Services</h1>

        <ServicePageLinks services={services} />
      </div>
    </>
  );
};

export default ServicesPage;

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const serviceData = await fs.readFile(
    process.cwd() + "/app/data/services.json",
    "utf-8"
  );
  const services = JSON.parse(serviceData).services;
  const serviceNames = services.map((s: Service) => s.name).join(", ");

  return {
    title: "Services",
    description: `IRSA Expert witness services: ${serviceNames}`,
  };
}
