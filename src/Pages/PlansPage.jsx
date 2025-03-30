import React from "react";
import Todo from "../components/Plans/Todo";

export default function PlansPage() {
  return (
    <div className="w-full lg:px-12 ps-[4rem] pe-[1rem] mb-3 pt-3">
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
