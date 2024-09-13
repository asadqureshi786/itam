import { FormGroup, Input, Label, Row, Col } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import CustomTable from "@/components/Tables/CustomTable";
import ProcurementFormHead from "@/components/ProcurementFormHead/ProcurementFormHead";
import TextArea from "@/components/Textarea/Textarea"

export default function All_Orders() {
  // ALL Orders Table Head Data
  const AllOrdersHead = [
    {
      key: "added_on",
      label: "Added On",
    },
    {
      key: "user",
      label: "User",
    },
    {
      key: "device",
      label: "Device",
    },
    {
      key: "company",
      label: "Company",
    },
    {
      key: "status",
      label: "Status",
    },
    {
      key: "actions",
      label: "",
    },
  ];

  // All Order Body Data
  const AllOrdersBody = [
    {
      added_on: (
        <div className="">
          <p className="white big m-0 p-0">Jan 19,2022</p>
          <p className="white small m-0 p-0">3:45 pm</p>
        </div>
      ),
      user: (
        <div>
          <p className="white big m-0 p-0">Order# 0990983</p>
          <div className="d-flex align-items-center">
            <p className="small light_1">Placed by: </p>
            <Link href="#" className="small custom_link">
              John Doe
            </Link>
          </div>
        </div>
      ),
      device: (
        <div className="image_Box">
         <Image
            loading="lazy"
            width={20}
            height={20}
            src="/itam/images/mac.png"
            alt=""
          />
          <div>
            <p className="white big m-0 p-0">Macbook 13” 2024</p>
            <div className="d-flex align-items-center">
              <Link href="#" className="small custom_link m-0">
                Edward Hawkins
              </Link>
            </div>
          </div>
        </div>
      ),
      company: <div className="light_1">Star Co.</div>,
      status: <div className="e_action  shine dynamic_col">Pending</div>,
      actions: (
        <div className="table_icon click" onClick={handleOrder}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
              fill=""
            />
          </svg>
        </div>
      ),
    },
    {
      added_on: (
        <div className="">
          <p className="white big m-0 p-0">Jan 19,2022</p>
          <p className="white small m-0 p-0">3:45 pm</p>
        </div>
      ),
      user: (
        <div>
          <p className="white big m-0 p-0">Order# 0990983</p>
          <div className="d-flex align-items-center">
            <p className="small light_1">Placed by: </p>
            <Link href="#" className="small custom_link">
              John Doe
            </Link>
          </div>
        </div>
      ),
      device: (
        <div className="image_Box">
         <Image
            loading="lazy"
            width={20}
            height={20}
            src="/itam/images/mac.png"
            alt=""
          />
          <div>
            <p className="white big m-0 p-0">Macbook 13” 2024</p>
            <div className="d-flex align-items-center">
              <Link href="#" className="small custom_link m-0">
                Edward Hawkins
              </Link>
            </div>
          </div>
        </div>
      ),
      company: <div className="light_1">Star Co.</div>,
      status: <div className="e_action  shine dynamic_col">Pending</div>,
      actions: (
        <div className="table_icon click" onClick={handleOrder}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
              fill=""
            />
          </svg>
        </div>
      ),
    },
    {
      added_on: (
        <div className="">
          <p className="white big m-0 p-0">Jan 19,2022</p>
          <p className="white small m-0 p-0">3:45 pm</p>
        </div>
      ),
      user: (
        <div>
          <p className="white big m-0 p-0">Order# 0990983</p>
          <div className="d-flex align-items-center">
            <p className="small light_1">Placed by: </p>
            <Link href="#" className="small custom_link">
              John Doe
            </Link>
          </div>
        </div>
      ),
      device: (
        <div className="image_Box">
         <Image
            loading="lazy"
            width={20}
            height={20}
            src="/itam/images/mac.png"
            alt=""
          />
          <div>
            <p className="white big m-0 p-0">Macbook 13” 2024</p>
            <div className="d-flex align-items-center">
              <Link href="#" className="small custom_link m-0">
                Edward Hawkins
              </Link>
            </div>
          </div>
        </div>
      ),
      company: <div className="light_1">Star Co.</div>,
      status: <div className="e_action  shine dynamic_col">Pending</div>,
      actions: (
        <div className="table_icon click" onClick={handleOrder}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
              fill=""
            />
          </svg>
        </div>
      ),
    },
  ];

  // Show Order Views
  const [ordershow, ordersetShow] = useState(false);
  function handleOrder() {
    ordersetShow(true);
  }
  function HideOrderModal() {
    ordersetShow(false);
  }
  return (
    <>
      <div className="custom_table">
        <div className="table_head d-flex align-items-center justify-content-between">
          <div className="f_col">
            <h3 className="heading">All Orders</h3>
            <Link href="add_order" className="add_button">
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
            </Link>
          </div>
          <div className="filter">
            <select name="" id="">
              <option value="">Status</option>
              <option value="">Active</option>
              <option value="">Unactive</option>
            </select>
            <div className="search_table">
              <span className="search_icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                    stroke=""
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <Input type="" placeholder="Search" className="form-control" />
            </div>
          </div>
        </div>

        <div className="table_body">
          <CustomTable theadName={AllOrdersHead} BoydData={AllOrdersBody} />
        </div>

        {/* View All Order */}
        <Offcanvas show={ordershow} className="card" placement="end">
          <div className="p-3">
            <ProcurementFormHead
              hideModal={HideOrderModal}
              headName="Request# 0072"
            />
          </div>
          <Offcanvas.Body>
            <h6 className="mb-4">Procurement Details</h6>
            <div className="product_details custom_form">
              <FormGroup className="form-groups">
                <Row className="align-items-center">
                  <Col md="4">
                    <Label htmlFor="">Order No.</Label>
                  </Col>
                  <Col md="8">
                    <Input
                      type="text"
                      className="form-control"
                      value="46464000"
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup className="form-groups">
                <Row className="align-items-center">
                  <Col md="4">
                    <Label htmlFor="">Purchase Date</Label>
                  </Col>
                  <Col md="8">
                    <Input
                      type="text"
                      className="form-control"
                      value="19/02/2024"
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup className="form-groups">
                <Row className="align-items-center">
                  <Col md="4">
                    <Label htmlFor="">Supplier</Label>
                  </Col>
                  <Col md="8">
                    <Input
                      type="text"
                      className="form-control"
                      value="Star Co."
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup className="form-groups">
                <Row className="align-items-center">
                  <Col md="4">
                    <Label htmlFor="">Purchase Cost</Label>
                  </Col>
                  <Col md="8">
                    <Input
                      type="text"
                      className="form-control"
                      value="$ 1500"
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup className="form-groups">
                <Row className="align-items-center">
                  <Col md="4">
                    <Label htmlFor="">External Link</Label>
                  </Col>
                  <Col md="8">
                    <Input
                      type="text"
                      className="form-control"
                      value="www.productlink.com/product1"
                    />
                  </Col>
                </Row>
              </FormGroup>

              <hr />
            </div>
            <h6 className="mb-4">Product Details</h6>
            <div className="product_details custom_form">
              <FormGroup className="form-groups">
                <Row className="align-items-center">
                  <Col md="4">
                    <Label htmlFor="">Product Image</Label>
                  </Col>
                  <Col md="8">
                    <div className="image_showing">
                      <Image
                        alt=""
                        loading="lazy"
                        width={20}
                        height={20}
                        src="/itam/images/mac.png"
                      />
                    </div>
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup className="form-groups">
                <Row className="align-items-center">
                  <Col md="4">
                    <Label htmlFor="">Asset Type</Label>
                  </Col>
                  <Col md="8">
                    <Input
                      type="text"
                      className="form-control"
                      value="Laptop"
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup className="form-groups">
                <Row className="align-items-center">
                  <Col md="4">
                    <Label htmlFor="">Company</Label>
                  </Col>
                  <Col md="8">
                    <Input type="text" className="form-control" value="Dell" />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup className="form-groups">
                <Row className="align-items-center">
                  <Col md="4">
                    <Label htmlFor="">Serial No</Label>
                  </Col>
                  <Col md="8">
                    <Input type="text" className="form-control" value="-" />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup className="form-groups">
                <Row className="align-items-center">
                  <Col md="4">
                    <Label htmlFor="">Model</Label>
                  </Col>
                  <Col md="8">
                    <Input
                      type="text"
                      className="form-control"
                      value="i5 12th Gen"
                    />
                  </Col>
                </Row>
              </FormGroup>

              <hr />

              <h6 className="mb-3">User Detail</h6>
              <div className="user_detail_card">
                <ul>
                  <li>
                    <p className="light_color text">Requested by</p>
                    <p className="text underline">James Smith</p>
                  </li>
                  <li>
                    <p className="light_color text">Email Address</p>
                    <p className="light_color text">james@gmail.com</p>
                  </li>
                  <li>
                    <p className="light_color text">Location</p>
                    <p className="light_color text">
                      Office Suite 546, New York
                    </p>
                  </li>
                  <li>
                    <p className="light_color text">Department</p>
                    <p className="light_color text">Human Resource</p>
                  </li>
                </ul>
              </div>

              <h6 className="mb-4">Notes</h6>
              <FormGroup className="form-groups">
                <Row className="align-items-center">
                  <Col md="12">
                  <TextArea/>
                  </Col>
                </Row>
              </FormGroup>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}
