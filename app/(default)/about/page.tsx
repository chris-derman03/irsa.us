import FixedBackgroundPage from "@/app/Components/FixedBackgroundPage";
import Body from "./Body";
import { Metadata } from "next";

const page = () => {
  return (
    <FixedBackgroundPage
      src="/about/backdrop.jpg"
      alt="IRSA Lab"
      alpha={0.7}
      content={<Body />}
    />
  );
};

export default page;

export const metadata: Metadata = {
  title: "About",
  description:
    "Exemplar Cases. Partial Client List. About. Institute of Risk and Safety Analysis. Lab of Risk and Safety Analysis.",
};
