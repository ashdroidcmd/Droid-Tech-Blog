import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-custom-color2 border-top border-primary">
      <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
            <p className="col-md-4 mb-0 text-light">© 2025 Droid</p>
            <ul className="nav col-md-4 justify-content-end">
              <li className="nav-item"><Link to="/" className="nav-link px-2 text-light">Home</Link></li>
              <li className="nav-item"><Link to="/projects" className="nav-link px-2 text-light">Projects</Link></li>
              <li className="nav-item"><Link to="/about" className="nav-link px-2 text-light">About</Link></li>
              <li className="nav-item"><Link to="/resources" className="nav-link px-2 text-light">Resources</Link></li>
            </ul>
          </div>
      </div>
    </footer>
  )
}

export default Footer