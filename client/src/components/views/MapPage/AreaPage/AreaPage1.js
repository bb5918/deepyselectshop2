import React, { useEffect } from "react";
import data1 from "../data/data1";
import data2 from '../data/data2';
import data3 from '../data/data3';
import data4 from '../data/data4';
import data5 from '../data/data5';

function AreaPage1() {
  useEffect(() => {

  
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(37.555597, 126.92481),
      level: 9,
    };

    let map = new window.kakao.maps.Map(container, options);

    
    var imageSrc = require("../Image/marker_group1-1.png");
    var imageSrc2 = require("../Image/marker_group1-2.png");
    var imageSrc3 = require("../Image/marker_group1-3.png");
    var imageSrc4 = require("../Image/marker_group1-4.png");
    var imageSrc5 = require("../Image/marker_group1-5.png");
    var imageSize = new window.kakao.maps.Size(30, 40);

    var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);
    var markerImage2 = new window.kakao.maps.MarkerImage(imageSrc2,imageSize);
    var markerImage3 = new window.kakao.maps.MarkerImage(imageSrc3,imageSize);
    var markerImage4 = new window.kakao.maps.MarkerImage(imageSrc4,imageSize);
    var markerImage5 = new window.kakao.maps.MarkerImage(imageSrc5,imageSize);

    var markerList = [];
    var overlayList = [];

    data1.forEach((item) => {
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(item.lat, item.lng),
        image: markerImage,
      });

      var content = `    
      <div style="position:relative;width:200px;height:100px;padding:15px 10px; display:flex; background-color: #F8A340">
      <img src="https://www.panelplus.co.th/uploads/collection/75266-white-mk630.jpg" width="70" height="70"/>


      <ul style="padding-left: 10px"> 
      <li style="list-style: none"> 
          <span>${item.name}</span>
      </li> 
      <li style="list-style: none"> 
          <span>${item.content}</span>
      </li> 
      <li style="list-style: none"> 
          <span>"셀렉샵 한줄평"</span>
      </li> 
      </ul> 
      </div>
      `;

      const overlay = new window.kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: new window.kakao.maps.LatLng(item.lat, item.lng),

        yAnchor: 1.7,
      });
      overlay.setMap(null);

      markerList.push(marker);
      overlayList.push(overlay);
    });
    data2.forEach((item) => {
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(item.lat, item.lng),
        image: markerImage2,
      });

      var content = `    
      <div style="position:relative;width:200px;height:100px;padding:15px 10px; display:flex; background-color: #FF4A65">
      <img src="https://www.panelplus.co.th/uploads/collection/75266-white-mk630.jpg" width="70" height="70"/>


      <ul style="padding-left: 10px"> 
      <li style="list-style: none"> 
          <span>${item.name}</span>
      </li> 
      <li style="list-style: none"> 
          <span>${item.content}</span>
      </li> 
      <li style="list-style: none"> 
          <span>"셀렉샵 한줄평"</span>
      </li> 
      </ul> 
      </div>
      `;

      const overlay = new window.kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: new window.kakao.maps.LatLng(item.lat, item.lng),

        yAnchor: 1.7,
      });
      overlay.setMap(null);

      markerList.push(marker);
      overlayList.push(overlay);
    });
    data3.forEach((item) => {
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(item.lat, item.lng),
        image: markerImage3,
      });

      var content = `    
      <div style="position:relative;width:200px;height:100px;padding:15px 10px; display:flex; background-color: #AB2FFB">
      <img src="https://www.panelplus.co.th/uploads/collection/75266-white-mk630.jpg" width="70" height="70"/>


      <ul style="padding-left: 10px"> 
      <li style="list-style: none"> 
          <span>${item.name}</span>
      </li> 
      <li style="list-style: none"> 
          <span>${item.content}</span>
      </li> 
      <li style="list-style: none"> 
          <span>"셀렉샵 한줄평"</span>
      </li> 
      </ul> 
      </div>
      `;

      const overlay = new window.kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: new window.kakao.maps.LatLng(item.lat, item.lng),

        yAnchor: 1.7,
      });
      overlay.setMap(null);

      markerList.push(marker);
      overlayList.push(overlay);
    });
    data4.forEach((item) => {
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(item.lat, item.lng),
        image: markerImage4,
      });

      var content = `    
      <div style="position:relative;width:200px;height:100px;padding:15px 10px; display:flex; background-color: #3B02B9">
      <img src="https://www.panelplus.co.th/uploads/collection/75266-white-mk630.jpg" width="70" height="70"/>


      <ul style="padding-left: 10px"> 
      <li style="list-style: none"> 
          <span>${item.name}</span>
      </li> 
      <li style="list-style: none"> 
          <span>${item.content}</span>
      </li> 
      <li style="list-style: none"> 
          <span>"셀렉샵 한줄평"</span>
      </li> 
      </ul> 
      </div>
      `;

      const overlay = new window.kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: new window.kakao.maps.LatLng(item.lat, item.lng),

        yAnchor: 1.7,
      });
      overlay.setMap(null);

      markerList.push(marker);
      overlayList.push(overlay);
    });
    data5.forEach((item) => {
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(item.lat, item.lng),
        image: markerImage5,
      });

      var content = `    
      <div style="position:relative;width:200px;height:100px;padding:15px 10px; display:flex; background-color: #374754">
      <img src="https://www.panelplus.co.th/uploads/collection/75266-white-mk630.jpg" width="70" height="70"/>


      <ul style="padding-left: 10px"> 
      <li style="list-style: none"> 
          <span>${item.name}</span>
      </li> 
      <li style="list-style: none"> 
          <span>${item.content}</span>
      </li> 
      <li style="list-style: none"> 
          <span>"셀렉샵 한줄평"</span>
      </li> 
      </ul> 
      </div>
      `;

      const overlay = new window.kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: new window.kakao.maps.LatLng(item.lat, item.lng),

        yAnchor: 1.7,
      });
      overlay.setMap(null);

      markerList.push(marker);
      overlayList.push(overlay);
    });

    for (var i = 0, ii = markerList.length; i < ii; i++) {
      window.kakao.maps.event.addListener(map, "click", ClickMap(i));
      window.kakao.maps.event.addListener(
        markerList[i],
        "click",
        getClickHandler(i)
      );
    }

    function ClickMap(i) {
      return function () {
        var overlay = overlayList[i];
        overlay.setMap(null);
      };
    }

    function getClickHandler(i) {
      return function () {
        var marker = markerList[i];
        var overlay = overlayList[i];
        if (overlay.getMap()) {
          overlay.setMap(null);
        } else {
          overlay.setMap(map);
        }
      };
    }
  }, []);
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "160px",
          left: "12%",
          backgroundColor: "white",
          width: 70,
          height: 300,
          zIndex: 2,
          borderRadius: "30px",
        }}
      >
        <div
          style={{
            height: "40px",
            width: "40px",
            backgroundColor: "#FD9C43",
            borderRadius: "50%",
            marginLeft: "15px",
            marginRight: "15px",
            marginTop: "40px",
          }}
        ></div>
        <div
          style={{
            height: "40px",
            width: "40px",
            backgroundColor: "#1F9471",
            borderRadius: "50%",
            marginLeft: "15px",
            marginRight: "15px",
            marginTop: "7px",
          }}
        ></div>
        <div
          style={{
            height: "40px",
            width: "40px",
            backgroundColor: "#3F4CCC",
            borderRadius: "50%",
            marginLeft: "15px",
            marginRight: "15px",
            marginTop: "7px",
          }}
        ></div>
        <div
          style={{
            height: "40px",
            width: "40px",
            backgroundColor: "#FF2C4D",
            borderRadius: "50%",
            marginLeft: "15px",
            marginRight: "15px",
            marginTop: "7px",
          }}
        ></div>
        <div
          style={{
            height: "40px",
            width: "40px",
            backgroundColor: "#8D13F4",
            borderRadius: "50%",
            marginLeft: "15px",
            marginRight: "15px",
            marginTop: "7px",
          }}
        ></div>
      </div>

      <div style={{ position: "relative" }}>
        <div className="maptabs">
          <div id="map" style={{ width: "100%", height: "400px" }} />
        </div>
      </div>
    </>
  );
}

export default AreaPage1;
