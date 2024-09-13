"use client";
import React, { Suspense, lazy } from 'react';
import { useState} from "react";
import {Nav,NavItem,NavLink,TabContent,TabPane,} from "reactstrap";
import classnames from "classnames";


const All_Assets = lazy(() => import('@/components/Assets/All_Assets'));
const Discover = lazy(() => import('@/components/Assets/Discover'));
const Tracking = lazy(() => import('@/components/Assets/Tracking'));
export default function Assets(){

    const [activeTab, setActiveTab] = useState("1");

    const toggle = (tab) => {
      if (activeTab !== tab) setActiveTab(tab);
    };
  

    return(
        <>
               {/* Tab Head Section Start */}
      <div className="tab_heads">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Inventory
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Discover
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              Tracking
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      {/* Tab Head Section End */}
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Suspense fallback={''} >
            <All_Assets />
          </Suspense>
        </TabPane>
        <TabPane tabId="2">
        <Suspense fallback={''} >
           <Discover  />
        </Suspense>
        </TabPane>
        <TabPane tabId="3">
        <Suspense fallback={''} >
            <Tracking />
         </Suspense>
        </TabPane>
      </TabContent>
        </>
    )
}