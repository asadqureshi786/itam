import React, { useState } from 'react'
import SettingFromHead from "@/components/SettingFormHead/SettingFormHead"
import {Form, FormGroup,Input,Label , Row, Col} from 'reactstrap';
import Link from "next/link";
import Select from 'react-select'
import { InputMask } from '@react-input/mask';




// Image Uploader
import SingleImageUpload from '@/components/SingleImageUpload/SingleImageUpload'


export default function ProfileSetting(){
    
    const role = [
        { value: 'Manager', label: 'Manager' },
      ];
      const location = [
        { value: 'DHA', label: 'DHA' },
      ];
      const Department = [
        { value: 'HR', label: 'HR' },
      ];

    return (
        <>
         <Form action="">
                      <SettingFromHead headName="Profile Settings" />
                        <div className="profile_setting_body">
                          <Row>
                              <Col md="3" className="pt-5 justify-content-center align-items-start d-flex">
                                  <SingleImageUpload id="profile_Picture" />
                              </Col>
                              <Col md="9">
                                  <div className="custom_form">
                                      <h6 className="heading mt-3">Profile Details</h6>
                                      <Row>
                                          <Col md="6">
                                              <FormGroup className="form-groups">
                                                  <Label htmlFor="">Full Name</Label>
                                                  <Input type="text" className='form-control' />
                                              </FormGroup>
                                          </Col>
                                          <Col md="6">
                                              <FormGroup className="form-groups">
                                                  <Label htmlFor="">Email Address</Label>
                                                  <Input type="email" className='form-control' />
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
                                                  <Label htmlFor="">Contact Number</Label>
                                                  <InputMask className='form-control' mask="__________" replacement={{ _: /\d/ }} />

                                              </FormGroup>
                                          </Col>
                                          <Col md="6">
                                              <FormGroup className="form-groups">
                                                  <Label htmlFor="">Location</Label>
                                                  <Select options={location} />
                                              </FormGroup>
                                          </Col>
                                          <Col md="6">
                                              <FormGroup className="form-groups">
                                                  <Label htmlFor="">Department</Label>
                                                  <Select options={Department} />
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
                                                  <Input type='textarea' name="" rows="7" className='form-control' />
                                                  <small className='light_color'>This info will be visible to admins only.</small>
                                              </FormGroup>
                                          </Col>
                                          <Col md="6">
                                              <FormGroup className="form-groups">
                                                  <Label htmlFor="">External Notes</Label>
                                                  <Input type='textarea' name="" rows="7" className='form-control' />
                                                  <small className='light_color'>This info will be visible to all employees</small>
                                              </FormGroup>
                                          </Col>
                                      </Row>
                                  </div>
                              </Col>
                          </Row>
                      </div>
                    </Form>
        </>
    )
}