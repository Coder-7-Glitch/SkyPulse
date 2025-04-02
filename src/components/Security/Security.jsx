import React, { useRef, useState } from "react";
import { Link } from "react-router-dom"; // FIXED import
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ADDED missing Toastify CSS import

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

      // Check if securityCard.current exists before modifying classList
      if (securityCard.current) {
        securityCard.current.classList.add("hidden");
        securityCard.current.classList.remove("block");
      }

      setAlertMessage("");
      toast.success("Login Successful!"); // Toast now works!
    } else {
      setAlertMessage("Only Administrators can enter.");
    }
  }

  return (
    <>
      {/* Toast container placed at a global level */}
      <ToastContainer position="top-right" autoClose={3000} />

      <div ref={securityCard}>
        <div className="relative z-50 flex min-h-screen items-center justify-center overflow-hidden p-0 sm:p-4">
          <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60"></div>
          <div className="fixed left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]"></div>
          <div className="fixed bottom-1/4 right-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-primary/30 blur-[120px]"></div>
          <div className="fixed inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-[0.02]"></div>
        </div>

        <div className="security w-full h-full fixed flex items-center justify-center z-[9999] top-0 lg:px-12 md:px-6 px-3">
          <div className="security-card text-white text-center relative bg-body_Color p-6 rounded-xl w-[500px] shadow-2xl">
            <div className="content my-6">
              <h1 className="font-fontWorkSans font-semibold flex items-center gap-3 text-3xl justify-center">
                <img
                  src="/assets/Logo.svg"
                  alt="SkyPulse Logo"
                  className="w-[50px]"
                />
                SkyPulse
              </h1>
              <p className="mt-4 text-lg text-center">
                Welcome to SkyPulse – Where Muhammad Ahad's Dreams Take Flight.
              </p>
            </div>

            {/* Display alert message if there is an error */}
            {alertMessage && (
              <div className="custom-alert bg-red-500 text-white p-3 rounded-lg mb-4">
                {alertMessage}
              </div>
            )}

            <form className="space-y-4">
              <div className="input text-start text-text_Color">
                <label htmlFor="Email" className="font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  placeholder="Enter Email"
                  className="w-full py-2 px-3 rounded-lg mt-1 outline-none text-text_Color bg-accent_Color placeholder:text-gray-400"
                  ref={emailInp}
                  maxLength={27}
                />
              </div>

              <div className="input text-start text-text_Color">
                <label htmlFor="password" className="font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  className="w-full py-2 px-3 rounded-lg mt-1 outline-none text-text_Color bg-accent_Color placeholder:text-gray-400"
                  ref={passwordInp}
                  maxLength={4}
                />
                <Link to={"/forget-password"}>
                  <p className="text-end mt-3">Forget Password?</p>
                </Link>
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
    </>
  );
}
