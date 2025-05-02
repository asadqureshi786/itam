"use client";
import { Input, Form } from "reactstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "next/image";
import Link from "next/link";
// Icons

// Custom SASS
import "../../css/header.scss";
export default function Header() {
  return (
    <>
      <header>
        <div className="custom_form">
          <Form action="" method="POST">
            <div className="form-groups mb-0">
              <div className="relative">
                <span className="position-absolute header_search">
                  <svg
                    width="28px"
                    height="28px"
                    viewBox="-2.4 -2.4 28.80 28.80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#AEB7C0"
                    strokeWidth="0.00024000000000000003"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#CCCCCC"
                      strokeWidth="0.096"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M10.77 18.3C9.2807 18.3 7.82485 17.8584 6.58655 17.031C5.34825 16.2036 4.38311 15.0275 3.81318 13.6516C3.24325 12.2757 3.09413 10.7616 3.38468 9.30096C3.67523 7.84029 4.39239 6.49857 5.44548 5.44548C6.49857 4.39239 7.84029 3.67523 9.30096 3.38468C10.7616 3.09413 12.2757 3.24325 13.6516 3.81318C15.0275 4.38311 16.2036 5.34825 17.031 6.58655C17.8584 7.82485 18.3 9.2807 18.3 10.77C18.3 11.7588 18.1052 12.738 17.7268 13.6516C17.3484 14.5652 16.7937 15.3953 16.0945 16.0945C15.3953 16.7937 14.5652 17.3484 13.6516 17.7268C12.738 18.1052 11.7588 18.3 10.77 18.3ZM10.77 4.74999C9.58331 4.74999 8.42327 5.10189 7.43657 5.76118C6.44988 6.42046 5.68084 7.35754 5.22672 8.45389C4.77259 9.55025 4.65377 10.7566 4.88528 11.9205C5.11679 13.0844 5.68824 14.1535 6.52735 14.9926C7.36647 15.8317 8.43556 16.4032 9.59945 16.6347C10.7633 16.8662 11.9697 16.7474 13.0661 16.2933C14.1624 15.8391 15.0995 15.0701 15.7588 14.0834C16.4181 13.0967 16.77 11.9367 16.77 10.75C16.77 9.15869 16.1379 7.63257 15.0126 6.50735C13.8874 5.38213 12.3613 4.74999 10.77 4.74999Z"
                        fill="#AEB7C0"
                      />{" "}
                      <path
                        d="M20 20.75C19.9015 20.7504 19.8038 20.7312 19.7128 20.6934C19.6218 20.6557 19.5392 20.6001 19.47 20.53L15.34 16.4C15.2075 16.2578 15.1354 16.0697 15.1388 15.8754C15.1422 15.6811 15.221 15.4958 15.3584 15.3583C15.4958 15.2209 15.6812 15.1422 15.8755 15.1388C16.0698 15.1354 16.2578 15.2075 16.4 15.34L20.53 19.47C20.6704 19.6106 20.7493 19.8012 20.7493 20C20.7493 20.1987 20.6704 20.3893 20.53 20.53C20.4608 20.6001 20.3782 20.6557 20.2872 20.6934C20.1962 20.7312 20.0985 20.7504 20 20.75Z"
                        fill="#AEB7C0"
                      />{" "}
                    </g>
                  </svg>
                </span>

                <Input
                  type="text"
                  placeholder="Type to search..."
                  className="w-full form-control bg-transparent ps-3 pl-9 pr-4 font-medium focus:outline-none xl:w-125"
                />
              </div>
            </div>
          </Form>
        </div>

      <div className="main_content additions d-flex gap-4 align-items-center" >
           {/* Create ShortCut Element Section Start */}
           <Dropdown>
          <Dropdown.Toggle className="notification" id="dropdown-basic">
            <div className="shortCutButton">
              <div className="d-flex gap-1 align-items-center">
              <span className="text" >Create New</span>
              <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#d1d1d1" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z" fill="#d1d1d1"></path> </g></svg>
              </div> 
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <div className="" >
            <Dropdown.Item href="#/action-1">
              <div>
                <Link href="/add_assets" >
                {/* <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#d1d1d1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#d1d1d1" stroke-width="1.6799999999999997" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> */}
                <span>Asset</span>
                </Link>
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1">
              <div>
                <Link href="/add_license" >
              
                {/* <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#d1d1d1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#d1d1d1" stroke-width="1.6799999999999997" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> */}
                <span>License</span>
                </Link>
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1">
              <div>
                <Link href="/" >
            
                {/* <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#d1d1d1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#d1d1d1" stroke-width="1.6799999999999997" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> */}
                <span>Accessories</span>
                </Link>
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1">
              <div>
                <Link href="/" >
                {/* <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#d1d1d1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#d1d1d1" stroke-width="1.6799999999999997" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> */}
                <span>Consumables</span>
                </Link>
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1">
              <div>
                <Link href="/" >
             
                {/* <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#d1d1d1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#d1d1d1" stroke-width="1.6799999999999997" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> */}
                <span>Components</span>
                </Link>
              </div>
            </Dropdown.Item>
            </div>
          </Dropdown.Menu>
        </Dropdown>
        {/* Create ShortCut Element Section End */}
        {/* Notification Element Section End */}
        <Dropdown>
          <Dropdown.Toggle className="notification" id="dropdown-basic">
            <div className="notification_icon">
          
              <div className="switch_icon"></div>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <h5 className="head" >Notification</h5>
            <div className="main_content" >
            <Dropdown.Item href="#/action-1">
              <Image loading="lazy" width={20} height={20} src="/itam/images/user/user-05.png" alt="" />
              <div>
                <p className="big text">
                  <span className="name">John Doe: </span>
                  <span className="n_text">Lorem ipsum dolor sit amet.</span>
                </p>
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1">
              <Image loading="lazy" width={20} height={20} src="/itam/images/user/user-05.png" alt="" />
              <div>
                <p className="big text">
                  <span className="name">John Doe: </span>
                  <span className="n_text">Lorem ipsum dolor sit amet.</span>
                </p>
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1">
              <Image loading="lazy" width={20} height={20} src="/itam/images/user/user-05.png" alt="" />
              <div>
                <p className="big text">
                  <span className="name">John Doe: </span>
                  <span className="n_text">Lorem ipsum dolor sit amet.</span>
                </p>
              </div>
            </Dropdown.Item>
            </div>
          </Dropdown.Menu>
        </Dropdown>
        {/* Notification Element Section End */}  
      </div>
      </header>
    </>
  );
}
