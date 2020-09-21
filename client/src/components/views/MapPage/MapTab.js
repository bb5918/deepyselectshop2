import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import AreaPage1 from "./AreaPage/AreaPage1";

function MapTab() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>
            <div>
              <p
                style={{
                  fontSize: "2vw",
                  fontWeight: "100",
                  textAlign: "center",
                  margin: 0
                }}
              >
                홍대 / 합정
              </p>
            </div>
          </Tab>
          <Tab>
            <div>
              <p
                style={{
                  fontSize: "2vw",
                  fontWeight: "100",
                  textAlign: "center",
                  margin: 0
                }}
              >
                가로수길
              </p>
            </div>
          </Tab>
          <Tab>
            <div>
              <p
                style={{
                  fontSize: "2vw",
                  fontWeight: "100",
                  textAlign: "center",
                  margin: 0
                }}
              >
                이태원
              </p>
            </div>
          </Tab>
          <Tab>
            <div>
              <p
                style={{
                  fontSize: "2vw",
                  fontWeight: "100",
                  textAlign: "center",
                  margin: 0
                }}
              >
                동묘 / 종로
              </p>
            </div>
          </Tab>
          <Tab>
            <div>
              <p
                style={{
                  fontSize: "2vw",
                  fontWeight: "100",
                  textAlign: "center",
                  margin: 0
                }}
              >
                기타
              </p>
            </div>
          </Tab>
        </TabList>
        <TabPanel>
          <AreaPage1 />
        </TabPanel>
        <TabPanel>
          <h2> Any content 2 </h2>
        </TabPanel>
        <TabPanel>
          <h2> Any content 2 </h2>
        </TabPanel>
        <TabPanel>
          <h2> Any content 2 </h2>
        </TabPanel>
        <TabPanel>
          <h2> Any content 2 </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default MapTab;
