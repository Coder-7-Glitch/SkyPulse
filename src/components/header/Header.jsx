import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

export default function Header() {
  const profileBtn = useRef(null);
  const profileMenu = useRef(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (
      storedEmail === "shahbazansari.dev@gmail.com" &&
      storedPassword === "2007"
    ) {
      setUserName("Shahbaz Ansari");
      setRole("Staff Member");
    } else if (
      storedEmail === "ahad.dev@gmail.com" &&
      storedPassword === "2010"
    ) {
      setUserName("Muhammad Ahad");
      setRole("Web Administrator");
    } else {
      setUserName("");
    }
  }, []);

  function closeProfile() {
    setIsProfileOpen(false);
  }

  useEffect(() => {
    function handleProfileClose(e) {
      if (
        profileBtn.current &&
        !profileBtn.current.contains(e.target) &&
        profileMenu.current &&
        !profileMenu.current.contains(e.target)
      ) {
        closeProfile();
      }
    }
    document.addEventListener("mousedown", handleProfileClose);
    return () => {
      document.removeEventListener("mousedown", handleProfileClose);
    };
  }, []);

  const handleLogout = () => {
    setTimeout(() => {
      window.location.reload();
    }, 100);
    navigate("/");
  };

  return (
    <nav className="bg-nav_and_Sidebar_Color">
      <div className="flex items-center py-4 pb-3 lg:px-[5rem] md:px-[2.5rem] sm:px-[1.5rem] px-[.5rem] justify-between w-full">
        <Link to="/">
          <img
            src="/assets/Website Name.svg"
            alt="Logo"
            className="w-[200px] sm:block hidden"
          />
          <img
            src="/assets/Logo.svg"
            alt="Logo"
            className="w-[50px] sm:hidden block"
          />
        </Link>
        <div className="profile relative text-white">
          <button
            type="button"
            ref={profileBtn}
            onClick={(e) => {
              e.stopPropagation();
              setIsProfileOpen((prev) => !prev);
            }}
            className="flex items-center gap-2 text-lg"
          >
            <img
              src="/assets/profile-img.jpeg"
              alt="Profile"
              className="rounded-full w-[50px] h-[50px]"
            />
            {userName}
          </button>
          {isProfileOpen && (
            <div
              ref={profileMenu}
              className="absolute left-[-155px] top-14 z-10 mt-2 w-[280px] rounded-md bg-body_Color shadow-lg"
            >
              <ul className="py-1 px-1 text-[15px] text-zinc-200">
                <div className="img-username flex items-center gap-1">
                  <img
                    src="/assets/profile-img.jpeg"
                    alt="Profile"
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
                {[
                  { item: "My Profile", link: "/profile"},
                  { item: "Change PIN", link: "/change-pin"},
                  { item: "People Added", link: "/people-add"},
                  { item: "Policies", link: "/policies"}
                  
                ].map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-accent_Color rounded"
                    onClick={closeProfile}
                  >
                    <Link to={item.link}>{item.item}</Link>
                  </li>
                ))}
                <hr className="mt-2 mb-5" />  
                <li>
                  <button
                    className="cursor-pointer transition-all flex items-center gap-4 bg-[#6dd9d430] px-3 py-2 rounded w-full "
                    onClick={handleLogout}
                  >
                    <div className="icon text-lg w-10 h-10 flex items-center justify-center rounded-2xl text-text_Color">
                      <FiLogOut />
                    </div>
                    <span className="text-text_Color text-lg">Log Out</span>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
