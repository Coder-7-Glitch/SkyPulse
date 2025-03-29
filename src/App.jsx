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

function App() {
  return (
    <>
      <Header />
      <Security />
      <div className="lg:flex w-full">
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/earning" element={<EarningPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/plans" element={<PlansPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
