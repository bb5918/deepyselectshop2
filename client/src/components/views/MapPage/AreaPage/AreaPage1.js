import React, { useEffect } from "react";
import data1 from "../data/data1";
import data2 from "../data/data2";
import data3 from "../data/data3";
import data4 from "../data/data4";
import data5 from "../data/data5";

function Area1Page() {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(37.533774, 126.993969),
      level: 9
    };

    let map = new window.kakao.maps.Map(container, options);
  }, []);
  return (
    <>
      <div
        id="map"
        style={{
          width: "100%",
          height: "400px"
        }}
      />
    </>
  );
}

export default Area1Page;
