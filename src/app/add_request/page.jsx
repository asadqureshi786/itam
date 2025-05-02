"use client";
import {useState} from 'react'
import {FormGroup,Input,Label , Row, Col, Card, CardBody} from 'reactstrap';

import Form_Head from "@/components/Form_head/form_head"
import Select from 'react-select'
import Link from "next/link";

import { InputMask } from '@react-input/mask';

import TextArea from "@/components/Textarea/Textarea"

// React Icons





// Image Uploader
import SingleImageUpload from '@/components/SingleImageUpload/SingleImageUpload'





export default function Add_Asset(){

    const role = [
        { value: 'Manager', label: 'Manager' },
      ];
    const department = [
        { value: 'Department1', label: 'Department1' },
      ]
    const asset_type = [
        { value: 'Laptop', label: 'Laptop' },
      ]
    const company = [
        { value: 'itel', label: 'itel' },
      ]

    const [date, setDate] = useState(new Date());
    
    const [purchaseDate, purchaseSetDate] = useState(new Date());

    const [ExternalLink,SetExternalLink] = useState([
        {
            Label : "External Link",
        }
    ]);

    const addExternalLink = ()=>{
        let externalLinks = {
            id : performance.now(),
            Label : "External Link",
        }
        SetExternalLink((currentValue)=>{
            return [...currentValue,externalLinks]
        });
        
    }

    const delelteExternalLink = (id)=>{
        SetExternalLink((currentValue) => currentValue.filter(link => link.id !== id));

    }



    return (
        <>
        
            <div className="add_assets">
                <Card>
                    <CardBody>
                        <Form_Head headName="Request #0001" action_btn="Add" />
                        <hr />
                        <Row>
                            <Col md="3" className="justify-content-center align-items-center d-flex">
                                <SingleImageUpload id="user_image" />
                            </Col>
                            <Col md="9">
                                <div className="custom_form">
                                    <h6 className="heading">User Details</h6>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup className="form-groups">
                                                <Label htmlFor="">Search</Label>
                                                <Input type="text" className='form-control'  />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup className="form-groups">
                                                <Label htmlFor="">Full Name</Label>
                                                <Input type="text" className='form-control'  />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup className="form-groups">
                                                <Label htmlFor="">Email</Label>
                                                <Input type="email" className='form-control'  />
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
                                                <InputMask className='form-control' mask="+0 (___) ___-__-__" replacement={{ _: /\d/ }}  />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup className="form-groups">
                                                <Label htmlFor="">Location</Label>
                                                <Input type='text' className='form-control' />
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
                            <Col md="3" className="justify-content-center align-items-center d-flex">
                                <SingleImageUpload id="product_image"/>
                            </Col>
                            <Col md="9">
                                <div className="custom_form">
                                    <h6 className="heading">Product Details</h6>
                                    <Row>
                                    <Col md="12">
                                            <FormGroup className="form-groups">
                                                <Label htmlFor="">Search</Label>
                                                <Input type="text" className='form-control'  />
                                            </FormGroup>
                                        </Col>
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
                                                <Input type="text" className='form-control' />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup className="form-groups">
                                                <Label htmlFor="">Serial No</Label>
                                                <Input type="text" className='form-control' />
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
                                        <Link href="#" onClick={addExternalLink} className="add_button">
                                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M12 8V16M8 12H16M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="#565656" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                                        </Link>
                                    </div>
                                    <Row>
                                        {
                                            ExternalLink.map((element,index)=>(
                                            <Col md="12" key={index} >
                                                <FormGroup className="form-groups">
                                                    <Label htmlFor="">{element.Label}</Label>
                                                    <div className="procurement_link d-flex gap-3 align-items-center">
                                                        <Input type="text" className='form-control' />
                                                        <Link onClick={()=> delelteExternalLink(element.id)} className='link_trash' href="#">
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
                                            ))
                                        }
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
                                                <Input type="text" className='form-control' />
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
