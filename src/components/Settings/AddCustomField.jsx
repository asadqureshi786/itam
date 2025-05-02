"use client";
import { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody,Form,FormGroup,Input, ModalFooter,Row,Col } from "reactstrap";
import Link from "next/link";


// Input Masking




export default function AddCustomField(props, args) {

  const [ExternalLink,SetExternalLink] = useState([
    {   
        id : performance.now(),
        inputValue : "My Option",
    }
  ]);

  const addExternalLink = ()=>{
      let externalLinks = {
          id : performance.now(),
          inputValue : "My Option",
      }
      SetExternalLink((currentValue)=>{
          return [...currentValue,externalLinks]
      });
  }

  const delelteExternalLink = (id)=>{
      SetExternalLink((currentValue) => currentValue.filter(link => link.id !== id));

  }

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <>
      <div>
        <div onClick={toggle} className="light cs_field  m-0">
          {props.tdName}
        </div>
        {/* <Button color="danger" >
          Click Me
        </Button> */}
        <Modal scrollable={true} isOpen={modal} toggle={toggle} {...args} size="md">
          <ModalHeader toggle={toggle}>
            <div className="d-flex gap-2">
              Filed Option
              <p className="add_button" onClick={addExternalLink} >
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M12 8V16M8 12H16M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="#565656" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
              </p>
            </div>
          </ModalHeader>
          <ModalBody>
            <Form action="">
              <div className="custom_form">
                <Row>
                  {ExternalLink.map((element, index) => (
                    <Col md="12" key={index}>
                      <FormGroup className="form-groups">
                        {/* <label htmlFor="">{element.label}</label> */}
                        <div className="procurement_link d-flex align-items-center gap-3">
                          <Input type="text" value={element.inputValue} className="form-control" />
                          <Link
                            onClick={() => delelteExternalLink(element.id)}
                            className="link_trash"
                            href="#"
                          >
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
                  ))}
                </Row>
              </div>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color=" cancel" onClick={toggle}>
              Cancel
            </Button>{" "}
            <Button color=" update" onClick={toggle}>
              Update
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}
