"use client";
import Image from "next/image";
import { useState } from "react";
import CustomTable from "@/components/Tables/CustomTable";
import Select from 'react-select'

import {
  FormGroup,
  Label,
  TextArea,
  Button,
  Row,
  Col,
  Card,
  CardBody,
  Input,
} from "reactstrap";
import Offcanvas from "react-bootstrap/Offcanvas";

import ProcurementFormHead from "@/components/ProcurementFormHead/ProcurementFormHead";

import Link from "next/link";
export default function Reports() {
  // Show Request Views
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(true);
  }
  function HideRequestModal() {
    setShow(false);
  }

  // Show All In One
  const [showAllInOne,setShowAllInOne] = useState (false);
  const [showAssets,setShowAssets] = useState (false);
  const [showLicenses,setShowLicenses] = useState (false);

  const showAllInOneClick = (e)=>{
    if(e.value == 'AllInOne'){
      setShowAllInOne(true)
    }
    else{
      setShowAllInOne(false)
      setShowAssets(false)
      setShowLicenses(false)
    }
  }

  const showAssetFun = (e)=>{
    if(e.value == 'Assets'){
      setShowAssets(true)
      setShowLicenses(false)

    }
    else if(e.value == 'Licenses'){
      setShowLicenses(true)
      setShowAssets(false)
    }
    else{
      setShowAssets(false)
      setShowLicenses(false)
    }
  }
 
 

  const category = [
    { value: 'select', label: 'Select Category' },
    { value: 'AllInOne', label: 'All In One' },
    { value: 'Users', label: 'Users' },
    { value: 'Procurement', label: 'Procurement' },
    { value: 'Tickets', label: 'Tickets' },
  ];

  
  const allInOne = [
    { value: 'Assets', label: 'Assets' },
    { value: 'Licenses', label: 'Licenses' },
    { value: 'Accessories', label: 'Accessories' },
    { value: 'Consumables', label: 'Consumables' },
    { value: 'Components', label: 'Components' },
  ];


  // Assets Data Start
  const assets_user = [
    { value: 'all' , label : 'All'},
    { value: 'eion_morgan' , label : 'Eion Morgan'},
    { value: 'ian_bel' , label : 'Ian Bel'}
  ]
  
  const assets_location = [
    { value: 'all' , label : 'All'},
    { value: '7PrairieAve.' , label : '7 Prairie Ave.'},
    { value: 'londonegnland.' , label : 'London, UK.'},
  ]
 
  const assets_action = [
    { value: 'all' , label : 'All'},
    { value: 'checkin' , label : 'Check in'},
    { value: 'checkout' , label : 'Check out'},
  ]
 
  const assets_status = [
    { value: 'all' , label : 'All'},
    { value: 'Assigned' , label : 'Assigned'},
    { value: 'Available' , label : 'Available'},
  ]
 
  const assets_asset = [
    { value: 'all' , label : 'All'},
    { value: 'Macbook13”2024' , label : 'Macbook 13” 2024'},
    { value: 'Macbook13”2024' , label : 'Macbook 13” 2024'}
  ]
  // Assets Data End

  // Licenses Data Start
  const license_status = [
    { value: 'all' , label : 'All'},
    { value: 'online' , label : 'Online'},
    { value: 'offline' , label : 'Offline'}
  ]

  const license_device = [
    { value: 'all' , label : 'All'},
    { value: 'DESKTOP-0098VB' , label : 'DESKTOP-0098VB'},
  ]
  const license_assigned = [
    { value: 'all' , label : 'All'},
    { value: 'Lona John' , label : 'Lona John'},
    { value: 'Ricky Ponting' , label : 'Ricky Ponting'}
  ]
  const license_os = [
    { value: 'all' , label : 'All'},
    { value: 'win10' , label : 'Win 10'},
    { value: 'win11' , label : 'Win 11'}
  ]
  const license_ram = [
    { value: 'all' , label : 'All'},
    { value: '8gb' , label : '8gb'},
    { value: '16gb' , label : '16gb'},
    { value: '32gb' , label : '32gb'}
  ]
  const license_manufacturer = [
    { value: 'all' , label : 'All'},
    { value: 'lenovo' , label : 'Lenovo'},
  ]
  const license_model = [
    { value: 'all' , label : 'All'},
    { value: 'JSP20023R' , label : 'JSP20023R'},
  ]
  const license_cpu = [
    { value: 'all' , label : 'All'},
    { value: 'i7-Gen 12' , label : 'i7-Gen 12'},
  ]
  // Licenses Data End

  // ALL Users Table Head Data
  const thead = [
    {
      key: "added_on",
      label: "Added On",
    },
    {
      key: "user",
      label: "User",
    },
    {
      key: "location",
      label: "Location",
    },
    {
      key: "role",
      label: "Role",
    },
    {
      key: "assigned",
      label: "Assigned",
    },
    {
      key: "action",
      label: "",
    },
  ];

  // All Users Body Data
  const tbody = [
    {
      added_on: (
        <div className="">
          <p className="white big p-0 m-0">Jan 19,2022</p>
          <p className="white small p-0 m-0">3:45 pm</p>
        </div>
      ),
      user: (
        <div className="image_Box">
          <Image
            alt=""
            loading="lazy"
            width={20}
            height={20}
            src="/itam/images/user/user-01.png"
          />
          <div>
            <p className="white big m-0 p-0">Esther Howard</p>
            <p className="small light_1">jessica.hanson@example.com</p>
          </div>
        </div>
      ),
      location: (
        <div>
          <p className="m-0 p-0 big light_1">7 Prairie Ave.</p>
          <p className="m-0 p-0 big light_1">Warwick, RI 02886</p>
        </div>
      ),
      role: <div className="e_action role dynamic_col">Employee</div>,
      assigned: (
        <div className="d-flex gap-2">
          <div className="icon_number">
            <span className="table_icon">
              <Image
                alt=""
                loading="lazy"
                src={"/itam/images/box.png"}
                width={20}
                height={20}
              />
            </span>
            <span className="count">1</span>
          </div>
          <div className="icon_number">
            <span className="table_icon">
              <Image
                alt=""
                loading="lazy"
                src={"/itam/images/file.png"}
                width={20}
                height={20}
              />
            </span>
            <span className="count">1</span>
          </div>
        </div>
      ),
      action: (
        <Link href="/user_view" className="table_icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
              fill=""
            />
          </svg>
        </Link>
      ),
    },
  ];

  const [showTable,setShowTable] = useState(false)
  function showTableFun(){
    setShowTable(true)
  }
  return (
    <>
      <div className="reports_page">
        {
          showTable ?    <Card className="">
          <CardBody>
            <div className="custom_table ">
              <Row>
                <Col md="12">
                  <div className="table_head d-flex align-items-center justify-content-between">
                    <div className="f_col">
                      <h3 className="heading">Reports (Users)</h3>
                    </div>
                    <div className="filter">
                    <button class="btn btn-btn btn-primary">Download</button>
                      <select name="" id="">
                        <option value="">All Users</option>
                        <option value="">Option 1</option>
                        <option value="">Option 2</option>
                      </select>
                      <div className="search_table">
                        <span className="search_icon">
                          {/*   <svg
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
                        </svg> */}
                        </span>
                        <Input
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
            </div>
          </CardBody>
        </Card>

        : 
        <Card className="empty ">
        <CardBody>
          <div className="box">
            <Image width={20} height={20} src="/itam/images/empty.png" alt="" />
            <div className="text-center">
              <h5 className="m-0 p-0 text heading text-white">
                No Data Selected
              </h5>
              <p className="m-0 p-0 text text-white">
                Start creating custom reports
              </p>
            </div>
            <Button onClick={handleShow} className="btn full_blue btn">
              Generate Report
            </Button>
          </div>
        </CardBody>
      </Card>
        }
      
     
      </div>

      {/* Side Filter Section Start */}
      {/* View All Request  */}
      <Offcanvas show={show} className="card" placement="end">
        <div className="p-3 form_head d-flex align-items-center justify-content-between  side_canvas">
          <div className="d-flex justify-content-between align-items-center" >
          <button
            onClick={HideRequestModal}
            className="Head_Back"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
                fill="#8897AE"
              />
            </svg>
          </button>
          <div>
            <h6 className="title p-0 m-0">Filter</h6>
          </div>
          </div>
          <Button className="btn full_blue btn btn btn-secondary" onClick={showTableFun} >Apply</Button>
        </div>
        <Offcanvas.Body>
          <div className="product_details custom_form">
          <FormGroup className="form-groups">
                <Row className=" align-items-center">
                  <Col md="4">
                    <Label htmlFor="">Select Category</Label>
                  </Col>
                  <Col md="8">
                  <Select onChange={showAllInOneClick} options={category} />
                  </Col>
                </Row>
              </FormGroup>
              {
                showAllInOne ?  <FormGroup className="form-groups">
                <Row className=" align-items-center">
                  <Col md="4">
                    <Label htmlFor="">All In One</Label>
                  </Col>
                  <Col md="8">
                  <Select onChange={showAssetFun} options={allInOne} />
                  </Col>
                </Row>
              </FormGroup> : '' 
              }


              {/* Assets Fields */}
              {
                showAssets ?  <div className="assets_dropdowns">
                <FormGroup className="form-groups">
                  <Row className=" align-items-center">
                    <Col md="12">
                      <Label htmlFor="">Assets</Label>
                      <Select  options={assets_asset} />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup className="form-groups">
                  <Row className=" align-items-center">
                  <Col md="12">
                      <Label htmlFor="">User</Label>
                      <Select  options={assets_user} />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup className="form-groups">
                  <Row className=" align-items-center">
                  <Col md="12">
                      <Label htmlFor="">Location</Label>
                      <Select  options={assets_location} />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup className="form-groups">
                  <Row className=" align-items-center">
                  <Col md="12">
                      <Label htmlFor="">Action</Label>
                      <Select  options={assets_action} />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup className="form-groups">
                  <Row className=" align-items-center">
                  <Col md="12">
                      <Label htmlFor="">Status</Label>
                      <Select  options={assets_status} />
                    </Col>
                  </Row>
                </FormGroup>
                </div> : ''
                
              }



               {/* Licenses Fields */}
               {
                showLicenses ?  <div className="assets_dropdowns">
                <FormGroup className="form-groups">
                  <Row className=" align-items-center">
                    <Col md="12">
                      <Label htmlFor="">Status</Label>
                      <Select  options={license_status} />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup className="form-groups">
                  <Row className=" align-items-center">
                  <Col md="12">
                      <Label htmlFor="">Device</Label>
                      <Select  options={license_device} />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup className="form-groups">
                  <Row className=" align-items-center">
                  <Col md="12">
                      <Label htmlFor="">Assigned</Label>
                      <Select  options={license_assigned} />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup className="form-groups">
                  <Row className=" align-items-center">
                  <Col md="12">
                      <Label htmlFor="">Os</Label>
                      <Select  options={license_os} />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup className="form-groups">
                  <Row className=" align-items-center">
                  <Col md="12">
                      <Label htmlFor="">Ram</Label>
                      <Select  options={license_ram} />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup className="form-groups">
                  <Row className=" align-items-center">
                  <Col md="12">
                      <Label htmlFor="">Manufacturer</Label>
                      <Select  options={license_manufacturer} />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup className="form-groups">
                  <Row className=" align-items-center">
                  <Col md="12">
                      <Label htmlFor="">Model</Label>
                      <Select  options={license_model} />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup className="form-groups">
                  <Row className=" align-items-center">
                  <Col md="12">
                      <Label htmlFor="">CPU</Label>
                      <Select  options={license_cpu} />
                    </Col>
                  </Row>
                </FormGroup>
                </div> : ''
                
              }
             

          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* Side Filter Section End */}
    </>
  );
}
