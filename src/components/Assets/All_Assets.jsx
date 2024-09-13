import {Row,Col,Card,CardBody,Button} from "reactstrap";
import CustomTable from "@/components/Tables/CustomTable";
import Link from "next/link";
import ActionDropdown from "@/components/ActionDropdown/ActionDropdown";
import Image from "next/image";


export default function All_Assets(){

    // ALL Assets Table Head Data
    const thead = [
      {
        key: "added_on",
        label: "Added On",
      },
      {
        key: "assets",
        label: "Assets",
      },
      {
        key: "user",
        label: "User",
      },
      {
        key: "location",
        label: "Location",
      },
      {
        key: "action",
        label: "Action",
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
  
    // All Assets Body Data
    const tbody = [
      {
        added_on: (
          <div className="">
            <p className="white big m-0 p-0">Jan 19,2022</p>
            <p className="white small m-0 p-0">3:45 pm</p>
          </div>
        ),
        assets: (
          <div className="image_Box">
             <Image  loading="lazy"width={20} height={20} src={"/itam/images/mac.png"} alt="" />
            <div>
              <p className="white big m-0 p-0">Macbook 13” 2024</p>
              <div className="d-flex align-items-center">
                <p className="small white">ID#</p>
                <p className="small light_1">MNPD00002342</p>
              </div>
            </div>
          </div>
        ),
        user: (
          <div className="image_Box">
            <Image
              width={20}
              height={20}
              src={"/itam/images/user/user-01.png"}
              alt=""
            />
            <div>
              <p className="white big m-0 p-0">Esther Howard</p>
              <p className="small light_1">jessica.hanson@example.com</p>
            </div>
          </div>
        ),
        location: (
          <div className="">
            <p className="light_1 big m-0 p-0">7 Prairie Ave.</p>
            <p className="light_1 small m-0 p-0">Warwick, RI 02886</p>
          </div>
        ),
        action: <div className="e_action  checkIn dynamic_col">Check IN</div>,
        status: <div className="e_status assigned dynamic_col ">Assigned</div>,
        actions: <ActionDropdown view_href="#" edit_href="#" delete_href="#" />,
      },
      {
        added_on: (
          <div className="">
            <p className="white big m-0 p-0">Jan 19,2022</p>
            <p className="light small m-0 p-0">3:45 pm</p>
          </div>
        ),
        assets: (
          <div className="image_Box">
             <Image alt="" loading="lazy"width={20} height={20} src={"/itam/images/mac.png"}  />
            <div>
              <p className="white big m-0 p-0">Macbook 13” 2024</p>
              <div className="d-flex align-items-center">
                <p className="small white">ID#</p>
                <p className="small light_1">MNPD00002342</p>
              </div>
            </div>
          </div>
        ),
        user: (
          <div className="image_Box">
            <Image
              width={20}
              height={20}
              src={"/itam/images/user/user-01.png"}
              alt=""
            />
            <div>
              <p className="white big m-0 p-0">Lon jana</p>
              <p className="small light_1">lon.janan@example.com</p>
            </div>
          </div>
        ),
        location: (
          <div className="">
            <p className="light_1 big m-0 p-0">7 Prairie Ave.</p>
            <p className="light_1 small m-0 p-0">Warwick, RI 02886</p>
          </div>
        ),
        action: <div className="e_action  checkOut dynamic_col">Check Out</div>,
        status: <div className="e_status available dynamic_col ">Available</div>,
        actions: <ActionDropdown view_href="#" edit_href="#" delete_href="#" />,
      },
    ];

    
    return(
        <>
           <div className="custom_table mt-3">
            <Card>
              <CardBody>
                <Row>
                  <Col md="12">
                    <div className="table_head d-flex align-items-center justify-content-between">
                      <div className="f_col">
                        <h3 className="heading">All Assets</h3>
                        <Link href="add_assets" className="add_button">
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
                      <CustomTable theadName={thead} BoydData={tbody} />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </>
    )
}