"use client";
import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Card,
  CardBody,
} from "reactstrap";
import classnames from "classnames";


// Import Components
import ProfileSetting from "@/components/Settings/ProfileSetting"
import CompanySettings from "@/components/Settings/CompanySettings"
import Suppliers from "@/components/Settings/suppliers";
import Manufacturers from "@/components/Settings/Manufacturers"
import BillingHistory from "@/components/Settings/BillingHistory"
import CustomFields from "@/components/Settings/CustomFields"
import AdditionalFields from "@/components/Settings/AdditionalFields"
import SecuritySettings from "@/components/Settings/SecuritySettings"
import LD_ADP from "@/components/Settings/LD_ADP"

import "../../css/setting.scss";


export default function Settings() {
  // Show Tab
  const [activeTab, setActiveTab] = useState("9");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <div className="setting_page_section">
        <Card className="p-0">
          <CardBody className="p-0">
            <div className="setting_divide">
              <div className="tab_section">
                <nav>
                  <Nav tabs>
                    <NavLink
                      className={classnames({ active: activeTab === "1" })}
                      onClick={() => {
                        toggle("1");
                      }}
                    >
                      <svg
                        width=""
                        height=""
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="6"
                          r="4"
                          stroke="#1C274C"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                          stroke="#1C274C"
                          strokeWidth="1.5"
                        />
                      </svg>
                      Profile Settings
                    </NavLink>
                    <NavLink
                      className={classnames({ active: activeTab === "2" })}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      <svg
                      width=""
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                          stroke="#1C274C"
                          strokeWidth="1.5"
                        />
                      </svg>
                      Company Settings
                    </NavLink>
                    <NavLink
                      className={classnames({ active: activeTab === "3" })}
                      onClick={() => {
                        toggle("3");
                      }}
                    >
                      <svg
                      width=""
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z"
                          stroke="#1C274C"
                          strokeWidth="1.5"
                        />
                        <circle
                          cx="12"
                          cy="16"
                          r="2"
                          stroke="#1C274C"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M6 10V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V10"
                          stroke="#1C274C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      Security Settings
                    </NavLink>
                    <NavLink
                      className={classnames({ active: activeTab === "4" })}
                      onClick={() => {
                        toggle("4");
                      }}
                    >
                      <svg
                      width=""
                        fill="#fff"
                        viewBox="0 0 32 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>shopping-cart</title>
                        <path d="M26.834 24.918c-1.402 0.002-2.573 0.993-2.852 2.313l-0.003 0.019h-15.922c-0.161-0.767-0.603-1.409-1.21-1.829l-0.010-0.006 0.734-2.665h20.39c0 0 0.001 0 0.001 0 0.376 0 0.687-0.277 0.741-0.639l0-0.004 2.039-14c0.005-0.033 0.008-0.070 0.008-0.109 0-0.394-0.304-0.717-0.691-0.747l-0.003-0-25.307-1.946v-1.305c0-0 0-0 0-0 0-0.207-0.084-0.395-0.22-0.53l-2-2c-0.135-0.131-0.32-0.212-0.523-0.212-0.414 0-0.75 0.336-0.75 0.75 0 0.203 0.081 0.388 0.213 0.523l1.78 1.78v1.689c0.004 0.030 0.010 0.056 0.017 0.081l-0.001-0.005c0.002 0.021-0.007 0.041-0.003 0.062l2.968 15.83-0.813 2.955c-0.078-0.006-0.154-0.024-0.234-0.024-0.005-0-0.010-0-0.016-0-1.62 0-2.934 1.313-2.934 2.934s1.313 2.934 2.934 2.934c1.297 0 2.397-0.842 2.785-2.009l0.006-0.021c0.020 0.002 0.037 0.012 0.058 0.012h15.983c0.030-0.004 0.056-0.010 0.082-0.017l-0.005 0.001c0.393 1.172 1.482 2.002 2.764 2.002 1.607 0 2.909-1.302 2.909-2.909s-1.302-2.909-2.909-2.909c-0.002 0-0.005 0-0.007 0h0zM4.917 6.822l24.226 1.863-1.83 12.564h-19.691zM5.184 29.268c-0 0-0.001 0-0.001 0-0.792 0-1.434-0.642-1.434-1.434s0.642-1.434 1.434-1.434c0.792 0 1.434 0.642 1.434 1.434v0c-0.001 0.791-0.642 1.432-1.432 1.434h-0zM26.834 29.248c-0.781-0.001-1.414-0.634-1.414-1.415s0.634-1.415 1.415-1.415 1.415 0.634 1.415 1.415c0 0 0 0.001 0 0.001v-0c-0.001 0.781-0.635 1.414-1.416 1.414v0z"></path>
                      </svg>
                      Suppliers
                    </NavLink>
                    <NavLink
                      className={classnames({ active: activeTab === "5" })}
                      onClick={() => {
                        toggle("5");
                      }}
                    >
                      <svg
                      width=""
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth="3"
                        stroke="#"
                        fill="none"
                      >
                        <path d="M41.71,10.58H28l-7.4,22.28a.1.1,0,0,0,.09.13h8.49a.1.1,0,0,1,.1.13L22.71,52.76a.5.5,0,0,0,.88.45L43.41,26a.1.1,0,0,0-.08-.16H34.42a.11.11,0,0,1-.09-.15l7.47-15A.1.1,0,0,0,41.71,10.58Z" />
                      </svg>
                      Manufacturers
                    </NavLink>
                    <NavLink
                      className={classnames({ active: activeTab === "6" })}
                      onClick={() => {
                        toggle("6");
                      }}
                    >
                      <svg
                        width="800px"
                        height="800px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.625 21.0002C18.2666 20.4299 19.2334 20.4299 19.875 21.0002C20.3109 21.3876 21 21.0782 21 20.495V3.50519C21 2.92196 20.3109 2.61251 19.875 2.99999C19.2334 3.57029 18.2666 3.57029 17.625 2.99999C16.9834 2.42969 16.0166 2.42969 15.375 2.99999C14.7334 3.57029 13.7666 3.57029 13.125 2.99999C12.4834 2.42969 11.5166 2.42969 10.875 2.99999C10.2334 3.57029 9.26659 3.57029 8.625 2.99999C7.98341 2.42969 7.01659 2.42969 6.375 2.99999C5.73341 3.57029 4.76659 3.57029 4.125 2.99999C3.68909 2.61251 3 2.92196 3 3.50519V20.495C3 21.0782 3.68909 21.3876 4.125 21.0002C4.76659 20.4299 5.73341 20.4299 6.375 21.0002C7.01659 21.5705 7.98341 21.5705 8.625 21.0002C9.26659 20.4299 10.2334 20.4299 10.875 21.0002C11.5166 21.5705 12.4834 21.5705 13.125 21.0002C13.7666 20.4299 14.7334 20.4299 15.375 21.0002C16.0166 21.5705 16.9834 21.5705 17.625 21.0002Z"
                          stroke="#1C274C"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M7.5 15.5H16.5"
                          stroke="#1C274C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M7.5 12H16.5"
                          stroke="#1C274C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M7.5 8.5H16.5"
                          stroke="#1C274C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      Billing History
                    </NavLink>
                    <NavLink
                      className={classnames({ active: activeTab === "9" })}
                      onClick={() => {
                        toggle("9");
                      }}
                    >
                      
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 11V15.8C21 16.9201 21 17.4802 20.782 17.908C20.5903 18.2843 20.2843 18.5903 19.908 18.782C19.4802 19 18.9201 19 17.8 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H15M21 11L15 5M21 11H16.6C16.0399 11 15.7599 11 15.546 10.891C15.3578 10.7951 15.2049 10.6422 15.109 10.454C15 10.2401 15 9.96005 15 9.4V5" stroke="#8897AE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                      LD/ADP
                    </NavLink>
                    <NavLink
                      className={classnames({ active: activeTab === "7" })}
                      onClick={() => {
                        toggle("7");
                      }}
                    >
                      <svg
                      width=""
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 6H20M4 12H14M4 18H9"
                          stroke="#"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Custom Fields
                    </NavLink>
                    <NavLink
                      className={classnames({ active: activeTab === "8" })}
                      onClick={() => {
                        toggle("8");
                      }}
                    >
                      <svg
                        width="800px"
                        height="800px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3 4.281v16.437A1.282 1.282 0 0 0 4.281 22h16.437A1.282 1.282 0 0 0 22 20.718V4.281A1.281 1.281 0 0 0 20.719 3H4.28A1.281 1.281 0 0 0 3 4.281zM20.719 4a.281.281 0 0 1 .281.281V20.72a.281.281 0 0 1-.281.281H4.28a.281.281 0 0 1-.28-.282V4.28A.281.281 0 0 1 4.281 4zM12 13H7v-1h5V7h1v5h5v1h-5v5h-1z" />
                        <path fill="none" d="M0 0h24v24H0z" />
                      </svg>
                      Additional Fields
                    </NavLink>
                  </Nav>
                </nav>
              </div>
              <div className="custom_form">
                <TabContent activeTab={activeTab}>
                  {/* Profile Settings */}
                  <TabPane tabId="1">
                    <ProfileSetting />
                  </TabPane>
                  {/* Company Settings */}
                  <TabPane tabId="2">
                    <CompanySettings />
                  </TabPane>
                  {/* Security Settings */}
                  <TabPane tabId="3" className="security_settings">
                    <SecuritySettings />
                  </TabPane>
                  {/* Suppliers */}
                  <TabPane tabId="4">
                    <Suppliers />
                  </TabPane>
                  {/* Manufacturers */}
                  <TabPane tabId="5">
                    <Manufacturers />
                    </TabPane>
                  {/* BillingHistory */}
                  <TabPane tabId="6">
                    <BillingHistory />
                    </TabPane>
                  {/* CustomFields */}
                  <TabPane tabId="7">
                    <CustomFields />
                    </TabPane>
                  <TabPane tabId="8">
                    <AdditionalFields />
                    </TabPane>
                  <TabPane tabId="9">
                    <LD_ADP/>
                    </TabPane>
                </TabContent>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
