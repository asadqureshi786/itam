"use client";
import { FormGroup,Input,Label,Form , Row, Col, Button } from 'reactstrap';

import React, { useState } from 'react';
import Image from 'next/image';

import Link from "next/link";
import '../../css/auth.scss'

export default function Auth_Login(){
    const [state, setState] = useState(true);

    return (
        <>
            <div className="auth_pgs">
                <div className="content">
                    <div className="back_img" style={{background:"url(images/auth/login_back.png)"}} ></div>
                    <div className="form_content">
                        <Form action="">
                            <Row className="justify-content-center">
                                <Col md="4">
                                    <h4 className='heading text-center' >Welcome Back</h4>
                                    <p className="py-2 m-0 sub_text text-center">Login into your account</p>
                                    <div className="border_lines text-center">
                                        <small className="p-0 m-0 small_text text-center">Or continue with</small>
                                    </div>
                                    
                                    <div className="mt-4">
                                        <FormGroup className="form-groups">
                                            <Label htmlFor="">Email</Label>
                                            <Input type="email" className='form-control' />
                                        </FormGroup>
                                        <FormGroup className="form-groups mb-0">
                                            <Label htmlFor="">Password</Label>
                                            <Input type="password" className='form-control' />
                                        </FormGroup>
                                    </div>

                                    <div className="middle mt-2 d-flex justify-content-between align-items-center mb-3">
                                    <FormGroup switch>
                                        <Input
                                        type="switch"
                                        checked={state}
                                        onClick={() => {
                                            setState(!state);
                                        }}
                                        />
                                    </FormGroup>
                                        <Link className='link' href="#" >Recover Password</Link>
                                    </div>

                                    <Link href="/" className='btn auth_btn full_blue'>Login</Link>

                                    <div className="auth_footer text-center pt-3">
                                        <p className="p-0 m-0 text">
                                            Don’t have an account?
                                            <Link href="/sign_up" className="link" > Sign up!</Link>
                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
                <div className="side_image">
                     <Image alt="" loading="lazy"src={"/itam/images/auth/login_side.png"} width={1000} height={1000}  />
                </div>
            </div>
        </>
    )
}