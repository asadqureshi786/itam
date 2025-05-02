"use client";
import { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  ModalFooter,
  Row,
  Col,
} from "reactstrap";
import Link from "next/link";
export default function AddTicketCategory(props, args) {
  const [ExternalLink, SetExternalLink] = useState([
    {
      id: performance.now(),
      inputValue: "My Option",
    },
  ]);

  const addExternalLink = () => {
    let externalLinks = {
      id: performance.now(),
      inputValue: "My Option",
    };
    SetExternalLink((currentValue) => {
      return [...currentValue, externalLinks];
    });
  };

  const delelteExternalLink = (id) => {
    SetExternalLink((currentValue) =>
      currentValue.filter((link) => link.id !== id)
    );
  };
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
        <Modal
          scrollable={true}
          isOpen={modal}
          toggle={toggle}
          {...args}
          size="md"
        >
          <ModalHeader toggle={toggle}>
            <div className="d-flex gap-2">
              Filed Option
              <p className="add_button" onClick={addExternalLink}>
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8V16M8 12H16M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
                    stroke="#565656"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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
                        <select name="" id="" className="form-control">
                        <option value="">Open</option>
                            <option value="">Procurement</option>
                            <option value="">Maintenance</option>
                            <option value="">Incident</option>
                        </select> 
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
