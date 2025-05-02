
"use client";
import React from "react";
import CustomTable from "@/components/Tables/CustomTable";
import { Row, Col, Card, CardBody } from "reactstrap";
import Image from "next/image";
import Link from "next/link";


// Import Components
import MyChart from "@/components/MyChart/MyChart"
export default function Dashboard() {
  // Top Boxes Items
  const TopItems = [
    {
      icon: "/itam/images/box_plus.png",
      name: "Assets",
      count: 643,
      link: "/assets"
    },
    {
      icon: "/itam/images/licence2.png",
      name: "Licenses",
      count: '1.7K',
      link: "/licenses"
    },
    {
      icon: "/itam/images/camera.png",
      name: "Accessories",
      count: 450,
      link: "/"
    },
    {
      icon: "/itam/images/Drop.png",
      name: "Consumables",
      count: 327,
      link: "/"
    },
    {
      icon: "/itam/images/Stop-Square.png",
      name: "Users",
      count: 700,
      link: '/users'
    },
  ];

   // ALL Recent Activity Head Data
   const thead = [
    {
      key: "details",
      label: "Details",
    },
    {
      key: "activity",
      label: "Activity",
    },
  ];

  // All Recent Activity Data
  const tbody = [
    {
      details: (
        <div className="image_Box">
          <div>
            <p className="white big m-0 p-0">Mac Book 13” SNV-090324</p>
            <p className="small m-0 p-0 underline">Username: Dianne Russell</p>
          </div>
        </div>
      ),
      activity: (
        <div className="">
        <p className="light big m-0 p-0">Checked out</p>
        <p className="light small m-0 p-0">Date: 18/10/2024 <span className="ms-2" >(08:30 am)</span> </p>
      </div>
      ),
    },
    {
      details: (
        <div className="image_Box">
          <div>
            <p className="white big m-0 p-0">Mac Book 13” SNV-090324</p>
            <p className="small m-0 p-0 underline">Username: Dianne Russell</p>
          </div>
        </div>
      ),
      activity: (
        <div className="">
        <p className="light big m-0 p-0">Checked out</p>
        <p className="light small m-0 p-0">Date: 18/10/2024 <span className="ms-2" >(08:30 am)</span> </p>
      </div>
      ),
    },
  ];
   // ALL Tickets Table Head Data
   const tickets_thead = [
    {
      key: "details",
      label: "Details",
    },
    {
      key: "activity",
      label: "Activity",
    },
  ];

  // All Tickets Body Data
  const tickets_tbody = [
    {
      details: (
        <div className="image_Box">
          <div>
            <p className="white big m-0 p-0">Mac Book 13” SNV-090324</p>
            <p className="small m-0 p-0 underline">Username: Dianne Russell</p>
          </div>
        </div>
      ),
      activity: (
        <div className="">
        <p className="light big m-0 p-0">Checked out</p>
        <p className="light small m-0 p-0">Date: 18/10/2024 <span className="ms-2" >(08:30 am)</span> </p>
      </div>
      ),
    },
    {
      details: (
        <div className="image_Box">
          <div>
            <p className="white big m-0 p-0">Mac Book 13” SNV-090324</p>
            <p className="small m-0 p-0 underline">Username: Dianne Russell</p>
          </div>
        </div>
      ),
      activity: (
        <div className="">
        <p className="light big m-0 p-0">Checked out</p>
        <p className="light small m-0 p-0">Date: 18/10/2024 <span className="ms-2" >(08:30 am)</span> </p>
      </div>
      ),
    },
  ];

  return (
    <>
      {/* Dashboard Top Card Section Start */}
      <div className="top_cards">
        <Row>
          {TopItems.map((TopItems, index) => (
            <Col  key={index}>
              <Card>
                <CardBody>
                  <div className="boxes d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-3 align-items-center" >
                      <div className="icon">
                        <Image
                          width={20}
                          height={20}
                          src={TopItems.icon}
                          alt=""
                        />
                        <Image className="icon_abs_img"
                          width={20}
                          height={20}
                          src="/itam/images/smaller_ellipse.png"
                          alt=""
                        />

                      </div>
                      <div className="content_text">
                        <p className="name mb-0 pb-0">{TopItems.name}</p>
                        <h4 className="count mb-0 pb-0">{TopItems.count}</h4>
                      </div>
                    </div>
                    <Link href={TopItems.link} passHref className="link_icon">
                      <svg width="15px" height="15px" viewBox="0 0 1024 1024"   version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#fff" /></svg>
                    </Link>
                    <Image alt="" className="right_bottom" loading="lazy"width={20} height={20} src="/itam/images/Ellipse.png" />
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      {/* Dashboard Top Card Section End */}

      {/* Dashboard Chart Section Start */}
      <MyChart/>
      {/* Dashboard Chart Section End */}

      {/* Dasboard Board Table Section Start */}
      <div className="custom_table mt-3 d-none">
        <Card>
          <CardBody>
            <Row>
              <Col md="12">
                <div className="table_head d-flex align-items-center justify-content-between">
                  <div className="f_col">
                    <h3 className="heading">All Tickets</h3>
                  </div>
                  <div className="filter">
                    <select name="" id="">
                      <option value="">All Type</option>
                      <option value="">Active</option>
                      <option value="">Unactive</option>
                    </select>
                    <select name="" id="">
                      <option value="">Status</option>
                      <option value="">Active</option>
                      <option value="">Unactive</option>
                    </select>
                    <div className="search_table">
                      <span className="search_icon">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                            stroke=""
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <input
                        type=""
                        placeholder="Search"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="table_body">
                  <CustomTable theadName={thead} BoydData={tbody} />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
      {/* Dasboard Board Table Section End */}

      {/* Bottom Table Section Start */}
      <div className="custom_table mt-3">
        <Row>
          <Col md="6" >
          <Card>
            <CardBody>
            <div className="table_head d-flex align-items-center justify-content-between">
                  <div className="f_col">
                    <h3 className="heading">Recent Activities</h3>
                  </div>
                </div>
              <div className="table_body">
                  <CustomTable theadName={thead} BoydData={tbody} />
              </div>
            </CardBody>
          </Card>
          </Col>
          <Col md="6" >
          <Card>
            <CardBody>
            <div className="table_head d-flex align-items-center justify-content-between">
                  <div className="f_col">
                    <h3 className="heading">Tickets</h3>
                  </div>
                  <Link href="/">See All</Link>
                </div>  
              <div className="table_body">
                  <CustomTable theadName={tickets_thead} BoydData={tickets_tbody} />
              </div>
            </CardBody>
          </Card>
          </Col>
        </Row>
      </div>
      {/* Bottom Table Section End */}


    </>
  );
}
