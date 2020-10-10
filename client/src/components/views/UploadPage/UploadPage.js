import React, { useState } from "react";
import { Typography, Button, Form, message, Input, Icon } from "antd";
import Axios from "axios";
import DaumPostcode from "react-daum-postcode";

const { Title } = Typography;
const { TextArea } = Input;

function UploadPage(props) {
  const [NameValue, setNameValue] = useState("");
  const [PhoneValue, setPhoneValue] = useState("");
  const [LocationValue, setLocationValue] = useState("");

  const onNameChange = (event) => {
    setNameValue(event.currentTarget.value);
  };
  const onPhoneChange = (event) => {
    setPhoneValue(event.currentTarget.value);
  };
  const onLocationChange = (event) => {
    setLocationValue(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const variables = {
      name: NameValue,
      phone: PhoneValue,
      location: LocationValue,
    };

    Axios.post("/api/shop/upload", variables).then((response) => {
      if (response.data.success) {
        alert("업로드 성공");
        props.history.push("/");
      } else {
        alert("업로드 실패");
      }
    });
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        paddingTop: "30px",
        paddingBottom: "50px",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}> 제품 업로드 </Title>
      </div>
      <Form onSubmit={onSubmit}>
        <label>이름</label>
        <Input onChange={onNameChange} value={NameValue} />
        <br />
        <label>전화번호</label>
        <Input onChange={onPhoneChange} value={PhoneValue} />
        <br />
        <label>주소</label>
        <Input onChange={onLocationChange} value={LocationValue} />
        <br />

        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button onClick={onSubmit}>제출하기</Button>
        </div>
      </Form>
    </div>
  );
}

export default UploadPage;
