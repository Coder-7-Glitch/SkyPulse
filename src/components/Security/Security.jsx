import React, { useRef, useState } from "react";

export default function Security() {
  const passwordInp = useRef();
  const emailInp = useRef();
  const securityCard = useRef();
  const [alertMessage, setAlertMessage] = useState("");

  function securityFunction(e) {
    e.preventDefault();

    const validCredentials = {
      "ahad97140@gmail.com": "2010",
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
      setAlertMessage("Only Administrator can enter");
    }
  }

  return (
    <div>
      <div
        className="security w-full h-full fixed bg-black flex items-center justify-center z-[9999] top-0 lg:px-12 md:px-6 px-3"
        ref={securityCard}
      >
        <div className="security-card text-white text-center relative">
          <div className="logo md:w-[200px] w-[100px] mx-auto">
            <img src="/assets/Logo.svg" alt="IMG" className="w-full" />
          </div>
          <div className="content my-6">
            <h1 className="md:text-5xl font-fontWorkSans font-semibold text-2xl">
              Hi, Welcome to SkyPulse
            </h1>
          </div>
          {alertMessage && (
            <div className="custom-alert bg-red-500 text-white p-3 rounded-md mb-4">
              {alertMessage}
            </div>
          )}
          <form>
            <div className="input text-start mb-3">
              <label htmlFor="Email">Email</label>
              <input
                type="Email"
                name="Email"
                id="Email"
                placeholder="Enter Email"
                className="w-full py-2 px-3 rounded-[2px] mt-1 outline-none text-black"
                ref={emailInp}
                maxLength={27}
              />
            </div>
            <div className="input text-start">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                className="w-full py-2 px-3 rounded-[2px] mt-1 outline-none text-black"
                ref={passwordInp}
                maxLength={4}
              />
            </div>
            <div className="submit-btn mt-3">
              <button
                type="button"
                className="text-[20px] bg-body_Color px-6 py-3 rounded-[8px] hover:bg-text_Color hover:text-black transition-all ease-linear"
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
