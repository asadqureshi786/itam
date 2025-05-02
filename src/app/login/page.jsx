"use client"
import { FormGroup, Input, Label, Form, Row, Col, Button } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../../css/auth.scss';
import { useRouter } from 'next/navigation'; // Use next/navigation in the App Router
import { useContext } from "react"
import { UserContext } from "@/context/UserContext"

export default function Auth_Login() {
    const UserData = useContext(UserContext)

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Ensure this component is mounted on the client
    }, []);



    

    if (!isMounted) return null; // Avoid rendering until mounted on the client

    return (
        <>
            <div className="auth_pgs">
                <div className="content">
                    <div className="back_img" style={{ background: "url(images/auth/login_back.png)" }}></div>
                    <div className="form_content">
                        <div className='white text-white' id="demo"></div>
                        <Form >
                            <Row className="justify-content-center">
                                <Col md="4">
                                    <h4 className='heading text-center'>Welcome Back</h4>
                                    <p className="py-2 m-0 sub_text text-center">Login into your account</p>
                                    <div className="border_lines text-center">
                                        <small className="p-0 m-0 small_text text-center">Or continue with</small>
                                    </div>

                                    <div className="mt-4">
                                        <FormGroup className="form-groups">
                                            <Label htmlFor="">Email</Label>
                                            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' />
                                        </FormGroup>
                                        <FormGroup className="form-groups mb-0">
                                            <Label htmlFor="">Password</Label>
                                            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' />
                                        </FormGroup>
                                    </div>

                                    <div className="middle mt-2 d-flex justify-content-between align-items-center mb-3">
                               
                                        <Link className='link' href="#">Recover Password</Link>
                                    </div>

                                    <Link href="/" className='btn auth_btn full_blue' type="submit">Login</Link>
                                   <span className="text-white white" > {error && <p>{error}</p>}</span>

                                    <div className="auth_footer text-center pt-3">
                                        <p className="p-0 m-0 text">
                                            Don’t have an account?
                                            <Link href="/signup" className="link"> Sign up!</Link>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
                <div className="side_image">
                    <Image alt="" loading="lazy" src="/itam/images/auth/login_side.png" width={1000} height={1000} />
                </div>
            </div>
        </>
    );
}
