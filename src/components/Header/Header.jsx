"use client";
import { Input, Form } from "reactstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "next/image";
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
        <Dropdown>
          <Dropdown.Toggle className="notification" id="dropdown-basic">
            <div className="notification_icon">
              <svg
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 1.25C7.71983 1.25 4.25004 4.71979 4.25004 9V9.7041C4.25004 10.401 4.04375 11.0824 3.65717 11.6622L2.50856 13.3851C1.17547 15.3848 2.19318 18.1028 4.51177 18.7351C5.26738 18.9412 6.02937 19.1155 6.79578 19.2581L6.79768 19.2632C7.56667 21.3151 9.62198 22.75 12 22.75C14.378 22.75 16.4333 21.3151 17.2023 19.2632L17.2042 19.2581C17.9706 19.1155 18.7327 18.9412 19.4883 18.7351C21.8069 18.1028 22.8246 15.3848 21.4915 13.3851L20.3429 11.6622C19.9563 11.0824 19.75 10.401 19.75 9.7041V9C19.75 4.71979 16.2802 1.25 12 1.25ZM15.3764 19.537C13.1335 19.805 10.8664 19.8049 8.62349 19.5369C9.33444 20.5585 10.571 21.25 12 21.25C13.4289 21.25 14.6655 20.5585 15.3764 19.537ZM5.75004 9C5.75004 5.54822 8.54826 2.75 12 2.75C15.4518 2.75 18.25 5.54822 18.25 9V9.7041C18.25 10.6972 18.544 11.668 19.0948 12.4943L20.2434 14.2172C21.0086 15.3649 20.4245 16.925 19.0936 17.288C14.4494 18.5546 9.5507 18.5546 4.90644 17.288C3.57561 16.925 2.99147 15.3649 3.75664 14.2172L4.90524 12.4943C5.45609 11.668 5.75004 10.6972 5.75004 9.7041V9Z"
                  fill="#AEB7C0"
                />
              </svg>
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
      </header>
    </>
  );
}
