import FixedBackgroundPage from "@/app/Components/FixedBackgroundPage";
import Content from "../contact/Content";

const page = () => {
  return (
    <FixedBackgroundPage
      src="/contact/backdrop.jpg"
      alt="Contact Page Background"
      alpha={0.8}
      content={<Content excludeContact />}
    />
  );
};

export default page;
