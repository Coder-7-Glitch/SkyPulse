import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

export default function Header() {
  const profileBtn = useRef();
  const [isProfileOpen, setisProfileOpen] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (
      storedEmail === "shahbazansari.dev@gmail.com" &&
      storedPassword === "shahbaz2007"
    ) {
      setUserName("Shahbaz Ansari");
    } else if (
      storedEmail === "ahad97140@gmail.com" &&
      storedPassword === "415364"
    ) {
      setUserName("Muhammad Ahad");
    } else {
      setUserName("Guest");
    }
  }, []);

  function closeProfile() {
    setisProfileOpen(false);
  }

  useEffect(() => {
    function handleProfileClose(e) {
      if (profileBtn.current && !profileBtn.current.contains(e.target)) {
        closeProfile();
      }
    }

    document.addEventListener("mousedown", handleProfileClose);

    return () => {
      document.removeEventListener("mousedown", handleProfileClose);
    };
  }, []);

  return (
    <div>
      <nav className="bg-nav_and_Sidebar_Color z-10">
        <div className="flex items-center py-4 pb-3 lg:px-[5rem] md:px-[2.5rem] sm:px-[1.5rem] px-[.5rem] justify-between w-full">
          <Link to={"/"}>
            <div className="logo">
              <img
                src="/assets/Website Name.svg"
                alt=""
                className="w-[200px] sm:block hidden"
              />
              <img
                src="/Logo.svg"
                alt=""
                className="w-[50px] sm:hidden block"
              />
            </div>
          </Link>
          <div className="profile relative text-white">
            <button
              type="button"
              onClick={() => setisProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 text-lg"
            >
              <img
                src="/assets/profile-img.jpeg"
                alt=""
                className="rounded-full w-[50px] h-[50px]"
              />{" "}
              {userName}
            </button>
            {isProfileOpen && (
              <div className="absolute sm:left-0 z-10 mt-2 w-48 rounded-md bg-zinc-900 shadow-lg ring-1 ring-black ring-opacity-5">
                <ul className="py-1 text-[15px] text-zinc-200">
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-zinc-800"
                    onClick={closeProfile}
                  >
                    <Link to={"/"}>My Profile</Link>
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-zinc-800"
                    onClick={closeProfile}
                  >
                    <Link to={"/"}>Password</Link>
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-zinc-800"
                    onClick={closeProfile}
                  >
                    <Link to={"/"}>Edit Profile</Link>
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-zinc-800"
                    onClick={closeProfile}
                  >
                    <Link to={"/"}>My List</Link>
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-zinc-800"
                    onClick={closeProfile}
                  >
                    <Link to={"/"}>History</Link>
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-zinc-800"
                    onClick={closeProfile}
                  >
                    <Link to={"/"}>Help</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
