"use client"
import {Input, Row, Col, Card, CardBody,Button,FormGroup,Label,Form  } from 'reactstrap';

import Link from "next/link";
import { useEffect } from 'react';
export default function Asset_Management(){
    useEffect(() => {
        // Yeh code sirf client-side pe chalega
        document.title = "Add Assets";
      }, []);
    return (
        <>
        

            <div className="asset_management">
                <Card>
                    <CardBody>

                       {/* Form Head Section Start */}
                        <FormGroup  className="form_head pb-0">
                            <Row className="align-items-center">
                            <Col md="4">
                                <h6 className="title" >DESKTOP-OMF9QN1</h6>
                                <span className="light_color sub_title p-0 m-0">Details</span>
                            </Col>
                            <Col md="8">
                                <div className="action_btn">
                                    <Button type="button" color="btn light_blue btn">View Asset</Button>
                                    <Link href="assets" className="cancel btn">Close</Link>
                                </div>
                            </Col>
                            </Row>
                        </FormGroup>
                       {/* Form Head Section End*/}


                        <div className="custom_form">
                            <div className="border_top">
                                <Row>
                                    <Col md="6">
                                        <h6 className="heading">General</h6>
                                        <div className="first_col">
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Name:</Label>
                                                <Input type="text" className="form-control" value="DESKTOP-OMF9QN1" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Description:</Label>
                                                <Input type="text" className="form-control" value="XXXXX" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Host Name:</Label>
                                                <Input type="text" className="form-control" value="Host Name: DESKTOP-OMF9QN1" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Date Added:</Label>
                                                <Input type="text" className="form-control" value="22/07/2024 3:15 pm" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Online:</Label>
                                                <Input type="text" className="form-control" value="Yes" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Uptime:</Label>
                                                <Input type="text" className="form-control" value="4 days 3 hours" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Boot Time:</Label>
                                                <Input type="text" className="form-control" value="18/07/2024 12:56 pm" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Current User:</Label>
                                                <Input type="text" className="form-control" value="DESKTOP-OMF9QN1\John Jetnetix" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Display Name:</Label>
                                                <Input type="text" className="form-control" value="XXXXXX" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">IP Address:</Label>
                                                <Input type="text" className="form-control" value="XXXXXXXXXXXXXXXX" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">MAC Address:</Label>
                                                <Input type="text" className="form-control" value="XXXXXXXXXXXXXXXXX" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Time Zone:</Label>
                                                <Input type="text" className="form-control" value="(UTC+05:00) Islamabad, Karachi" disabled />
                                            </FormGroup>
                                        </div>
                                    </Col>
                                    <Col md="6">
                                        <h6 className="heading">Operating System</h6>
                                        <div className="second_col">
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">O/S:</Label>
                                                <Input type="text" className="form-control" value="10" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Name:</Label>
                                                <Input type="text" className="form-control" value="Microsoft Windows 10 Pro" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Version:</Label>
                                                <Input type="text" className="form-control" value="10.0.19045.46" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">SP:</Label>
                                                <Input type="text" className="form-control" value="22H2" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Installed:</Label>
                                                <Input type="text" className="form-control" value="10/09/2024 12:06:34 am" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Serial Number:</Label>
                                                <Input type="text" className="form-control" value="00331-10000-00001-AA632" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">System Drive:</Label>
                                                <Input type="text" className="form-control" value="C" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">PowerShell Version:</Label>
                                                <Input type="text" className="form-control" value="5.1.19041.1" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">SMBv1 Server Enabled:</Label>
                                                <Input type="text" className="form-control" value="No" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">SMBv1 Client Enabled:</Label>
                                                <Input type="text" className="form-control" value="No" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">IE Version:</Label>
                                                <Input type="text" className="form-control" value="11.3636.19041.0" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Architecture:</Label>
                                                <Input type="text" className="form-control" value="64-bit" disabled />
                                            </FormGroup>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                             <div className="border_top mt-2">
                                <Row>
                                    <Col md="6">
                                        <h6 className="heading">System</h6>
                                        <div className="first_col">
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Name:</Label>
                                                <Input type="text" className="form-control" value="DESKTOP-OMF9QN1" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Description:</Label>
                                                <Input type="text" className="form-control" value="XXXXX" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Host Name:</Label>
                                                <Input type="text" className="form-control" value="Host Name: DESKTOP-OMF9QN1" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Date Added:</Label>
                                                <Input type="text" className="form-control" value="22/07/2024 3:15 pm" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Online:</Label>
                                                <Input type="text" className="form-control" value="Yes" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Uptime:</Label>
                                                <Input type="text" className="form-control" value="4 days 3 hours" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Boot Time:</Label>
                                                <Input type="text" className="form-control" value="18/07/2024 12:56 pm" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Current User:</Label>
                                                <Input type="text" className="form-control" value="DESKTOP-OMF9QN1\Fariz Jetnetix" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Display Name:</Label>
                                                <Input type="text" className="form-control" value="XXXXXX" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">IP Address:</Label>
                                                <Input type="text" className="form-control" value="XXXXXXXXXXXXXXXX" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">MAC Address:</Label>
                                                <Input type="text" className="form-control" value="XXXXXXXXXXXXXXXXX" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Time Zone:</Label>
                                                <Input type="text" className="form-control" value="(UTC+05:00) Islamabad, Karachi" disabled />
                                            </FormGroup>
                                        </div>
                                    </Col>
                                    <Col md="6">
                                        <h6 className="heading">Scanning</h6>
                                        <div className="second_col">
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Manufacturer:</Label>
                                                <Input type="text" className="form-control" value="LENOVO" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Model:</Label>
                                                <Input type="text" className="form-control" value="20JW00" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Memory:</Label>
                                                <Input type="text" className="form-control" value="32 GB" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Processor:</Label>
                                                <Input type="text" className="form-control" value="4-Core 2.5 GHz " disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Chassis:</Label>
                                                <Input type="text" className="form-control" value="Notebook" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Serial Number:</Label>
                                                <Input type="text" className="form-control" value="R90N6" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">BIOS Version:</Label>
                                                <Input type="text" className="form-control" value="N1VET62W" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">BIOS Manufacturer:</Label>
                                                <Input type="text" className="form-control" value="LENOVO" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">BIOS Asset Tag:</Label>
                                                <Input type="text" className="form-control" value="No Asset Information" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Family:</Label>
                                                <Input type="text" className="form-control" value="ThinkPad T570 W10DG" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">Version:</Label>
                                                <Input type="text" className="form-control" value="ThinkPad T570 W10DG" disabled />
                                            </FormGroup>
                                            <FormGroup  className="form-groups">
                                                <Label htmlFor="">SKU:</Label>
                                                <Input type="text" className="form-control" value="LENOVO_M" disabled />
                                            </FormGroup>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                    </CardBody>
                </Card>
            </div>

       
        </>
    )
}
