import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoHome, IoStatsChart } from "react-icons/io5";
import { IoIosDocument, IoIosRocket } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-auto top-0 lg:h-screen z-30">
      <div
        className={`relative sidebar bg-nav_and_Sidebar_Color h-full px-6 py-6 transition-all duration-300 hidden lg:block ${
          isOpen ? "w-[300px]" : "w-[100px]"
        }`}
      >
        <button
          type="button"
          className={`bg-text_Color p-2 absolute lg:right-[-15px] right-[-43px] lg:top-0 top-[86px] rounded-full ${
            isOpen ? "right-[2px]" : "right-[-43px]"
          }`}
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <FaChevronLeft className="text-2xl" />
          ) : (
            <FaChevronRight className="text-2xl" />
          )}
        </button>

        {isOpen && (
          <div className="mt-10">
            <ul className="space-y-6 text-white">
              {[
                { icon: <IoHome />, text: "Dashboard", link: "/" },
                { icon: <IoStatsChart />, text: "Earning", link: "/earning" },
                { icon: <IoIosDocument />, text: "Notes", link: "/notes" },
                { icon: <IoIosRocket />, text: "Plans", link: "/plans" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="cursor-pointer group transition-all flex items-center gap-4 px-3 py-2 rounded hover:bg-icons_Color w-full"
                  >
                    <div className="icon text-2xl bg-icons_Color w-10 h-10 flex items-center justify-center rounded-2xl text-text_Color">
                      {item.icon}
                    </div>
                    <span
                      className={`group-hover:text-text_Color text-lg transition-opacity duration-300 ${
                        isOpen ? "opacity-100" : "opacity-0 hidden md:block"
                      }`}
                    >
                      {item.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="fixed bottom-0 bg-nav_and_Sidebar_Color w-full left-0 lg:hidden block">
        <ul className="flex gap-5 items-center justify-center">
          {[
            { icon: <IoHome />, link: "/" },
            { icon: <IoStatsChart />, link: "/earning" },
            { icon: <IoIosDocument />, link: "/notes" },
            { icon: <IoIosRocket />, link: "/plans" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="cursor-pointer px-3 py-2 rounded w-full"
              >
                <div className="icon text-3xl bg-icons_Color w-11 h-11 flex items-center justify-center rounded-lg text-text_Color">
                  {item.icon}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
