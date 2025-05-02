"use client";
import React, { Suspense, lazy } from "react";
import { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import Link from "next/link";
import Image from "next/image";

const All_Assets = lazy(() => import("@/components/Assets/All_Assets"));
const Discover = lazy(() => import("@/components/Assets/Discover"));
const Tracking = lazy(() => import("@/components/Assets/Tracking"));
export default function Assets() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      {/* Tab Head Section Start */}

      <div className="top_cards assets">
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </div>

      <div className="tab_heads top_cards assets">
        <Nav className="change_tab" tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              <Card>
                <CardBody>
                  <div className="boxes d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-3 align-items-center">
                      <div className="icon">
                        <Image
                          width={20}
                          height={20}
                          src="/itam/images/box_plus.png"
                          alt=""
                        />
                        <Image
                          className="icon_abs_img"
                          width={20}
                          height={20}
                          src="/itam/images/smaller_ellipse.png"
                          alt=""
                        />
                      </div>
                      <div className="content_text">
                        <p className="name mb-0 pb-0">Assets</p>
                        <h4 className="count mb-0 pb-0">20</h4>
                      </div>
                    </div>
                    <Link href="/assets" className="link_icon">
                      <svg
                        width="15px"
                        height="15px"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                          fill="#fff"
                        />
                      </svg>
                    </Link>
                    <Image
                      alt=""
                      className="right_bottom"
                      loading="lazy"
                      width={20}
                      height={20}
                      src="/itam/images/Ellipse.png"
                    />
                  </div>
                </CardBody>
              </Card>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              <Card>
                <CardBody>
                  <div className="boxes d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-3 align-items-center">
                      <div className="icon">
                        <Image
                          width={20}
                          height={20}
                          src="/itam/images/licence.png"
                          alt=""
                        />
                        <Image
                          className="icon_abs_img"
                          width={20}
                          height={20}
                          src="/itam/images/smaller_ellipse.png"
                          alt=""
                        />
                      </div>
                      <div className="content_text">
                        <p className="name mb-0 pb-0">Licenses</p>
                        <h4 className="count mb-0 pb-0">1.7K</h4>
                      </div>
                    </div>
                    <Link href="/assets" className="link_icon">
                      <svg
                        width="15px"
                        height="15px"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                          fill="#fff"
                        />
                      </svg>
                    </Link>
                    <Image
                      alt=""
                      className="right_bottom"
                      loading="lazy"
                      width={20}
                      height={20}
                      src="/itam/images/Ellipse.png"
                    />
                  </div>
                </CardBody>
              </Card>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              <Card>
                <CardBody>
                  <div className="boxes d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-3 align-items-center">
                      <div className="icon">
                        <Image
                          width={20}
                          height={20}
                          src="/itam/images/camera.png"
                          alt=""
                        />
                        <Image
                          className="icon_abs_img"
                          width={20}
                          height={20}
                          src="/itam/images/smaller_ellipse.png"
                          alt=""
                        />
                      </div>
                      <div className="content_text">
                        <p className="name mb-0 pb-0">Accessories</p>
                        <h4 className="count mb-0 pb-0">450</h4>
                      </div>
                    </div>
                    <Link href="/assets" className="link_icon">
                      <svg
                        width="15px"
                        height="15px"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                          fill="#fff"
                        />
                      </svg>
                    </Link>
                    <Image
                      alt=""
                      className="right_bottom"
                      loading="lazy"
                      width={20}
                      height={20}
                      src="/itam/images/Ellipse.png"
                    />
                  </div>
                </CardBody>
              </Card>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "4" })}
              onClick={() => {
                toggle("4");
              }}
            >
              <Card>
                <CardBody>
                  <div className="boxes d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-3 align-items-center">
                      <div className="icon">
                        <Image
                          width={20}
                          height={20}
                          src="/itam/images/drop.png"
                          alt=""
                        />
                        <Image
                          className="icon_abs_img"
                          width={20}
                          height={20}
                          src="/itam/images/smaller_ellipse.png"
                          alt=""
                        />
                      </div>
                      <div className="content_text">
                        <p className="name mb-0 pb-0">Consumables</p>
                        <h4 className="count mb-0 pb-0">327</h4>
                      </div>
                    </div>
                    <Link href="/assets" className="link_icon">
                      <svg
                        width="15px"
                        height="15px"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                          fill="#fff"
                        />
                      </svg>
                    </Link>
                    <Image
                      alt=""
                      className="right_bottom"
                      loading="lazy"
                      width={20}
                      height={20}
                      src="/itam/images/Ellipse.png"
                    />
                  </div>
                </CardBody>
              </Card>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "5" })}
              onClick={() => {
                toggle("5");
              }}
            >
              <Card>
                <CardBody>
                  <div className="boxes d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-3 align-items-center">
                      <div className="icon">
                        <Image
                          width={20}
                          height={20}
                          src="/itam/images/Stop-Square.png"
                          alt=""
                        />
                        <Image
                          className="icon_abs_img"
                          width={20}
                          height={20}
                          src="/itam/images/smaller_ellipse.png"
                          alt=""
                        />
                      </div>
                      <div className="content_text">
                        <p className="name mb-0 pb-0">Components</p>
                        <h4 className="count mb-0 pb-0">700</h4>
                      </div>
                    </div>
                    <Link href="/assets" className="link_icon">
                      <svg
                        width="15px"
                        height="15px"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                          fill="#fff"
                        />
                      </svg>
                    </Link>
                    <Image
                      alt=""
                      className="right_bottom"
                      loading="lazy"
                      width={20}
                      height={20}
                      src="/itam/images/Ellipse.png"
                    />
                  </div>
                </CardBody>
              </Card>
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      {/* Tab Head Section End */}
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Suspense fallback={""}>
            <All_Assets />
          </Suspense>
        </TabPane>
        <TabPane tabId="2">
          <Suspense fallback={""}>
            <Discover />
          </Suspense>
        </TabPane>
        <TabPane tabId="3">
          <Suspense fallback={""}>
          <All_Assets />
            {/* <Tracking /> */}
          </Suspense>
        </TabPane>
        <TabPane tabId="4">
          <Suspense fallback={""}>
          <All_Assets />
          </Suspense>
        </TabPane>
        <TabPane tabId="5">
          <Suspense fallback={""}>
          <All_Assets />
          </Suspense>
        </TabPane>
      </TabContent>
    </>
  );
}
