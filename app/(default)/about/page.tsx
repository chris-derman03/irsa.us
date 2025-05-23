import FixedBackgroundPage from "@/app/Components/FixedBackgroundPage";
import Body from "./Body";

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
