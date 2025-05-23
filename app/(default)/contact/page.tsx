import FixedBackgroundPage from "@/app/Components/FixedBackgroundPage";
import Location from "./Location";
import Contact from "./Contact";

const page = () => {
  return (
    <FixedBackgroundPage
      src=""
      alt=""
      content={
        <div className="mt-[20vh] w-full flex flex-col items-center gap-30 border-1 border-blue-700 p-10">
          <Contact />
          <Location />
        </div>
      }
    />
  );
};

export default page;
