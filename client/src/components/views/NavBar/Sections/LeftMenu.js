import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, Button } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import { USER_SERVER } from "../../../Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function LeftMenu(props) {
  const user = useSelector((state) => state.user);

  if (user.userData && !user.userData.isAuth) {
    return (
      <>
      </>
    );
  } else {
    return (
      <Link to="/admin"><PlusCircleFilled style={{ color: "#F4576C", fontSize: "30px" }} /></Link>
      
    );
  }
}

export default LeftMenu;
