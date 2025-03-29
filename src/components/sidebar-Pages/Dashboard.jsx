import React from "react";
import Charts from "../dashboard/Charts";
import Data from "../dashboard/Data";

export default function Dashboard() {
  return (
    <div className="w-full lg:px-12 ps-[4rem] pe-[1rem] mb-3">
      <div className="pt-3">
        <div className="heading">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-text_Color">
            Dashboard
          </h1>
          <p className="text-sm md:text-lg text-[#9d9d9d] mt-1">
            With all of the styling tool options available in today's market
          </p>
        </div>
        <Data />
        <Charts />
      </div>
    </div>
  );
}
