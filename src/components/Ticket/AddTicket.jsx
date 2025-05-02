"use client";
import { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form,FormGroup, Input, Label, Col, Row } from "reactstrap";
// import DropZoneUpload from "@/components/DropZoneUpload/DropZoneUpload"
// Icon
import TextArea from "@/components/Textarea/Textarea"

export default function AddAdditionalFields(props, args) {


  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <>
      <div>
      <div className="add_button" onClick={toggle} style={{cursor:'pointer'}} >
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M12 8V16M8 12H16M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="#565656" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
        </div>
        {/* <Button color="danger" >
          Click Me
        </Button> */}
        <Modal scrollable={true} isOpen={modal} toggle={toggle} {...args} size="lg">
          <ModalHeader toggle={toggle}>
            <div className="d-flex gap-2">
              Add Ticket
            </div>
          </ModalHeader>
          <ModalBody>
            <Form action="">
              <div className="custom_form">
                <Row>
                <Col md="4">
                      <FormGroup className="form-groups">
                        <Label className="d-flex align-items-center gap-1" htmlFor="">ID 
                           </Label>
                        <div className="procurement_link d-flex align-items-center gap-3">
                          <input type="text" disabled value="#32423"  className="form-control" />
                        </div>
                           <span><small className="text-white position-relative bottom-0" >A unique ID will be automatically generated</small></span>
                         
                      </FormGroup>
                    </Col>
                    <Col md="8">
                      <FormGroup className="form-groups">
                        <Label htmlFor="">Device Name</Label>
                        <div className="procurement_link d-flex align-items-center gap-3">
                          <input type="text"  className="form-control" />
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup className="form-groups">
                        <Label htmlFor="">Type</Label>
                        <select name="" id="" className="form-control">
                            <option value="">Procurement</option>
                            <option value="">Maintenance</option>
                            <option value="">Incident</option>
                        </select> 
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup className="form-groups">
                        <Label htmlFor="">Status</Label>
                        <select name="" id="" className="form-control">
                        <option value="">Open</option>
                            <option value="">In Progress</option>
                            <option value="">Resolved</option>
                            <option value="">Closed</option>
                        </select> 
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup className="form-groups">
                        <Label htmlFor="">Priority</Label>
                        <select name="" id="" className="form-control">
                        <option value="">High</option>
                            <option value="">Medium</option>
                            <option value="">Low</option>
                        </select> 
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup className="form-groups">
                        <Label htmlFor="">Subject</Label>
                          <input type="text"  className="form-control" />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup className="form-groups">
                        <Label htmlFor="">Description</Label>
                        <TextArea  placeholder="write your explanation here..."  />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup className="form-groups">
                        <Label htmlFor="">Attach Documents</Label>
                        {/* <DropZoneUpload/> */}
                      </FormGroup>
                    </Col>
                </Row>
              </div>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color=" cancel" onClick={toggle}>
              Cancel
            </Button>{" "}
            <Button color=" update" onClick={toggle}>
              Submit
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}
