import React, { useState } from 'react'
import SettingFromHead from "@/components/SettingFormHead/SettingFormHead"
import {Form, FormGroup,Input,Label , Row, Col} from 'reactstrap';
import Link from "next/link";

export default function SecuritySettings(){
    
// For Current Password
const [currentPassword,SetCurrentPassword] = useState(true);

const showCurrentPassword = ()=>{
  SetCurrentPassword(!currentPassword);
}

// For New Password
const [NewPassword,SetNewPassword] = useState(true);

const showNewPassword = ()=>{
  SetNewPassword(!NewPassword);
}

// For Confirm Password
const [ConfirmPassword,SetConfirmPassword] = useState(true);

const showConfirmPassword = ()=>{
  SetConfirmPassword(!ConfirmPassword);
}

    return (
        <>
           <Form action="">
                      <SettingFromHead headName="Security Settings" />
                        <div className="company_setting_body">
                          <Row>
                              <Col md="3" className="pt-5 justify-content-center align-items-start d-flex">
                              </Col>
                              <Col md="9">
                                  <div className="custom_form">
                                      <h6 className="heading mt-3">Password Settings</h6>
                                      <Row className="align-items-end">
                                          <Col md="6">
                                              <FormGroup className="form-groups">
                                                  <Label htmlFor="">Current Password</Label>
                                                  <Input type={currentPassword ? "password" : "text"} className='form-control' />
                                                  <span className='eye' onClick={showCurrentPassword} >
                                                  {currentPassword ?
                                                    <svg  width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5E718D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye-off"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                                                    :
                                                    <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z" stroke="#5E718D" strokeWidth="1.5"/>
                                                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#5E718D" strokeWidth="1.5"/>
                                                    </svg>
                                                    }
                                                  </span>
                                              </FormGroup>
                                          </Col>
                                          <Col md="6">
                                              <FormGroup className="form-groups">
                                                  <Link href="#" className='forgotPassword' >Recover Password</Link>
                                              </FormGroup>
                                          </Col>
                                          <Col md="6">
                                              <FormGroup className="form-groups">
                                                  <Label htmlFor="">New Password</Label>
                                                  <Input type={NewPassword ? "password" : "text"} className='form-control' />
                                                  <span className='eye' onClick={showNewPassword} >
                                                  {NewPassword ? <svg  width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5E718D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye-off"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                                                    :
                                                    <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z" stroke="#5E718D" strokeWidth="1.5"/>
                                                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#5E718D" strokeWidth="1.5"/>
                                                    </svg>}
                                                  </span>
                                              </FormGroup>
                                          </Col>
                                          <Col md="6">
                                              <FormGroup className="form-groups">
                                                  <Label htmlFor="">Confirm Password</Label>
                                                  <Input type={ConfirmPassword ? "password" : "text"} className='form-control' />
                                                  <span className='eye' onClick={showConfirmPassword} >
                                                  {ConfirmPassword ?  <svg  width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#5E718D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye-off"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                                                    :
                                                    <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z" stroke="#5E718D" strokeWidth="1.5"/>
                                                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#5E718D" strokeWidth="1.5"/>
                                                    </svg>}
                                                  </span>
                                              </FormGroup>
                                          </Col>
                                          <Col md="12">
                                            <div className="_rules">
                                              <p className='text big_b' >
                                              <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 15H12.01M12 12V9M4.98207 19H19.0179C20.5615 19 21.5233 17.3256 20.7455 15.9923L13.7276 3.96153C12.9558 2.63852 11.0442 2.63852 10.2724 3.96153L3.25452 15.9923C2.47675 17.3256 3.43849 19 4.98207 19Z" stroke="#8897AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                Password Rules</p>
                                              <div className='points'>
                                              <p className='text' >At least eight characters long</p>
                                              <p className='text' >At least one uppercase letter (A-Z)</p>
                                              <p className='text' >At least one lowercase letter (a-z)</p>
                                              <p className='text' >At least one digit (0-9)</p>
                                              <p className='text' >At least one special character (e.g., !, @, #, $, %, ^, &, *)</p>
                                              </div>
                                            </div>
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