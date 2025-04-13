import React from "react";
import Charts from "../components/dashboard/Charts";
import Data from "../components/dashboard/Data";

export default function DashboardPage() {
  return (
    <div className="w-full lg:px-12 md:ps-[4rem] ps-[.5rem] pe-[.5rem] lg:mb-3 mb-28 md:pt-3 pt-10">
      <div className="pt-3">
        <div className="heading">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-text_Color font-fontRoboto">
            Dashboard
          </h1>
          <p className="text-sm md:text-lg text-[#9d9d9d] mt-1 font-fontWorkSans">
            With all of the styling tool options available in today's market
          </p>
        </div>
        <Data />
        <Charts />
      </div>
    </div>
  );
}
