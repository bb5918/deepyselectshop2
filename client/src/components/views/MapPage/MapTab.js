import React, { useState } from "react";
import AreaPage1 from "./AreaPage/AreaPage1";
import AreaPage2 from "./AreaPage/AreaPage2";
import AreaPage3 from "./AreaPage/AreaPage3";
import AreaPage4 from "./AreaPage/AreaPage4";
import AreaPage5 from "./AreaPage/AreaPage5";
import styled from "styled-components";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabContainer = styled.div`
  .react-tabs__tab-list {
    border-bottom: 0;
    margin: 0;
    font-family: "Black Han Sans";
    box-shadow: 0;
  }
  .react-tabs__tab {
    width: 20%;
    border: 2px solid;
    border-bottom: none;
    background: #d6d6d6;
    border-radius: 10px 10px 0 0;
    border-color: #5014a5;
    margin: 0;
  }
  .react-tabs__tab--selected {
    background: #f7f6ee;
    color: #5c5959;
    border-radius: 10px 10px 0 0;
    font-family: "Black Han Sans";
    border-color: #5014a5;
    margin: 0;
  }
  .react-tabs__tab-panel--selected {
    border-width: 5px;
    border-style: solid;
    border-radius: 5px 5px 10px 10px;
    border-color: #f7f6ee;
    box-shadow: 0px 0px 10px #d6d6d6;
  }
`;

function MapTab() {
  return (
    <TabContainer>
      <Tabs>
        <TabList>
          <Tab>
            <div className="select">
              <div>
                <p
                  style={{
                    fontSize: "2vw",
                    fontWeight: "100",
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  홍대/합정
                </p>
              </div>
            </div>
          </Tab>
          <Tab>
            <div className="select">
              <div>
                <p
                  style={{
                    fontSize: "2vw",
                    fontWeight: "100",
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  가로수길
                </p>
              </div>
            </div>
          </Tab>
          <Tab>
            <div className="select">
              <div>
                <p
                  style={{
                    fontSize: "2vw",
                    fontWeight: "100",
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  이태원
                </p>
              </div>
            </div>
          </Tab>
          <Tab>
            <div className="select">
              <div>
                <p
                  style={{
                    fontSize: "2vw",
                    fontWeight: "100",
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  동묘/종로
                </p>
              </div>
            </div>
          </Tab>
          <Tab>
            <div className="select">
              <div>
                <p
                  style={{
                    fontSize: "2vw",
                    fontWeight: "100",
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  기타
                </p>
              </div>
            </div>
          </Tab>
        </TabList>

        <TabPanel>
          <AreaPage1 />
        </TabPanel>
        <TabPanel>
          <AreaPage2 />
        </TabPanel>
        <TabPanel>
          <AreaPage3 />
        </TabPanel>
        <TabPanel>
          <AreaPage4 />
        </TabPanel>
        <TabPanel>
          <AreaPage5 />
        </TabPanel>
      </Tabs>
    </TabContainer>
  );
}

export default MapTab;
