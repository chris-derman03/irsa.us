import Image from "next/image";
import Tint from "../../Components/Tint";
import ServicePageLinks from "./ServicePageLinks";
import Footer from "@/app/Components/Footer/Footer";
import { Service } from "./page";

const Content = ({ services }: { services: Service[] }) => {
  return (
    <div className="lg:fixed top-0 left-0 w-full lg:w-screen h-[650px] lg:flex items-center justify-center">
      <Image
        src="/services/services_page_backdrop.jpg"
        fill
        style={{ objectFit: "cover" }}
        alt={"Services Backdrop"}
        priority
      />
      <Tint alpha={0.7} />
      <h1 className="text-7xl z-10">Services</h1>

      <ServicePageLinks services={services} />
      <div className="lg:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Content;
