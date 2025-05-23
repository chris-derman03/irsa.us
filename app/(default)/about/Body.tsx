import ClientList from "./ClientList";
import Description from "./Description";

const Body = () => {
  return (
    <div className="mt-[20vh] w-full flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-0 justify-around">
      <h1 className="text-7xl">About</h1>
      <div className="w-8/10 lg:w-3/10 flex flex-col gap-5">
        <h1 className="text-3xl">The Lab</h1>
        <Description />
      </div>
      <div className="w-8/10 lg:w-2/10 flex flex-col gap-5">
        <h1 className="text-3xl">Partial Client List</h1>
        <ClientList />
      </div>
    </div>
  );
};

export default Body;
