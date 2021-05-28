import React from "react";
import "./Header.scss";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard, faBars } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";
import { useState, useEffect } from "react";

const Header = () => {
  const [isActive, setActive] = useState(false);
  const [sidebar, setSideBar] = useState("");

  const toggleClass = () => {
    setActive(!isActive);
    console.log("clicked", isActive);
  };
  if (isActive) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  return (
    <div>
      <SideBar showSideBar={isActive}></SideBar>

      <div className="header">
        <a href="#">Covid Tracker</a>
        <div className="header-right">
          <div onClick={toggleClass} className="toggle-icon">
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
