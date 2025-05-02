"use client";

import React, { useState } from 'react';
import { FormGroup,Input,Spinner,Label,Form , Row, Col, Button } from 'reactstrap';

import Link from "next/link";
import Image from "next/image";
import '../../css/auth.scss'


export default function Auth_SignUp(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [passwordMatch,setPasswordMatch] = useState(false);
    const [login,setLogin] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLogin(true)

        if(password === confirmPassword){
            setPasswordMatch(false)
        }
        else{
            setPasswordMatch(true)
        }

        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if(data.status == 'email_required'){
            setTimeout(() => {
                setLogin(false)
            }, 1000);
            console.log('Email Password Required')
        }
       else if(data.status == 'user_created'){
            setTimeout(() => {
                setLogin(false)
            }, 1000);
            console.log('User Created')
        }
       else if(data.status == 'email_exist'){
            setTimeout(() => {
                setLogin(false)
            }, 1000);
            console.log('Email Exist')
        }
       else if(data.status == 'something_went_wrong'){
            setTimeout(() => {
                setLogin(false)
            }, 1000);
            console.log('Something Went Wrong');
        }
        else{
            setEmail('')
        setPassword('')
        setConfirmPassword('')
    };
        }
    return (
        <>
            <div className="auth_pgs sign_up">
              <div className="side_image">
                     <Image alt="" loading="lazy" width={1000} height={1000} src={"/itam/images/auth/signup.png"} />
                </div>
                <div className="content">
                    <div className="back_img" style={{background:"url(images/auth/signup_back.png)"}} ></div>
                    <div className="form_content">
                        <Form action="" onSubmit={handleSubmit}>
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
                                            <Input type="email"  onChange={(e)=> setEmail(e.target.value)} value={email} className='form-control' />
                                        </FormGroup>
                                        <FormGroup className="form-groups">
                                            <Label htmlFor="">Password</Label>
                                            <Input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} className='form-control' />
                                        </FormGroup>
                                        <FormGroup className="form-groups">
                                            <Label htmlFor="">Confirm Password</Label>
                                            <Input type="password" onChange={(e)=> setConfirmPassword(e.target.value)} value={confirmPassword} className='form-control' />
                                                {
                                                    passwordMatch && <span className='not_match' >Those passwords didn’t match. Try again.</span>
                                                }
                                        </FormGroup>
                                    </div>

                                    <Button color='btn auth_btn full_blue auth_spinner'> 
                                        {
                                            login && <Spinner>
                                            Loading...
                                            </Spinner>
                                        }                                       

                                        Sign up</Button>

                                    <div className="auth_footer text-center pt-3">
                                        <p className="p-0 m-0 text">
                                            Already have an account?
                                            <Link href="/auth/login" className="link" > Log in</Link>
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