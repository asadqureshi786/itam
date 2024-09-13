"use client";
import { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody,Form,FormGroup,Input,Label, ModalFooter,Row,Col } from "reactstrap";



export default function AddAdditionalFields(props, args) {

  const [FieldName,SetFieldName] = useState("Byod");
  const [FieldType,SetFieldType] = useState(["Text","Email","Password","Select","Radio","CheckBox","Textarea"]);


  const set_Filed_Name = (e) =>{
    SetFieldName(e.target.value)
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
              Add Additional Field
            </div>
          </ModalHeader>
          <ModalBody>
            <Form action="">
              <div className="custom_form">
                <Row>
                    <Col md="12">
                      <FormGroup className="form-groups">
                        <Label htmlFor="">Field Name</Label>
                        <div className="procurement_link d-flex align-items-center gap-3">
                          <Input type="text" value={FieldName} onChange={set_Filed_Name} className="form-control" />
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md="12">
                        <FormGroup className="form-groups">
                            <Label htmlFor="">Field Type</Label>
                            <select name="" className="form-control" id="">
                            {
                                FieldType.map((selectOption , index)=>(
                                    <option key={index} value="">{selectOption}</option>
                                ))
                            }
                          </select>
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
