import React from "react";
import "./SideBar.scss";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard, faHome } from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ showSideBar }) => {
  const [sideBar, setSideBar] = useState(false);
  /// const showSideBar = () => setSideBar(!sideBar);
  console.log(showSideBar);
  return (
    <div className={showSideBar ? "side-bar" : "side-bar-hide"}>
      {/* <div className={showSideBar ? "side-bar-show" : "side-bar-hide"}> */}
      <div className="side-bar-content">
        <a href="/covid-tracker">
          <FontAwesomeIcon icon={faHome} /> Home
        </a>
        <a href="/single">Single Country</a>
        <a href="/all">All Country</a>
        <a href="/charts">Charts</a>
        <a href="/contact-us">Contact US</a>
      </div>
      {/* </div> */}
    </div>
  );
};

export default SideBar;
