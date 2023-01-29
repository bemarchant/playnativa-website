import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { LightModeToggleButton } from "./btns/LightModeToggleButton";
/** @jsxImportSource theme-ui */

export function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div
          className="navbar-container"
          sx={{ color: "color", backgroundColor: "inverseColor" }}
        >
          <Link
            to="/"
            className="navbar-logo"
            onClick={closeMobileMenu}
            sx={{ color: "color" }}
          >
            playNativa
            <i class="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item" style={{ color: "yellow" }}>
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
                sx={{ color: "color" }}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/games"
                className="nav-links"
                onClick={closeMobileMenu}
                sx={{ color: "color" }}
              >
                Games
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/metaverse"
                className="nav-links"
                onClick={closeMobileMenu}
                sx={{ color: "color" }}
              >
                Metaverse
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/nfts"
                className="nav-links"
                onClick={closeMobileMenu}
                sx={{ color: "color" }}
              >
                NFTs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-me"
                className="nav-links"
                onClick={closeMobileMenu}
                sx={{ color: "color" }}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
                sx={{ color: "color" }}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
          <LightModeToggleButton></LightModeToggleButton>
        </div>
      </nav>
    </>
  );
}
