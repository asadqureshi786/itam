import {Row,Col,Card,CardBody,Button} from "reactstrap";
import CustomTable from "@/components/Tables/CustomTable";
import Link from "next/link";
import Image from "next/image";



export default function Discover(){
   // Tracking Table Head
   const Tracking_Head = [
    { key: "status", label: "Status" },
    { key: "device_name", label: "Device Name" },
    { key: "assigned_to", label: "Assigned To" },
    { key: "os", label: "OS" },
    { key: "ram", label: "RAM" },
    { key: "manufacturer", label: "Manufacturer" },
    { key: "model", label: "Model" },
    { key: "cpu", label: "CPU" },
    { key: "action", label: "" },
  ];

  // Tracking Table Body
  const Tracking_Body = [
    {
      status: <div className="e_status available dynamic_col ">Online</div>,
      device_name: <p className="white big m-0 p-0">DESKTOP-0098VB</p>,
      assigned_to: (
        <div className="image_Box">
           <Image alt="" loading="lazy"width={20} height={20} src="/itam/images/user/user-01.png"  />
          <div>
            <p className="white big m-0 p-0">Lon jana</p>
            <p className="small light_1">lon.janan@example.com</p>
          </div>
        </div>
      ),
      os: <p className="light   m-0 p-0">Win 10</p>,
      ram: <p className="light   m-0 p-0">32gb</p>,
      manufacturer: <p className="light   m-0 p-0">Lenovo</p>,
      model: <p className="light   m-0 p-0">JSP20023R</p>,
      cpu: <p className="light   m-0 p-0">i7-Gen 12</p>,
      action: (
        <Link href="asset_management" className="table_icon">
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
        </Link>
      ),
    },
  ];

    return(
        <>
             <div className="asset_discover tab_height_adjust d-none text-center">
            <div className="content">
              <div className="image_box">
                <Image
                  width={20}
                  height={20}
                  src="/itam/images/radar.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <h1>Discover Your Assets</h1>
              <p className="f-15 light_color m-0 mb-4 mt-2 p-0">
                Network Discovery finds all devices connected to a network (WiFi
                or ethernet). 
              </p>
              <Button color="btn update">Find Assets on Network</Button>

              <p className="f-15 light_color m-0 mt-2 p-0">
                <small>Locate Manually</small> 
              </p>
            </div>
          </div>

          <div className="custom_table mt-3">
            <Card>
              <CardBody>
                <Row>
                  <Col md="12">
                    <div className="table_head d-flex align-items-center justify-content-between">
                      <div className="f_col">
                        <h3 className="heading">All Devices</h3>
                        {/* <Link href="" className="add_button">
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
                        </Link> */}
                      </div>
                      <div className="filter">
                        <Button color="btn btn-primary">
                          Export
                          <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 15V18H20V15"
                              stroke="#565656"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 6L12 14"
                              stroke="#565656"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 6L15 8.5"
                              stroke="#565656"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 6L9 8.5"
                              stroke="#565656"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Button>
                        <Button color="btn btn-primary">
                          Import
                          <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="Arrow / Arrow_Down_SM">
                              <path
                                id="Vector"
                                d="M12 7V17M12 17L16 13M12 17L8 13"
                                stroke="#565656"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                          </svg>
                        </Button>
                        <select name="" id="">
                          <option value="">All Assets</option>
                          <option value="">Option 1</option>
                          <option value="">Option 2</option>
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
                          <input
                            type=""
                            placeholder="Search"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="table_body">
                    <CustomTable theadName={Tracking_Head} BoydData={Tracking_Body} />

                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </>
    )
}