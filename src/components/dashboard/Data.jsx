import React from 'react'
import { IoStatsChart } from "react-icons/io5";

export default function Data() {
  return (
    <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="p-3 border border-[#4d4d4d] rounded-md w-full"
                  >
                    <div className="heading flex items-center justify-between w-full">
                      <div className="content">
                        <h1 className="text-xl text-white">Network</h1>
                      </div>
                      <div className="icon text-2xl bg-icons_Color w-10 h-10 flex items-center justify-center rounded-xl text-text_Color">
                        <IoStatsChart />
                      </div>
                    </div>
                    <div className="description flex items-baseline justify-between mt-1">
                      <h1 className="text-3xl md:text-5xl text-text_Color">35M</h1>
                      <h1 className="text-lg text-[#42DD75]">+50%</h1>
                    </div>
                  </div>
                ))}
              </div>
    </div>
  )
}
