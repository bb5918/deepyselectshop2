import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const Areas = [
    {key:"홍대/합정", value:"홍대/합정"},
    {key:"가로수길", value:"가로수길"},
    {key:"이태원", value:"이태원"},
    {key:"동묘/종로", value:"동묘/종로"},
    {key:"기타", value:"기타"},

]
const Styles = [
    { key: "키치, 펑크, 고스", value: "키치, 펑크, 고스" },
    { key: "플로랄, 러블리", value: "플로랄, 러블리" },
    { key: "빈티지, 레트로", value: "빈티지, 레트로" },
    { key: "스포츠 브랜드", value: "스포츠 브랜드" },
    { key: "프리미엄, 매스티지", value: "프리미엄, 매스티지" },
  ];

function UploadShopPage(props) {
    const [NameValue, setNameValue] = useState("")
    const [LatValue, setLatValue] = useState("")
    const [LngValue, setLngValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [InstaLinkValue, setInstaLinkValue] = useState("")
    const [NaverLinkValue, setNaverLinkValue] = useState("")
    const [StyleValue, setStyleValue] = useState("키치, 펑크, 고스")
    const [AreaValue, setAreaValue] = useState("홍대/합정")


    const onNameChange = (event) => {
        setNameValue(event.currentTarget.value)
    }
    const onLatChange = (event) => {
        setLatValue(event.currentTarget.value)
    }
    const onLngChange = (event) => {
        setLngValue(event.currentTarget.value)
    }
    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }    
    const onInstaLinkChange = (event) => {
        setInstaLinkValue(event.currentTarget.value)
    }    
    const onNaverLinkChange = (event) => {
        setNaverLinkValue(event.currentTarget.value)
    }    
    const onStyleChange = (event) => {
        setStyleValue(event.currentTarget.value)
    }    
    const onAreaChange = (event) => {
        setAreaValue(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const variables = {
            name: NameValue,
            lat: LatValue,
            lng: LngValue,
            description: DescriptionValue,
            instalink: InstaLinkValue,
            naverlink: NaverLinkValue,
            style:StyleValue,
            area:AreaValue
        }

        Axios.post('/api/shop/uploadShop',variables)
        .then(response=>{
            if(response.data.success){
                alert('업로드 성공')
                props.history.push('/admin')
            }else{
                alert('업로드 실패')
            }
        })
    }
    return(
        <div style={{backgroundColor:'white', paddingTop:'30px',paddingBottom:'50px', flexDirection:'column', display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> 빈티지 샵 업로드 </Title>
            </div>
        <Form onSubmit={onSubmit}>
            <label>이름</label>
            <Input
            onChange={onNameChange}
            value={NameValue}
            />
            <br/>
            <label>위도</label>
            <Input
            onChange={onLatChange}
            value={LatValue}
            />
            <br/>           
             <label>경도</label>
            <Input
            onChange={onLngChange}
            value={LngValue}
            />
            <br/>
            <label>스타일</label>
            <br/>
            <select onChange={onStyleChange}
            value={StyleValue}>
                {Styles.map((item)=>(
                    <option key={item.key} value={item.key}>
                        {item.value}
                    </option>
                ))}
            </select>
            <br/>
            <label>지역</label>
            <br/>
            <select onChange={onAreaChange}
            value={AreaValue}>
                {Areas.map((item)=>(
                    <option key={item.key} value={item.key}>
                        {item.value}
                    </option>
                ))}

            </select>
            <br/>
            <label>인스타그램 링크</label>
            <Input
            onChange={onInstaLinkChange}
            value={InstaLinkValue}
            />
            <br/>
            <label>네이버 지도 링크</label>
            <Input
            onChange={onNaverLinkChange}
            value={NaverLinkValue}
            />
            <br/>

            <label>비고</label>
            <Input
            onChange={onDescriptionChange}
            value={DescriptionValue}
            />
            <br/>
            <br/>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>            
                <Button
            onClick={onSubmit} style={{backgroundColor:'#5014A5', color:'white'}}>
                업로드
            </Button></div>




        </Form>
        </div>
    )


}

export default UploadShopPage
