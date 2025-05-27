import { promises as fs } from "fs";

import ClientPage from "./ClientPage";

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

  return <ClientPage services={services} />;
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
