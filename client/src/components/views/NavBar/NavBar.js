import React, { useState } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { Drawer, Button, Icon } from "antd";
import "./Sections/Navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="leftmenu">
        <div className="menuitem">
          <LeftMenu />
        </div>
      </div>
      <div className="logo">
        <div className="logo-item">
          <a href="/">
            <span style={{ color: "white" }}>디피 Select</span>
          </a>
        </div>
      </div>
      <div className="rightmenu">
        <div className="rightmenu-item">
          <RightMenu />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
