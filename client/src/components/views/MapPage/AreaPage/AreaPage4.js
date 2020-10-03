import React, { useEffect } from "react";
import data4 from "../data/data4";

function AreaPage4() {
  useEffect(() => {
    let container = document.getElementById("map4");
    let options = {
      center: new window.kakao.maps.LatLng(37.573364, 127.017591),
      level: 5,
    };

    let map = new window.kakao.maps.Map(container, options);
    var imageSrc = require("../Image/marker-purple.png");
    var imageSize = new window.kakao.maps.Size(30, 40);

    var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);
    var markerList = [];
    var infowindowList = [];

    data4.forEach((item) => {
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(item.lat, item.lng),
        image: markerImage,
      });
      var content = `<div><a href="/">${item.name}</a></div>`;
      const infowindow = new window.kakao.maps.InfoWindow({
        content: content,
      });

      markerList.push(marker);
      infowindowList.push(infowindow);

      //   window.kakao.maps.event.addListener(
      //     marker,
      //     'click',
      //     makeOverListener(map, marker, infowindow),
      //   );
      //   window.kakao.maps.event.addListener(
      //     marker,
      //     'dragstart',
      //     makeOutListener(infowindow),
      //   );
    });

    // function makeOverListener(map, marker, infowindow) {
    //   return function () {
    //     infowindow.open(map, marker);
    //   };
    // }
    // function makeOutListener(infowindow) {
    //   return function () {
    //     infowindow.close();
    //   };
    // }
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
        var infowindow = infowindowList[i];
        infowindow.close();
      };
    }

    function getClickHandler(i) {
      return function () {
        var marker = markerList[i];
        var infowindow = infowindowList[i];
        if (infowindow.getMap()) {
          infowindow.close();
        } else {
          infowindow.open(map, marker);
        }
      };
    }
  }, []);
  return (
    <>
      <div className="Map">
        <div id="map4" style={{ width: "100%", height: "400px" }} />
      </div>
    </>
  );
}

export default AreaPage4;
