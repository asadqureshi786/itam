 "use client"
import {Nav,NavItem,NavLink,TabContent,TabPane, Card, CardBody, } from 'reactstrap';
import { useState } from "react";

import classnames from 'classnames';

// Import Tabs Content
import All_Request from "@/components/Procurement/All_Request"
import All_Orders from "@/components/Procurement/All_Orders"
import Maintenance from "@/components/Procurement/Maintenance"
import Warranty from "@/components/Procurement/Warranty"


export default function Procurement(){
      
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
    return(
        <>
      
        <div className="procurementView">
          <div className="tab_heads mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}>
                   Requested
              </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}>
                  Ordered
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: activeTab === '3' })} onClick={() => { toggle('3'); }}>
                  Maintenance
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
              className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
                >
                  Warranty
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <Card>
            <CardBody>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1"> <All_Request/> </TabPane>
                <TabPane tabId="2"> <All_Orders/> </TabPane>
                <TabPane tabId="3"> <Maintenance/> </TabPane>
                <TabPane tabId="4" > <Warranty/> </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </div>
     
    </>
    )
}