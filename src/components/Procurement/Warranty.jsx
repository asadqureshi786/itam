import { FormGroup, Input, Label, Row, Col } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import CustomTable from "@/components/Tables/CustomTable";
import ProcurementFormHead from "@/components/ProcurementFormHead/ProcurementFormHead";
// Flatpickr Import
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
export default function Warranty() {
  const [date, setDate] = useState(new Date());

  // Table Warranty Head Data
  const warrantyhead = [
    {
      key: "device",
      label: "Device",
    },
    {
      key: "company",
      label: "Company",
    },
    {
      key: "date",
      label: "Date",
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
  // Table Warranty Body Data
  const warrantybody = [
    {
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
              <p className="small white">ID#</p>
              <p className="small light_1">MNPD00002342</p>
            </div>
          </div>
        </div>
      ),
      company: <p className="light m-0 p-0">Win 10</p>,
      date: <p className="light m-0 p-0">Win 10</p>,
      status: <div className="e_status shine dynamic_col ">Assigned</div>,
      actions: (
        <div className="table_icon click" onClick={handleWarranty}>
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
              <p className="small white">ID#</p>
              <p className="small light_1">MNPD00002342</p>
            </div>
          </div>
        </div>
      ),
      company: <p className="light m-0 p-0">Win 10</p>,
      date: <p className="light m-0 p-0">Win 10</p>,
      status: <div className="e_status greenish dynamic_col ">Active</div>,
      actions: (
        <div className="table_icon click" onClick={handleWarranty}>
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
              <p className="small white">ID#</p>
              <p className="small light_1">MNPD00002342</p>
            </div>
          </div>
        </div>
      ),
      company: <p className="light m-0 p-0">Win 10</p>,
      date: <p className="light m-0 p-0">Win 10</p>,
      status: <div className="e_status greenish dynamic_col ">Active</div>,
      actions: (
        <div className="table_icon click" onClick={handleWarranty}>
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
              <p className="small white">ID#</p>
              <p className="small light_1">MNPD00002342</p>
            </div>
          </div>
        </div>
      ),
      company: <p className="light m-0 p-0">Win 10</p>,
      date: <p className="light m-0 p-0">Win 10</p>,
      status: <div className="e_status greenish dynamic_col ">Active</div>,
      actions: (
        <div className="table_icon click" onClick={handleWarranty}>
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
              <p className="small white">ID#</p>
              <p className="small light_1">MNPD00002342</p>
            </div>
          </div>
        </div>
      ),
      company: <p className="light m-0 p-0">Win 10</p>,
      date: <p className="light m-0 p-0">Win 10</p>,
      status: <div className="e_status greenish dynamic_col ">Active</div>,
      actions: (
        <div className="table_icon click" onClick={handleWarranty}>
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

  // Show Maintenance Views
  const [warrantyshow, warrantysetShow] = useState(false);
  function handleWarranty() {
    warrantysetShow(true);
  }
  function HideWarrantyModal() {
    warrantysetShow(false);
  }

  return (
    <>
      <div className="custom_table">
        <div className="table_head d-flex align-items-center justify-content-between">
          <div className="f_col">
            <h3 className="heading">Warranty</h3>
          </div>
          <div className="filter custom_form">
          <div className="form-groups mb-0 pb-0">
              <Flatpickr
                className="form-control"
                value={date}
                onChange={([selectedDate]) => setDate(selectedDate)}
              />
              <span className="form_icon">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                    stroke="#8897AE"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
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
          <CustomTable theadName={warrantyhead} BoydData={warrantybody} />
        </div>

        {/* View All Warranty  */}
        <Offcanvas show={warrantyshow} className="card" placement="end">
          <div className="p-3">
            <ProcurementFormHead
              hideModal={HideWarrantyModal}
              notOrder="not"
              notDelete="not"
              headName="Request# 0072"
            />
          </div>
          <Offcanvas.Body>
            <h6 className="mb-4">Warranty Details</h6>
            <div className="product_details custom_form">
              <FormGroup className="form-groups">
                <Row className="align-items-center">
                  <Col md="4">
                    <Label htmlFor="">Status</Label>
                  </Col>
                  <Col md="8">
                    <Input
                      type="text"
                      className="light_status form-control"
                      value="Pending"
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup className="form-groups">
                <Row className="align-items-center">
                  <Col md="4">
                    <Label htmlFor="">Start on</Label>
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
                    <Label htmlFor="">Expiry</Label>
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
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}
