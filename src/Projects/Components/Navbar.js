import React, { useState } from "react";
import { FaTimes, FaBars, FaLowVision } from "react-icons/fa";
import "../Styles/Navbar.css";
import logo from "../Images/Icon.png";
import design from "../Images/design.png";
import vector from "../Images/Vector.png";

const Navbar = () => {
  const [icon, seticon] = useState(false);

  return (
    <div className="navbar">
      <div>
        <img src={logo} className="h-[30px] w-[35px] absolute left-[15px] top-[10px]"  alt="" />
        <img src={design} className="absolute top-[7px] left-[55px]" alt="" />
        <img src={vector} className="absolute top-[30px] left-[65px]" alt="" />
      </div>
      {/*List*/}
      <ul
        className={icon ? "menu active" : "menu"}
        onclick={() => seticon(!icon)}
      >
        <li onClick={() => seticon(!icon)}><a href="#home">HOME</a></li>
        <li onClick={() => seticon(!icon)}><a href="#about">ABOUT</a></li>
        <li onClick={() => seticon(!icon)}>SERVICES</li>
        <li onClick={() => seticon(!icon)}>BLOG</li>
        <li onClick={() => seticon(!icon)}>PROJECTS</li>
        <li onClick={() => seticon(!icon)}>CONTACT US</li>
      </ul>

      <div className="menu__icon">
        <span className="navbar__icon" onClick={() => seticon(!icon)}>
          {!icon ? <FaBars /> : <FaTimes />}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
