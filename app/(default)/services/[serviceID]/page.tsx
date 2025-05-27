import { promises as fs } from "fs";
import { serviceComponents } from "@/app/Components/serviceComponentMap";
import FixedBackgroundPage from "@/app/Components/FixedBackgroundPage";

interface Props {
  params: Promise<{ serviceID: string }>;
}

interface Service {
  serviceID: string;
  name: string;
  subtitle: string;
  metadata: string;
}

const ServicePage = async ({ params }: Props) => {
  const { serviceID } = await params;

  const serviceData = await fs.readFile(
    process.cwd() + "/app/data/services.json",
    "utf-8"
  );
  const services: Service[] = JSON.parse(serviceData).services;
  const service = services.find((s) => s.serviceID === serviceID);

  if (!service)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <h2 className="text-4xl">
          <span className="text-secondary font-bold">Error 404 </span>
          Service Not Found: <span className="underline">{serviceID}</span>
        </h2>
      </div>
    );

  // const serviceTitle = service?.name;
  // const serviceSubTitle = service?.subtitle;
  const mainImageFP = "/services/" + serviceID + "/main.jpg";
  const PageContent = serviceComponents[service.serviceID];

  return (
    <FixedBackgroundPage
      src={mainImageFP}
      alt={serviceID + " Page Main Image"}
      content={
        <div className="w-full mt-[15vh] p-5 md:p-10 lg:px-30">
          {PageContent ? (
            <>
              <h1 className="w-full text-center text-5xl md:text-6xl mb-15">
                {service.name}
              </h1>
              <PageContent />
            </>
          ) : (
            <div>
              ERROR 404 <span className="text-secondary">{serviceID}</span>{" "}
              Service Not Found.
            </div>
          )}
        </div>
      }
    />
  );
};

export default ServicePage;

import { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceID } = await params;

  const serviceData = await fs.readFile(
    process.cwd() + "/app/data/services.json",
    "utf-8"
  );
  const services: Service[] = JSON.parse(serviceData).services;
  const service = services.find((s) => s.serviceID === serviceID);

  return {
    title: service?.name,
    description: service?.metadata,
  };
}
