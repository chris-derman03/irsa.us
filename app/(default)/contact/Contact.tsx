const Contact = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center gap-0 border-1 border-red-500">
      <div className="w-[35%] flex flex-col items-center border-1 border-green-400">
        <h1 className="text-6xl">INQUIRIES</h1>
      </div>
      <div className="w-[30%] flex flex-col items-center border-1 border-green-400">
        Sender
      </div>
      <div className="w-[35%] flex flex-col items-center border-1 border-green-400">
        Message
      </div>
    </div>
  );
};

export default Contact;
