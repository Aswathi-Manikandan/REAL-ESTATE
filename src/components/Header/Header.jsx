import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [menuOpen, setMenuOpened] = useState(false);

  // Prevent scrolling when menu is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <header className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        {/* Navigation Menu */}
        <nav className={`h-menu ${menuOpen ? "active" : ""}`}>
          <a href="#" onClick={() => setMenuOpened(false)}>Residencies</a>
          <a href="#" onClick={() => setMenuOpened(false)}>Our Value</a>
          <a href="#" onClick={() => setMenuOpened(false)}>Contact Us</a>
          <a href="#" onClick={() => setMenuOpened(false)}>Get Started</a>
          <button className="button">
            <a href="#" onClick={() => setMenuOpened(false)}>Contact</a>
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setMenuOpened(!menuOpen)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </header>
  );
};

export default Header;
