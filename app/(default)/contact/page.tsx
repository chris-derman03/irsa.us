import FixedBackgroundPage from "@/app/Components/FixedBackgroundPage";
import Content from "./Content";
import { Metadata } from "next";

const page = () => {
  return (
    <FixedBackgroundPage
      src="/contact/backdrop.jpg"
      alt="Contact Page Background"
      alpha={0.8}
      content={<Content />}
    />
  );
};

export default page;

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact IRSA experts. Location, phone number, email, inquiry form, support, get in touch, send message, request consultation, talk to an expert, find us, directions, reach out.",
};
