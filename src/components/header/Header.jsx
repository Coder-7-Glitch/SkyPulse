import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

export default function Header() {
  const profileBtn = useRef();
  const [isProfileOpen, setisProfileOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (
      storedEmail === "shahbazansari.dev@gmail.com" &&
      storedPassword === "shahbaz2007"
    ) {
      setUserName("Shahbaz Ansari");
      setRole("Administrator")
    } else if (
      storedEmail === "ahad97140@gmail.com" &&
      storedPassword === "Code Crafter"
    ) {
      setUserName("Muhammad Ahad");
      setRole("Creator")
    } else {
      setUserName("");
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
                alt="IMG"
                className="w-[200px] sm:block hidden"
              />
              <img
                src="/assets/Logo.svg"
                alt="IMG"
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
                alt="IMG"
                className="rounded-full w-[50px] h-[50px]"
              />{" "}
              {userName}
            </button>
            {isProfileOpen && (
              <div className="absolute left-0 top-14 z-10 mt-2 w-[250px] rounded-md bg-body_Color shadow-lg">
                <ul className="py-1 px-1 text-[15px] text-zinc-200">
                  <div className="img-username flex items-center gap-1">
                    <img
                      src="/assets/profile-img.jpeg"
                      alt=""
                      className="rounded-full w-[50px] h-[50px]"
                    />
                    <li className="px-4 py-5 cursor-pointer">
                      <div className="username text-lg">{userName}</div>
                      <div className="flex items-center gap-2">
                        <div className="green-icon w-[10px] h-[10px] bg-[#42DD75] rounded-full"></div>
                        <div className="role text-lg">{role}</div>
                      </div>
                    </li>
                  </div>
                  <hr className="mb-3" />
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-accent_Color rounded"
                    onClick={closeProfile}
                  >
                    <Link to={"/"}>My Profile</Link>
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-accent_Color rounded"
                    onClick={closeProfile}
                  >
                    <Link to={"/"}>Password</Link>
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-accent_Color rounded"
                    onClick={closeProfile}
                  >
                    <Link to={"/"}>Edit Profile</Link>
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-accent_Color rounded"
                    onClick={closeProfile}
                  >
                    <Link to={"/"}>My List</Link>
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-accent_Color rounded"
                    onClick={closeProfile}
                  >
                    <Link to={"/"}>History</Link>
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-accent_Color rounded"
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
