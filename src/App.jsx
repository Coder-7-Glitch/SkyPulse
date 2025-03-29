import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Security from './components/Security/Security';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './Dashboard/Dashboard';

function App() {

  return (
    <>
      <Header />
      <Security />
      <div className="lg:flex gap-12">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </div>

    </>
  )
}

export default App
