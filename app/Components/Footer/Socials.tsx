import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Socials = () => {
  return (
    <>
      <Link
        href="https://www.instagram.com/I.R.S.A._Experts/"
        className="w-[25%] h-auto aspect-square "
        target="_blank"
      >
        <FaInstagram className="w-full h-full hover:text-[rgb(219,50,122)] hover:scale-95" />
      </Link>
      <Link
        href="https://www.youtube.com/user/irsaexpert"
        target="_blank"
        className="w-[25%] h-auto aspect-square"
      >
        <FaYoutube className="w-full h-full hover:text-[rgb(255,50,51)] hover:scale-95" />
      </Link>
    </>
  );
};

export default Socials;
