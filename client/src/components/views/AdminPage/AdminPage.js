import React,{useEffect,useState} from "react";
import Axios from 'axios'
import { NavLink, Link } from "react-router-dom";

import {Icon, Card, Button, Table} from 'antd'
import CheckBox from './Sections/CheckBox'
import SearchFeature from './Sections/SearchFeature'
import {styles,areas} from './Sections/Datas'

const columns = [
  {
    title: '이름',
    dataIndex: 'name',
  },
  {
    title: '지역',
    dataIndex: 'area',
  },
  {
    title: '스타일',
    dataIndex: 'style',
  },
  {
    title: '인스타그램 링크',
    dataIndex: 'instalink',
  },
  {
    title: '네이버 지도 링크',
    dataIndex: 'naverlink',
  },
  {
    title: '위도',
    dataIndex: 'lat',
  },
  {
    title: '경도',
    dataIndex: 'lng',
  },
  {
    title: '비고',
    dataIndex: 'description',
  },

];

function AdminPage() {
  const [Shops, setShops] = useState([])
  const [SearchTerms, setSearchTerms] = useState("")
  const [Filters, setFilters] = useState({
    area:[],
    style:[]
  })
  useEffect(()=>{
    getShops()
  },[])
  const getShops = (variables) => {
    Axios.post('/api/shop/getShops',variables)
    .then(response=>{
      if(response.data.success){
        setShops(response.data.shops)
      }
      else{
        alert('데이터 로드 실패')
      }
    })
  }
  console.log('data:',Shops)
  const renderCards = Shops.map((shop,index)=>{
    return(
      <Card key={index}>
        {shop.name}
      </Card>
    )
  })

  const showFilteredResults = (filters) => {
    const variables = {
      filters:filters
    }
    getShops(variables)
  }
  const handleFilters = (filters,category) => {
    const newFilters = {...Filters}
    newFilters[category] = filters
    showFilteredResults(newFilters)
    setFilters(newFilters)
  }
  const updateSearchTerms = (newSearchTerm) => {
    const variables = {
      filters: Filters,
      searchTerm: newSearchTerm
    }
    setSearchTerms(newSearchTerm)
    getShops(variables)
  }



  return (
    <div>
      <div style={{backgroundColor:'white', height:'700px', padding:'20px'}}>
        <div style={{position:'absolute', right:'30px'}}>        
          <Link to="/admin/upload"><Button style={{backgroundColor:'#5014A5', color:'white'}}>샵 업로드하기</Button></Link>
        </div>

    <p>지역 필터</p>
      <CheckBox
      list={areas}
      handleFilters={filters=>handleFilters(filters,"area")}
      />
      <br/>
      <p>스타일 필터</p>
      <CheckBox
      list={styles}
      handleFilters={filters=>handleFilters(filters,"style")}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem auto' }}>


      </div>
      <Table columns={columns} dataSource={Shops} size="middle"/>


      </div>
    </div>
  );
}

export default AdminPage;
