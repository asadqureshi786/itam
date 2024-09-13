"use client";

import React, { useState } from 'react';
import { FormGroup,Input,Label,Form , Row, Col, Button } from 'reactstrap';

import Link from "next/link";
import Image from "next/image";
import '../../css/auth.scss'


export default function Auth_SignUp(){

    return (
        <>
            <div className="auth_pgs sign_up">
              <div className="side_image">
                     <Image alt="" loading="lazy" width={1000} height={1000} src={"/itam/images/auth/signup.png"} />
                </div>
                <div className="content">
                    <div className="back_img" style={{background:"url(images/auth/signup_back.png)"}} ></div>
                    <div className="form_content">
                        <Form action="">
                            <Row className="justify-content-center">
                                <Col md="4">
                                    <h4 className='heading text-center' >Create Account</h4>
                                    <p className="py-2 m-0 sub_text text-center">Start your journey with ITAM</p>
                                    <div className="border_lines text-center">
                                        <small className="p-0 m-0 small_text text-center">Or continue with</small>
                                    </div>
                                    
                                    <div className="mt-4">
                                        <FormGroup className="form-groups">
                                            <Label htmlFor="">Email</Label>
                                            <Input type="email" className='form-control' />
                                        </FormGroup>
                                        <FormGroup className="form-groups">
                                            <Label htmlFor="">Password</Label>
                                            <Input type="password" className='form-control' />
                                        </FormGroup>
                                        <FormGroup className="form-groups">
                                            <Label htmlFor="">Confirm Password</Label>
                                            <Input type="password" className='form-control' />
                                        </FormGroup>
                                    </div>

                                    <Button color='btn auth_btn full_blue'>Sign up</Button>

                                    <div className="auth_footer text-center pt-3">
                                        <p className="p-0 m-0 text">
                                            Already have an account?
                                            <Link href="/login" className="link" > Log in</Link>
                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}