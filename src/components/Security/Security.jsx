import React, { useRef, useState } from "react";

export default function Security() {
  const passwordInp = useRef();
  const emailInp = useRef();
  const securityCard = useRef();
  const [alertMessage, setAlertMessage] = useState("");

  function securityFunction(e) {
    e.preventDefault();

    const validCredentials = {
      "ahad.dev@gmail.com": "2010",
      "shahbazansari.dev@gmail.com": "2007",
    };

    const email = emailInp.current.value;
    const password = passwordInp.current.value;

    if (validCredentials[email] === password) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      securityCard.current.classList.add("hidden");
      securityCard.current.classList.remove("block");
      setAlertMessage("");
    } else {
      setAlertMessage("Only Administrators can enter.");
    }
  }

  return (
    <div>
      <div
        className="security w-full h-full fixed bg-black flex items-center justify-center z-[9999] top-0 lg:px-12 md:px-6 px-3"
        ref={securityCard}
      >
        <div className="security-card text-white text-center relative bg-body_Color p-6 rounded-xl w-[500px] shadow-lg">
          <div className="content my-6">
            <h1 className="font-fontWorkSans font-semibold flex items-center gap-3 text-3xl justify-center">
              <img src="/assets/Logo.svg" alt="SkyPulse Logo" className="w-[50px]" /> SkyPulse
            </h1>
            <p className="mt-4 text-lg text-center">
              Welcome to SkyPulse – Where Muhammad Ahad's Dreams Take Flight.
            </p>
          </div>
          {alertMessage && (
            <div className="custom-alert bg-red-500 text-white p-3 rounded-md mb-4">
              {alertMessage}
            </div>
          )}
          <form className="space-y-4">
            <div className="input text-start text-text_Color">
              <label htmlFor="Email" className="font-semibold">Email</label>
              <input
                type="email"
                name="Email"
                id="Email"
                placeholder="Enter Email"
                className="w-full py-2 px-3 rounded-md mt-1 outline-none text-text_Color bg-accent_Color placeholder:text-gray-400"
                ref={emailInp}
                maxLength={27}
              />
            </div>
            <div className="input text-start text-text_Color">
              <label htmlFor="password" className="font-semibold">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                className="w-full py-2 px-3 rounded-md mt-1 outline-none text-text_Color bg-accent_Color placeholder:text-gray-400"
                ref={passwordInp}
                maxLength={4}
              />
            </div>
            <div className="submit-btn mt-4">
              <button
                type="button"
                className="w-full text-[20px] bg-accent_Color px-6 py-3 rounded-lg hover:bg-text_Color hover:text-black transition-all ease-linear font-semibold"
                onClick={securityFunction}
              >
                Proceed
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}