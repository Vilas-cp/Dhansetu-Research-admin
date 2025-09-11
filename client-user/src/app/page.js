import ArticlesGrid from "@/components/articles";
import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header home/>
      <ArticlesGrid />
    </div>
  );
};

export default page;
