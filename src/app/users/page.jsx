
"use client"
import Image from "next/image";

import CustomTable from "@/components/Tables/CustomTable";
import {Row, Col, Card, CardBody, Input} from 'reactstrap';

import Link from "next/link";

export default function Users(){

  
   // ALL Users Table Head Data
   const thead = [
    {
      key :'added_on',
      label : 'Added On',
    },
    {
      key :'user',
      label : 'User',
    },
    {
      key :'location',
      label : 'Location',
    },
    {
      key :'role',
      label : 'Role',
    },
    {
      key :'assigned',
      label : 'Assigned',
    },
    {
      key :'action',
      label : '',
    },
  ];

  // All Users Body Data
  const tbody = [
    {
      added_on : <div className="" >
        <p className="white big p-0 m-0">Jan 19,2022</p>
        <p className="white small p-0 m-0">3:45 pm</p>
      </div>,
      user : <div className="image_Box">
       <Image alt="" loading="lazy"width={20} height={20}src="/itam/images/user/user-01.png"  />
      <div>
        <p className="white big m-0 p-0">Esther Howard</p>
        <p className="small light_1">jessica.hanson@example.com</p>
      </div>
    </div>,
      location : <div>
        <p className="m-0 p-0 big light_1">7 Prairie Ave.</p>
        <p className="m-0 p-0 big light_1">Warwick, RI 02886</p>
      </div>,
      role : <div className="e_action role dynamic_col">Employee</div>,
      assigned : <div className="d-flex gap-2">
        <div className="icon_number">
          <span className="table_icon">
               <Image alt="" loading="lazy"src={'/itam/images/box.png'} width={20} height={20}/>
          </span>
          <span className="count">1</span>
        </div>
        <div className="icon_number">
          <span className="table_icon">
               <Image alt="" loading="lazy"src={'/itam/images/file.png'} width={20} height={20}/>
          </span>
          <span className="count">1</span>
        </div>
      </div>,
      action: <Link href="/user_view" className="table_icon">
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
    },
  ]
    
    return(
        <>
            <div className="licenses_page">
        <Card>
          <CardBody>
            <div className="custom_table">
            <Row>
                  <Col md="12">
                    <div className="table_head d-flex align-items-center justify-content-between">
                      <div className="f_col">
                        <h3 className="heading">All Users</h3>
                        <Link href="/user_view" className="add_button">
                          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M12 8V16M8 12H16M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="#565656" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </Link>
                      </div>
                      <div className="filter">
                        <select name="" id="">
                          <option value="">All Users</option>
                          <option value="">Option 1</option>
                          <option value="">Option 2</option>
                        </select>
                        <div className="search_table">
                          <span className="search_icon">
                            {/*   <svg
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
                        </svg> */}
                          </span>
                          <Input
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
            </div>
          </CardBody>
        </Card>
      </div>
        </>
    )
}