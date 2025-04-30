import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import '../App.css'

import React from 'react'

const MainLayout = () => {
  return (
    <>
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="bg-custom-color flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default MainLayout