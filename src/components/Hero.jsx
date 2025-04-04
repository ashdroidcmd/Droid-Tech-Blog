import React from 'react'
import '../App.css'

const Hero = () => {
  return (
    <section className="custom-background">
        <div className="container">
            <div className="p-5 text-center d-flex align-items-center">
                
                <div className="col-lg-6 mx-auto">
                    <img id="hero-logo" src="/Droid-Tech-Blog/images/logo.png" alt="logo"/>
                    <h1 className="fw-bold text-primary">Droid</h1>
                    <p className="lead mb-4 text-white">Explore exciting projects and tutorials to enhance your IOT skills.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero