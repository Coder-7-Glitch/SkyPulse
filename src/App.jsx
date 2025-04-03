import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Security from "./components/Security/Security";
import Sidebar from "./components/sidebar/Sidebar";
import DashboardPage from "./Pages/DashboardPage";
import EarningPage from "./Pages/EarningPage";
import NotesPage from "./Pages/NotesPage";
import PlansPage from "./Pages/PlansPage";
import Profile from "./components/Profile/Profile";
import EditProfile from "./components/Profile/EditProfile";
import Policies from "./components/Profile/Policies";
import ChangePin from "./components/Profile/ChangePin";

function App() {
  return (
    <>
      <Header />
      {/* <Security /> */}
      <div className="lg:flex w-full">
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/earning" element={<EarningPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/change-pin" element={<ChangePin />} />
          <Route path="/policies" element={<Policies />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
