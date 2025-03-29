import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Security from './components/Security/Security';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/sidebar-Pages/Dashboard';
import Earning from './components/sidebar-Pages/Earning';
import Notes from './components/sidebar-Pages/Notes';
import Plans from './components/sidebar-Pages/Plans';

function App() {

  return (
    <>
      <Header />
      <Security />
      <div className="lg:flex w-full">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/earning' element={<Earning />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/plans' element={<Plans />} />
        </Routes>
      </div>

    </>
  )
}

export default App
