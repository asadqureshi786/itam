"use client";
import {useState} from 'react'
import {Row,FormGroup,Input,Label , Col, Card, CardBody, Button } from 'reactstrap';


import Form_Head from "@/components/Form_head/form_head"
import Select from 'react-select'

import { InputMask } from '@react-input/mask';

import TextArea from "@/components/Textarea/Textarea"

// Flatpickr Import
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';


// React Icons






export default function Add_License(){

    const category = [
        { value: 'Graphic Software', label: 'Web Dev' },
      ];
    const manufacturer = [
        { value: 'Adobe', label: 'Adobe' },
      ]
    const assigned_to = [
        { value: 'Ovais', label: 'Ovais' },
      ]

    const [date, setDate] = useState(new Date());
    
    const [purchaseDate, purchaseSetDate] = useState(new Date());


    return (
        <>
        
            <div className="add_assets">
                <Card>
                    <CardBody>
                        <Form_Head headName="Acrobat" />
                        <hr />
                        <Row>
                            <Col md="3" className="justify-content-center align-items-center d-flex">
                            </Col>
                            <Col md="9">
                                <div className="custom_form">
                                    <h6 className="heading">License Essentials</h6>
                                    <Row>
                                        <Col md="6">
                                            <FormGroup className="form-groups">
                                                <Label htmlFor="">Category Name</Label>
                                                <Select options={category} />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup className="form-groups">
                                                <Label htmlFor="">Manufacturer</Label>
                                                <Select options={manufacturer} />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup className="form-groups">
                                                <Label htmlFor="">Software Name</Label>
                                                <Input type='text' className='form-control' />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup className="form-groups">
                                                <Label htmlFor="">Product Keys</Label>
                                                <InputMask className='form-control' mask="__________" replacement={{ _: /\d/ }} />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup className="form-groups">
                                                <Label htmlFor="">Licensed to Email</Label>
                                                <Input type='text' className='form-control' />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup className="form-groups">
                                                <Label htmlFor="">Asset ID (Auto Created)</Label>
                                                <Input type='email' className='form-control' />
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
                                <div className="custom_form pb-2">
                                    <h6 className="heading">Warranty</h6>
                                    <Row>
                                        <Col md="6">
                                            <FormGroup className="form-groups">
                                                <Label htmlFor="">License Expires</Label>
                                                <Flatpickr className="form-control" value={date} onChange={([selectedDate]) => setDate(selectedDate)}/>
                                                <span className="form_icon" >
                                                     <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#8897AE" strokeWidth="1" strokeLinecap="round"/>
                                                    </svg>
                                                </span>
                                                <small className='light_color'>1 year and 2 months left in warranty expiry.</small>
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
                                    <h6 className="heading">Procurement</h6>
                                    <Row>
                                        <Col md="6">
                                            <FormGroup className="form-groups">
                                                <Label htmlFor="">Order No.</Label>
                                                <InputMask className='form-control' mask="__________" replacement={{ _: /\d/ }} />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup className="form-groups">
                                                <Label htmlFor="">Purchase Date</Label>
                                                <Flatpickr className="form-control" value={purchaseDate} onChange={([selectedDate]) => purchaseSetDate(selectedDate)}/>
                                                <span className="form_icon" >
                                                     <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#8897AE" strokeWidth="1" strokeLinecap="round"/>
                                                    </svg>
                                                </span>
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup className="form-groups">
                                                <Label htmlFor="">Supplier</Label>
                                                <Input type="text" className='form-control' />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup className="form-groups dollar_sign">
                                                <Label htmlFor="">Purchase Cost</Label>
                                                <InputMask className='form-control' mask="__________" replacement={{ _: /\d/ }} />
                                                <span className="dollar" >$</span>
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
                                                <InputMask className='form-control' mask="__________" replacement={{ _: /\d/ }} />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup className="form-groups">
                                                <Label htmlFor="">Custom Field</Label>
                                                <Input type="text" className='form-control' />
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
                                                <small className='light_color'>This info will be visible to admins only.</small>
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup className="form-groups">
                                                <Label htmlFor="">External Notes</Label>
                                                <TextArea/>
                                                <small className='light_color'>This info will be visible to all employees</small>
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
    )
}
