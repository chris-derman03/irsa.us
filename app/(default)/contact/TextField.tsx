interface Props {
  setInput: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  className?: string;
  area?: boolean;
}

const TextField = ({
  setInput,
  placeholder,
  className = "w-full h-full",
  area = false,
}: Props) => {
  const visuals =
    "bg-[rgba(16,24,40,0.97)] rounded-xl text-gray-500 shadow-[0_0_0px_white] transition-all duration-200";

  return (
    <div className={`${className} ${visuals} flex`}>
      {area ? (
        <textarea
          className="no-scrollbar w-full overflow-auto text-2xl font-bold pl-[3%] py-2 text-ellipsis 
    border-3 rounded-xl focus:border-white focus:outline-none focus:ring-0 shadow-[0_0_3px_white] resize-none"
          placeholder={placeholder}
          onChange={(e) => setInput(e.target.value)}
        />
      ) : (
        <input
          className="w-full text-2xl font-bold pl-[3%] py-2 overflow-hidden text-ellipsis 
    border-3 rounded-xl focus:border-white focus:outline-none focus:ring-0 shadow-[0_0_3px_white]"
          placeholder={placeholder}
          onChange={(e) => setInput(e.target.value)}
        />
      )}
    </div>
  );
};

export default TextField;
