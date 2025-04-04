import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import '../App.css'

import React from 'react'

const MainLayout = () => {
  return (
    <>
    <main className="bg-custom-color">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
    </>
  )
}

export default MainLayout