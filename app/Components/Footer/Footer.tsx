import Content from "./Content";
import Logo from "./Logo";
import Mobile from "./Mobile";
import Socials from "./Socials";

const Footer = () => {
  return (
    <>
      <footer className="md:hidden bottom-0 w-full bg-[rgb(0,0,0,1.9)] bg-[url(/utils/real-carbon-fibre.png)]">
        <Mobile />
      </footer>
      <footer className="hidden md:block bottom-0 w-full bg-[rgb(0,0,0,1.9)] bg-[url(/utils/real-carbon-fibre.png)]">
        <div className="w-full flex flex-col items-center border-t-2 border-[var(--primary)]">
          <div className="w-full flex justify-center gap-15 2xl:gap-50 py-20">
            <Logo />
            <Content />
          </div>

          <div className="w-8/10 flex flex-col items-center py-5 gap-5">
            <div className="h-[0.15rem] w-full bg-[rgba(255,255,255,0.2)]"></div>
            <div className="w-full flex justify-between items-center">
              <p>Copyright © 2025 Institute of Risk and Safety Analyses</p>
              <div className="lg:hidden w-[15%] flex gap-5 justify-center">
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
