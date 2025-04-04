import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
return (
    <header className="bg-custom-color2 fixed-top border-bottom border-primary">
        <div className="container">
            <nav className="navbar navbar-dark navbar-expand-lg rounded" aria-label="Eleventh navbar example">
            <div className="container-fluid">

                <Link className="navbar-brand text-white" to="/">
                <img src="/Droid-Tech-Blog/images/logo.png" alt="logo"/>
                </Link>

                <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample09">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link text-white fw-bolder" to="/">HOME</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white fw-bolder" to="/projects">PROJECTS</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white fw-bolder" to="/about">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white fw-bolder" to="/resources">RESOURCES</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
</header>
)
}

export default Navbar