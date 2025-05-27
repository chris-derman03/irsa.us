import engineerData from "../../../data/engineers.json";
import { Expert } from "../ExpertCard";
import FixedBackgroundPage from "@/app/Components/FixedBackgroundPage";
import Content from "./Content";

interface Props {
  params: Promise<{ expertID: string }>;
}

const ExpertPage = async ({ params }: Props) => {
  const { expertID } = await params;
  const experts = engineerData.engineers;
  const expert = experts.find((e: Expert) => e.id === expertID);

  if (!expert)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <h2 className="text-4xl">
          <span className="text-secondary font-bold">Error 404: </span>
          Expert <span className="underline">{expertID}</span> Not Found.
        </h2>
      </div>
    );

  return (
    <FixedBackgroundPage
      src={""}
      alt={""}
      content={<Content expert={expert} />}
    />
  );
};

export default ExpertPage;

import { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { expertID } = await params;
  const experts = engineerData.engineers;
  const expert = experts.find((e: Expert) => e.id === expertID);

  return {
    title: expert?.name,
    description: `Bio Page for IRSA Expert: ${expert?.name}`,
  };
}
