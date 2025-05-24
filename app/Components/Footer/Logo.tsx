import Picture from "../Picture";
import Socials from "./Socials";

const Logo = () => {
  return (
    <div className="hidden lg:flex w-[12%] flex-col justify-center items-center gap-10">
      <Picture
        src="/utils/logoDark.png"
        alt="IRSA Logo"
        override
        className="w-full shadow-none"
      />
      <div className="w-8/10 flex gap-5 justify-center">
        <Socials />
      </div>
    </div>
  );
};

export default Logo;
