import engineerData from "../../data/engineers.json";
import Tint from "@/app/Components/Tint";
import Image from "next/image";
import Body from "./Body";
// import FixedBackgroundPage from "@/app/Components/FixedBackgroundPage";
import Footer from "@/app/Components/Footer/Footer";

const page = async () => {
  const experts = engineerData.engineers;

  if (!experts)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <h2 className="text-4xl">
          <span className="text-secondary font-bold">Error 500: </span>
          Experts Data Cannot be Loaded Right Now.
        </h2>
      </div>
    );

  return (
    <>
      {/* <FixedBackgroundPage
        src={"/experts/backdrop.jpg"}
        alt={"Experts Backdrop"}
        content={
          <div className="mt-[20vh]">
            <Body experts={experts} />
          </div>
        }
      /> */}
      <div className="slideShowContainer relative top-0 left-0 w-full h-[80vh] flex items-center justify-center">
        <Image
          src="/experts/backdrop.jpg"
          fill
          style={{ objectFit: "cover" }}
          alt={"Experts Backdrop"}
        />
        <Tint alpha={0.7} />
        <h1 className="text-7xl z-10">Experts</h1>
      </div>

      <Body experts={experts} />
      <Footer />
    </>
  );
};

export default page;
