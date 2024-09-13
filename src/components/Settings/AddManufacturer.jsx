"use client";
import { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody,Form,FormGroup,Input,Label, ModalFooter,Row,Col } from "reactstrap";
import Link from "next/link";

// Image Uploader
import SingleImageUpload from '@/components/SingleImageUpload/SingleImageUpload'

// Input Masking
import { InputMask } from '@react-input/mask';





export default function AddManufacturer(args) {

  

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <>
      <div>
      <Link href="#" onClick={toggle} className="add_button">
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M12 8V16M8 12H16M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="#565656" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
        </Link>
        {/* <Button color="danger" >
          Click Me
        </Button> */}
        <Modal isOpen={modal} toggle={toggle} {...args} size="lg" >
          <ModalHeader toggle={toggle}>Add Manufacturer</ModalHeader>
          <ModalBody>
            <Form action="">
              <div className="custom_form">
                  <Row className="py-3 justify-content-center">
                    <Col md="4" className="d-flex justify-content-center">
                    <SingleImageUpload/>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup className="form-groups">
                        <Label htmlFor="">Full Name</Label>
                        <Input type="text" value="Edward Hogan" className="form-control" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup className="form-groups">
                        <Label htmlFor="">Company Name</Label>
                        <Input type="text" value="Star Co." className="form-control" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup className="form-groups">
                        <Label htmlFor="">Email Address</Label>
                        <Input type="email" value="edward@gmail.com" className="form-control" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup className="form-groups">
                        <Label htmlFor="">Contact No.</Label>
                        <InputMask value="+92 304 2328820" className="form-control" mask="+0 (___) ___-__-__" replacement={{ _: /\d/ }} />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup className="form-groups">
                        <Label htmlFor="">Address</Label>
                        <Input type="email" value="123 Sector 45 B, New Yourk" className="form-control" />
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
              Add
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}
