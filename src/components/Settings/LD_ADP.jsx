import React, { useState } from "react";
import SettingFromHead from "@/components/SettingFormHead/SettingFormHead";
import { Form, FormGroup, Input,Button, Label, Row, Col } from "reactstrap";
import Link from "next/link";
import Select from "react-select";
import { InputMask } from "@react-input/mask";
export default function LD_ADP() {
  const role = [{ value: "Manager", label: "Manager" }];
  const location = [{ value: "DHA", label: "DHA" }];
  const Department = [{ value: "HR", label: "HR" }];
  return (
    <>
      <Form action="" className="ld_adp" >
        <div className="form_head  side_canvas">
                <Row className=" align-items-center">
                  <Col md="4" className="d-flex align-items-center gap-2">
                    <div>
                    <h6 className="title" >LDAP/AD</h6>
                    <span className="light_color sub_title p-0 m-0">Details</span>
                    </div>
                  </Col>
                  <Col md="8">
                    <div className="action_btn">
                        <Button color="btn cancel"> Cancel</Button>
                        <Button color="btn full_blue btn">Save</Button>
                    </div>
                  </Col>
                </Row>
            </div>
        <div className="profile_setting_body">
          <Row>
            <Col md="12">
              <div className="custom_form">
                <h6 className="heading mt-3">Profile Details</h6>
                <Row>
                  <Col md="12">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">LDAP Integration</Label>
                      <div className="select_check">
                      <Input className="form-control" type="checkbox" />
                      <span className="sub_text" >LDAP enabled</span>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">Active Directory</Label>
                      <div className="select_check">
                      <Input className="form-control" type="checkbox" />
                      <span className="sub_text" >This is an Active Directory server</span>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">LDAP Password Sync</Label>
                      <div className="select_check">
                      <Input className="form-control" type="checkbox" />
                      <span className="sub_text" >
                      Uncheck this box if you do not wish to keep LDAP passwords synced with local passwords. Disabling this means that your users may not be able to login if your LDAP server is unreachable for some reason.
                      </span>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">Active Directory domain</Label>
                      <div className="select_check">
                        <Input type="email" className="form-control" />
                        <span className="sub_text" >
                        Uncheck this box if you do not wish to keep LDAP passwords synced with local passwords. Disabling this means that your users may not be able to login if your LDAP server is unreachable for some reason.
                        </span>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">LDAP Client TLS Key</Label>
                      <div className="select_check">
                      <Input
                        type="textarea"
                        name=""
                        rows="5"
                        className="form-control"
                      />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">LDAP Client-Side TLS Certificate</Label>
                      <div className="select_check">
                      <Input
                        type="textarea"
                        name=""
                        rows="5"
                        className="form-control"
                      />
                      <span className="sub_text">
                      Client-Side TLS Certificate and Key for LDAP connections are usually only useful in Google Workspace configurations with "Secure LDAP." Both are required.
                      </span>
                      </div>
                    </FormGroup>
                  </Col>

                  <Col md="12">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">LDAP Server</Label>
                      <div className="select_check">
                        <Input type="text" className="form-control" />
                        <span className="sub_text" >
                        This should start with ldap:// (for unencrypted) or ldaps:// (for TLS or SSL)
                        </span>
                      </div>
                    </FormGroup>
                  </Col>

                  <Col md="12">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">Use TLS</Label>
                      <div className="select_check">
                      <Input className="form-control" type="checkbox" />
                      <span className="sub_text" >
                      This should be checked only if you are running STARTTLS on your LDAP server.
                      </span>
                      </div>
                    </FormGroup>
                  </Col>

                  <Col md="12">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">LDAP SSL certificate validation</Label>
                      <div className="select_check">
                      <Input className="form-control" type="checkbox" />
                      <span className="sub_text" >
                      Select this checkbox if you are using a self signed SSL cert and would like to accept an invalid SSL certificate.
                      </span>
                      </div>
                    </FormGroup>
                  </Col>

                  <Col md="6">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">LDAP Bind Username</Label>
                      <div className="select_check">
                      <Input className="form-control" type="text" />
                      </div>
                    </FormGroup>
                  </Col>
                 
                  <Col md="6">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">LDAP Bind Password</Label>
                      <div className="select_check">
                      <Input className="form-control" type="password" />
                      </div>
                    </FormGroup>
                  </Col>
              
                  <Col md="6">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">Base Bind DN</Label>
                      <div className="select_check">
                      <Input className="form-control" type="text" />
                      </div>
                    </FormGroup>
                  </Col>
                 
                  <Col md="6">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">LDAP Filter</Label>
                      <div className="select_check">
                      <Input className="form-control" type="text" />
                      </div>
                    </FormGroup>
                  </Col>
              
                  <Col md="6">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">Username Field</Label>
                      <div className="select_check">
                      <Input className="form-control" type="text" />
                      </div>
                    </FormGroup>
                  </Col>
              
                  <Col md="6">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">Last Name</Label>
                      <div className="select_check">
                      <Input className="form-control" type="text" />
                      </div>
                    </FormGroup>
                  </Col>
                
                  <Col md="6">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">LDAP First Name</Label>
                      <div className="select_check">
                      <Input className="form-control" type="text" />
                      </div>
                    </FormGroup>
                  </Col>
                
                  <Col md="6">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">LDAP Authentication query</Label>
                      <div className="select_check">
                      <Input className="form-control" type="text" />
                      <span className="sub_text">
                      uid=samaccountname is probably not a valid auth filter. You probably want uid=

                      </span>
                      </div>
                    </FormGroup>
                  </Col>
              
                  <Col md="12">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">LDAP Active Flag</Label>
                      <div className="select_check">
                      <Input className="form-control" type="text" />
                      <span className="sub_text">
                      This value is used to determine whether a synced user can login to Snipe-IT. It does not affect the ability to check items in or out to them, and should be the attribute name within your AD/LDAP, not the value.
                      If this field is set to a field name that does not exist in your AD/LDAP, or the value in the AD/LDAP field is set to 0 or false, user login will be disabled. If the value in the AD/LDAP field is set to 1 or true or any other text means the user can log in. When the field is blank in your AD, we respect the userAccountControl attribute, which usually allows non-suspended users to log in.
                      </span>
                      </div>
                    </FormGroup>
                  </Col>

                  <Col md="6">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">LDAP Employee Number</Label>
                      <div className="select_check">
                      <Input className="form-control" type="text" />
                      </div>
                    </FormGroup>
                  </Col>
              
                  <Col md="6">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">LDAP Department</Label>
                      <div className="select_check">
                      <Input className="form-control" type="text" />
                      </div>
                    </FormGroup>
                  </Col>
              
                  <Col md="6">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">LDAP Manager</Label>
                      <div className="select_check">
                      <Input className="form-control" type="text" />
                      </div>
                    </FormGroup>
                  </Col>
              
                  <Col md="6">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">LDAP Email</Label>
                      <div className="select_check">
                      <Input className="form-control" type="text" />
                      </div>
                    </FormGroup>
                  </Col>
              
                  <Col md="6">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">LDAP Telephone Number</Label>
                      <div className="select_check">
                      <Input className="form-control" type="text" />
                      </div>
                    </FormGroup>
                  </Col>
              
                  <Col md="6">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">LDAP Job Title</Label>
                      <div className="select_check">
                      <Input className="form-control" type="text" />
                      </div>
                    </FormGroup>
                  </Col>
              
                  <Col md="6">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">LDAP Country</Label>
                      <div className="select_check">
                      <Input className="form-control" type="text" />
                      </div>
                    </FormGroup>
                  </Col>
              
                  <Col md="6">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">LDAP Location</Label>
                      <div className="select_check">
                      <Input className="form-control" type="text" />
                      <span className="sub_text">
                      The Ldap Location field should be used if an OU is not being used in the Base Bind DN. Leave this blank if an OU search is being used.
                      </span>
                      </div>
                    </FormGroup>
                  </Col>
              
                  <Col md="12">
                    <FormGroup className="form-groups">
                      <Label htmlFor="">Custom Password Reset URL</Label>
                      <div className="select_check">
                      <Input className="form-control" type="text" />
                      <span className="sub_text">
                      This replaces the built-in forgotten password URL on the login screen, useful to direct people to internal or hosted LDAP password reset functionality. It will effectively disable local user forgotten password functionality.
                      </span>
                      </div>
                    </FormGroup>
                  </Col>
              
                </Row>
              </div>
            </Col>
          </Row>
          <hr />
        </div>
      </Form>
    </>
  );
}
