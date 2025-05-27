"use client";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/app/Components/LoadingSpinner";
import Content from "./Content";
import { Service } from "./page";

const ClientPage = ({ services }: { services: Service[] }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), 700);
    return () => clearTimeout(timeout);
  }, []);

  return !showContent ? (
    <div className="w-full h-screen flex items-center justify-center">
      <LoadingSpinner />
    </div>
  ) : (
    <Content services={services} />
  );
};

export default ClientPage;
