"use client";
import { useState } from "react";

import { Container, Nav, NavItem, NavLink, TabContent,TabPane, Row, FormGroup, Input,Label , Col, Card, CardBody, Button } from 'reactstrap';

import Form_Head from "@/components/Form_head/form_head";
import Select from "react-select";
import Link from "next/link";
import { InputMask } from "@react-input/mask";
import classnames from 'classnames';

import TextArea from "@/components/Textarea/Textarea"



// Profile Upload Import
import SingleImageUpload from "@/components/SingleImageUpload/SingleImageUpload";

// User History Table Import
import UserHistory from "@/components/UserHistory/UserHistory";


// Import Asset Items
import AssetsItems from "@/components/AssetsItems/AssetsItems";

export default function Add_License() {
  const user_role = [{ value: "Manager", label: "Manager" }];
  const department = [{ value: "Human Resource", label: "Human Resource" }];
  const assigned_to = [{ value: "Ovais", label: "Ovais" }];

  const [date, setDate] = useState(new Date());

  const [purchaseDate, purchaseSetDate] = useState(new Date());

  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      
        <div className="user_view">
          {/* Tab Section Start */}
          <div className="tab_heads mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
              className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
                >
                  Details
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
              className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
                >
                  Assets
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
              className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
                >
                  History
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          {/* Tab Section End */}
          <Card>
            <CardBody>
              {/* Tab Content Section Start */}
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1"
                >
                  <Form_Head headName="Acrobat" />
                  <hr />
                  <Row>
                    <Col md="3" className="justify-content-center align-items-center d-flex">
                      <SingleImageUpload />
                    </Col>
                    <Col md="9">
                      <div className="custom_form">
                        <h6 className="heading">Profile Details</h6>
                        <Row>
                          <Col md="6">
                            <FormGroup className="form-groups">
                              <Label htmlFor="">Full Name</Label>
                              <Input
                                type="text"
                                className="form-control"
                                value="John Doe"
                              />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup className="form-groups">
                              <Label htmlFor="">Email Address</Label>
                              <Input
                                type="text"
                                className="form-control"
                                value="john.doe@gmail.com"
                              />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup className="form-groups">
                              <Label htmlFor="">Role</Label>
                              <Select options={user_role} />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup className="form-groups">
                              <Label htmlFor="">Contact Number</Label>
                              <InputMask
                                className="form-control"
                                mask="+0 (___) ___-__-__"
                                replacement={{ _: /\d/ }}
                              />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup className="form-groups">
                              <Label htmlFor="">Location</Label>
                              <Input
                                type="text"
                                className="form-control"
                                value=""
                              />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup className="form-groups">
                              <Label htmlFor="">Department</Label>
                              <Select options={department} />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col md="3"></Col>
                    <Col md="9">
                      <div className="custom_form">
                        <h6 className="heading">Additional Information</h6>
                        <Row>
                          <Col md="6">
                            <FormGroup className="form-groups">
                              <Label htmlFor="">Custom Field</Label>
                              <InputMask
                                className="form-control"
                                mask="__________"
                                replacement={{ _: /\d/ }}
                              />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup className="form-groups">
                              <Label htmlFor="">Custom Field</Label>
                              <Input
                                type="text"
                                className="form-control"
                                value=""
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                  <hr />
                  <Row className="pb-3">
                    <Col md="3"></Col>
                    <Col md="9">
                      <div className="custom_form">
                        <h6 className="heading">Notes</h6>
                        <Row>
                          <Col md="6">
                            <FormGroup className="form-groups">
                              <Label htmlFor="">Internal Notes</Label>
                              <TextArea/>
                              <small className="light_color">
                                This info will be visible to admins only.
                              </small>
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup className="form-groups">
                              <Label htmlFor="">External Notes</Label>
                              <TextArea/>
                              <small className="light_color">
                                This info will be visible to all employees
                              </small>
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2"
                >
                  <div className="assets">
                    <div className="custom_table">
                      <div className="table_head d-flex align-items-center justify-content-between">
                        <div className="f_col">
                          <h3 className="heading">All Assets</h3>
                          <Link href="add_license" className="add_button">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M12 8V16M8 12H16M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="#565656" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                          </Link>
                        </div>
                        <div className="filter">
                          <select name="" id="">
                            <option value="">All Assets</option>
                            <option value="">Option 1</option>
                            <option value="">Option 2</option>
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
                            <Input
                              type=""
                              placeholder="Search"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Asset Items */}
                    <AssetsItems />
                  </div>
                </TabPane>
                <TabPane tabId="3"
                >
                  <div className="user_history">
                    <div className="custom_table">
                      <div className="table_head d-flex align-items-center justify-content-between">
                        <div className="f_col">
                          <h3 className="heading">User History</h3>
                        </div>
                        <div className="filter">
                          <select name="" id="">
                            <option value="">Today</option>
                            <option value="">7 Days</option>
                            <option value="">30 Day</option>
                          </select>
                        </div>
                      </div>
                      <div className="table_body">
                        <UserHistory/>
                      </div>

                    </div>
                  </div>
                </TabPane>
              </TabContent>
              {/* Tab Content Section End */}
            </CardBody>
          </Card>
        </div>
     
    </>
  );
}
