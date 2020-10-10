import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { NavLink, Link } from "react-router-dom";

function CommissionPage() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <span>
          <p style={{ fontSize: "80px" }}>수수료 페이지</p>
          <br />
          <p>수수료 설명 블라블라</p>
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/upload">
          <Button>확인했습니다</Button>
        </Link>
      </div>
    </div>
  );
}

export default CommissionPage;
