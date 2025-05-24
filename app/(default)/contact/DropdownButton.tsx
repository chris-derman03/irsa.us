import { IoIosArrowBack } from "react-icons/io";

interface Props {
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownButton = ({ clicked, setClicked }: Props) => {
  return (
    <button
      className="z-10 absolute w-full h-full flex items-center justify-end 
      pr-[2%] lg:pr-[2%] hover:text-white transition-colors duration-150"
      onClick={() => setClicked((prev) => !prev)}
    >
      <div
        className={`h-7/10 aspect-square w-auto ${
          clicked ? "-rotate-90" : ""
        } transition-transform duration-200`}
      >
        <IoIosArrowBack className="w-full h-full" />
      </div>
    </button>
  );
};

export default DropdownButton;
