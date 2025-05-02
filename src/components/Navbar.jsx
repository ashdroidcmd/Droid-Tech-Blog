import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
    return (
        <header className="bg-custom-color2 fixed-top border-bottom border-primary">
            <nav className="container navbar navbar-dark navbar-expand-lg rounded" aria-label="Eleventh navbar example">
                <div className="container-fluid">

                    <Link className="navbar-brand text-white" to="/">
                        <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="logo" />
                    </Link>

                    <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample09">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-bold fs-5 me-3" to="/">HOME</Link>
                            </li>
                            <li>
                                <div class="dropdown">
                                    <Link class="nav-link text-white fw-bold fs-5 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        PROJECTS
                                    </Link>
                                    <ul class="dropdown-menu bg-dark">
                                        <li className="nav-item">
                                            <Link className="dropdown-item text-white" to="/projects">Arduino</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="dropdown-item text-white" to="/projects">Raspberry Pi</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="dropdown-item text-white" to="/projects">Homelab</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-bold fs-5 me-3" to="/about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-bold fs-5 me-3" to="/resources">RESOURCES</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-bold fs-5 me-3" to="/contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar