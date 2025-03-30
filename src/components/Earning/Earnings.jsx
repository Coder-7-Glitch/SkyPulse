import React from "react";
import EarningData from "./data/EarningData.json";

export default function Earnings() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
      {EarningData.map((earnings, i) => (
        <div
          className="p-3 border border-[#4d4d4d] rounded-md w-full transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          key={i}
        >
          <div className="client-name text-center">
            <h1 className="text-xl text-white font-medium">
              {earnings.clientName}
            </h1>
          </div>
          <div className="other flex items-baseline justify-between mt-4">
            <div className="country">
              <h1 className="md:text-[40px] text-3xl text-text_Color font-semibold">
                {earnings.countryName}
              </h1>
            </div>
            <div className="payment-per-month bg-[#1a1a1a] px-3 py-1 rounded-lg">
              <h1 className="text-lg text-[#42DD75] font-medium">
                ${earnings.PaymentPerYear}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
