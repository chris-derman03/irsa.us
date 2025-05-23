"use client";
import { useState } from "react";
import { Expert } from "./ExpertCard";
import ExpertCards from "./ExpertCards";
import ExpertSearchBar from "./ExpertSearchBar";

interface Props {
  experts: Expert[];
}

const Body = ({ experts }: Props) => {
  const [searchParams, setSearchParams] = useState("");

  return (
    <div className="mb-50">
      <ExpertSearchBar
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
      <ExpertCards experts={experts} searchParams={searchParams} />
    </div>
  );
};

export default Body;
