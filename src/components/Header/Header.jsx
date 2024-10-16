// import React from "react";
import { useEffect, useState, useRef } from "react";
import "./Header.css";

const Header = () => {
  const [openSideNav, setOpenSideNav] = useState(false);
  const navRef = useRef(null);

  const toggleSideNav = () => {
    setOpenSideNav((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenSideNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="header-logo">News</div>
      <button className="hamburger" onClick={toggleSideNav}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
      <nav ref={navRef} className={`navbar ${openSideNav ? "active" : ""}`}>
        <ul>
          <li>
            <a href="" className="active">
              New
            </a>
          </li>
          <li>
            <a href="">Popular</a>
          </li>
          <li>
            <a href="">Trending</a>
          </li>
          <li>
            <a href="">Categories</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
