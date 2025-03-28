import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Header from './components/header/header';
import Security from './components/Security/security';
import Sidebar from './components/sidebar/sidebar';
import Dashboard from './Dashboard/Dashboard';

function App() {

  return (
    <>
      <Header />
      {/* <Security /> */}
      <div className="lg:flex gap-12">
        <Sidebar />
        <Dashboard />
      </div>

    </>
  )
}

export default App
