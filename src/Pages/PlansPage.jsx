import React from "react";
import Todo from "../components/Plans/Todo";

export default function PlansPage() {
  return (
    <div className="w-full lg:px-12 md:ps-[4rem] ps-[.5rem] pe-[.5rem] mb-3 md:pt-3 pt-10">
      <div className="pt-3">
        <div className="heading">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-text_Color">
            Plans
          </h1>
          <p className="text-sm md:text-lg text-[#9d9d9d] mt-1 font-fontWorkSans">
            Plans drive success with smart tools, clear goals, and bold actions.
          </p>
        </div>
        <Todo />
      </div>
    </div>
  );
}
