import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function NavBar() {
  const [navBg, setNavBg] = useState(false)
  const changeNavBg = ()=>{
    let scrollPastNav = window.scrollY > 0
    setNavBg(scrollPastNav)
  }
  window.addEventListener('scroll', changeNavBg)
  return (
    <header className={`fixed-top ${navBg ? 'navBg-dark' : ''}`}>
      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <div id="nav-left" className="navbar-nav me-auto   mb-lg-0">
              <a className="nav-link p-0 active" aria-current="page" href="#about">
                About
              </a>
              <a className="nav-link p-0" href="#work">
                Work
              </a>
              <a className="nav-link p-0" href="#certificates">
                Certificates
              </a>
            </div>
            <div id="nav-right" className="navbar-nav mb-2 mb-lg-0">
              <a
                className="nav-link"
                href="https://github.com/ThomasTW935"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon inverse={navBg} icon={faGithub}  />
              </a>
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/daryl-p-thomas/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon inverse={navBg} icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
