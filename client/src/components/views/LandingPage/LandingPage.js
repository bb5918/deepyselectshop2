import React, { useEffect } from "react";
import { Form, Input, Button, Progress } from "antd";
import { NavLink, Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <span>
          <p style={{ fontSize: "50px" }}>메인페이지</p> <br />
          팔리면 - 비싸게 팔리면 더 큰 수수료 <br /> 안 팔리면 <br /> 1.
          돌려받기 <br />
          2. 다음 시즌 존버타기 <br /> 3. 도네 <br />
          4. 절반값 받기
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <span>
          <br />
          플리 마켓은 50벌이 접수되면 오픈 확정됩니다.
          <br />
          <br />
        </span>
      </div>
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          width: "50%",
        }}
      >
        <Progress percent={50} status="active" />
      </div>
      <span>
        <br />
      </span>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/register">
          <Button>등록 시작하기(회원가입)</Button>
        </Link>
        <Link to="/login">
          <Button>이미 등록하셨습니까?(로그인)</Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
