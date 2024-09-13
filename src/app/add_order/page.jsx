"use client";
import { useState } from "react";
import {FormGroup,Input,Label , Row, Col, Card, CardBody} from 'reactstrap';

import Form_Head from "@/components/Form_head/form_head";
import Select from "react-select";
import Link from "next/link";

import { InputMask } from "@react-input/mask";

import TextArea from "@/components/Textarea/Textarea"


// Flatpickr Import
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// React Icons


// Image Uploader
import SingleImageUpload from "@/components/SingleImageUpload/SingleImageUpload";

export default function Add_Asset() {
  const role = [{ value: "Manager", label: "Manager" }];
  const department = [{ value: "Department1", label: "Department1" }];
  const asset_type = [{ value: "Laptop", label: "Laptop" }];
  const company = [{ value: "itel", label: "itel" }];
  const suppliers = [{ value: "Joe Root", label: "Joe Root" },{ value: "Ian Bell", label: "Ian Bell" }];

  const [dates, setDates] = useState(new Date());
  const handleDateChange = (selectedDate, index) => {
    setDates((prevDates) => ({
      ...prevDates,
      [index]: selectedDate,
    }));
  };

  const [purchaseDate, purchaseSetDate] = useState({});

  const [ExternalLink, SetExternalLink] = useState([
    {
      Label: "External Link",
    },
  ]);

  const addExternalLink = () => {
    let externalLinks = {
      id: performance.now(),
      Label: "External Link",
    };
    SetExternalLink((currentValue) => {
      return [...currentValue, externalLinks];
    });
  };

  const delelteExternalLink = (id) => {
    SetExternalLink((currentValue) =>
      currentValue.filter((link) => link.id !== id),
    );
  };

  return (
    <>
      
        <div className="add_assets">
          <Card>
            <CardBody>
              <Form_Head headName="Order# 44453" action_btn="Add" />
              <hr />
              <Row>
                <Col md="3" className="justify-content-center align-items-center d-flex">
                  <SingleImageUpload id="user_image" />
                </Col>
                <Col md="9">
                  <div className="custom_form">
                    <h6 className="heading">Product Details</h6>
                    <Row>
                      <Col md="6">
                        <FormGroup className="form-groups">
                          <Label htmlFor="">Asset Type</Label>
                          <Select options={asset_type} isMulti />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup className="form-groups">
                          <Label htmlFor="">Company</Label>
                          <Select options={company} isMulti />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup className="form-groups">
                          <Label htmlFor="">Model</Label>
                          <Input type="text" className="form-control" />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup className="form-groups">
                          <Label htmlFor="">Serial No</Label>
                          <Input type="text" className="form-control" />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md="3" className="justify-content-center align-items-center d-flex">
                  <SingleImageUpload id="product_image" />
                </Col>
                <Col md="9">
                  <div className="custom_form">
                    <h6 className="heading">Users Details</h6>
                    <Row>
                      <Col md="12">
                        <FormGroup className="form-groups">
                          <Label htmlFor="">Search</Label>
                          <Input type="text" className="form-control" />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup className="form-groups">
                          <Label htmlFor="">Full Name</Label>
                          <Input type="text" className="form-control" />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup className="form-groups">
                          <Label htmlFor="">Email</Label>
                          <Input type="email" className="form-control" />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup className="form-groups">
                          <Label htmlFor="">Role</Label>
                          <Select options={role} />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup className="form-groups">
                          <Label htmlFor="">Contact No</Label>
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
                          <Input type="text" className="form-control" />
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
                    <div className="sub_head">
                      <h6 className="heading mb-0">Procurement</h6>
                      <Link
                        href="#"
                        onClick={addExternalLink}
                        className="add_button"
                      >
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M12 8V16M8 12H16M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="#565656" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                    {ExternalLink.map((element, index) => (
                      <Row key={index}>
                        <Col md="6">
                            <FormGroup className="form-groups">
                                <Label htmlFor="">Order No</Label>
                                <Input type="text" className="form-control" />
                            </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup className="form-groups">
                            <Label htmlFor="">Start on</Label>
                            <Flatpickr
                                className="form-control"
                                value={dates[index] || new Date()}
                                onChange={([selectedDate]) => handleDateChange(selectedDate, index)}
                            />
                            <span className="form_icon">
                              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#8897AE" strokeWidth="1" strokeLinecap="round"/>
                              </svg>
                            </span>
                          
                          </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup className="form-groups">
                                <Label htmlFor="">Supplier</Label>
                                <Select options={suppliers} />
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup className="form-groups dollar_sign">
                                <Label htmlFor="">Purchase Cost</Label>
                                <InputMask className='form-control' mask="__________" replacement={{ _: /\d/ }} />
                                <span className="dollar" >$</span>
                            </FormGroup>
                        </Col>
                        <Col md="12" key={index}>
                          <FormGroup className="form-groups">
                            <Label htmlFor="">{element.Label}</Label>
                            <div className="procurement_link d-flex align-items-center gap-3">
                              <Input type="text" className="form-control" />
                              <Link
                                onClick={() => delelteExternalLink(element.id)}
                                className="link_trash"
                                href="#"
                              >
                                  <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="24" height="24" fill=""/>
                                                            <path d="M5 7.5H19L18 21H6L5 7.5Z" stroke="#FF3838" strokeLinejoin="round"/>
                                                            <path d="M15.5 9.5L15 19" stroke="#FF3838" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M12 9.5V19" stroke="#FF3838" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M8.5 9.5L9 19" stroke="#FF3838" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8" stroke="#FF3838" strokeLinejoin="round"/>
                                                        </svg>
                              </Link>
                            </div>
                          </FormGroup>
                        </Col>
                      </Row>
                    ))}
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
                          <Input type="text" className="form-control" />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup className="form-groups">
                          <Label htmlFor="">Custom Field</Label>
                          <Input type="text" className="form-control" />
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
            </CardBody>
          </Card>
        </div>
     
    </>
  );
}
