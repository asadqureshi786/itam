import {Input, Row, Col} from 'reactstrap';
import CustomTable from "@/components/Tables/CustomTable";
import ActionDropdown from "@/components/ActionDropdown/ActionDropdown";
import AddSupplier from "@/components/Settings/AddSupplier"
import Image from "next/image";

// Use Icons



export default function Suppliers(){

   // ALL Users Table Head Data
   const thead = [
    {
      key :'added_on',
      label : 'Added On',
    },
    {
      key :'manufactures',
      label : 'Manufactures',
    },
    {
      key :'company',
      label : 'Company',
    },
    {
      key :'location',
      label : 'Location',
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
      manufactures : <div className="image_Box">
       <Image alt="" loading="lazy"width={20} height={20} src="/itam/images/user/user-01.png"  />
      <div>
        <p className="white big m-0 p-0">Esther Howard</p>
        <p className="small light_1">jessica.hanson@example.com</p>
      </div>
    </div>,
    company : 
      <p className="white light_1 p-0 m-0">Louis Vuitton</p>
      ,
      location : <div>
        <p className="m-0 p-0  light_1">7 Prairie Ave.</p>
        <p className="m-0 p-0  light_1">Warwick, RI 02886</p>
      </div>,
      role : <div className="e_action role dynamic_col">Employee</div>,
      assigned : <div className="d-flex gap-2">
        <div className="icon_number">
         
          <span className="count">1</span>
        </div>
        <div className="icon_number">
         
          <span className="count">1</span>
        </div>
      </div>,
      action: <ActionDropdown/>
    },
    {
        added_on : <div className="" >
          <p className="white big p-0 m-0">Jan 19,2022</p>
          <p className="white small p-0 m-0">3:45 pm</p>
        </div>,
        manufactures : <div className="image_Box">
         <Image alt="" loading="lazy"width={20} height={20} src="/itam/images/user/user-02.png"  />
        <div>
          <p className="white big m-0 p-0">Wade Warren</p>
          <p className="small light_1">willie.jennings@example.com</p>
        </div>
      </div>,
      company : 
        <p className="white light_1 p-0 m-0">Mitsubishi</p>
        ,
        location : <div>
          <p className="m-0 p-0  light_1">7 Prairie Ave.</p>
          <p className="m-0 p-0  light_1">Warwick, RI 02886</p>
        </div>,
        role : <div className="e_action role dynamic_col">Employee</div>,
        assigned : <div className="d-flex gap-2">
          <div className="icon_number">
           
            <span className="count">1</span>
          </div>
          <div className="icon_number">
           
            <span className="count">1</span>
          </div>
        </div>,
        action: <ActionDropdown/>
      },
      {
        added_on : <div className="" >
          <p className="white big p-0 m-0">Jan 19,2022</p>
          <p className="white small p-0 m-0">3:45 pm</p>
        </div>,
        manufactures : <div className="image_Box">
         <Image alt="" loading="lazy"width={20} height={20} src="/itam/images/user/user-03.png"  />
        <div>
          <p className="white big m-0 p-0">Darrell Steward</p>
          <p className="small light_1">georgia.young@example.com</p>
        </div>
      </div>,
      company : 
        <p className="white light_1 p-0 m-0">Apple</p>
        ,
        location : <div>
          <p className="m-0 p-0  light_1">7 Prairie Ave.</p>
          <p className="m-0 p-0  light_1">Warwick, RI 02886</p>
        </div>,
        role : <div className="e_action role dynamic_col">Employee</div>,
        assigned : <div className="d-flex gap-2">
          <div className="icon_number">
           
            <span className="count">1</span>
          </div>
          <div className="icon_number">
           
            <span className="count">1</span>
          </div>
        </div>,
        action: <ActionDropdown/>
      },
      {
        added_on : <div className="" >
          <p className="white big p-0 m-0">Jan 19,2022</p>
          <p className="white small p-0 m-0">3:45 pm</p>
        </div>,
        manufactures : <div className="image_Box">
         <Image alt="" loading="lazy"width={20} height={20} src="/itam/images/user/user-05.png" />
        <div>
          <p className="white big m-0 p-0">Floyd Miles</p>
          <p className="small light_1">dolores.chambers@example.com</p>
        </div>
      </div>,
      company : 
        <p className="white light_1 p-0 m-0">Pizza Hut</p>
        ,
        location : <div>
          <p className="m-0 p-0  light_1">7 Prairie Ave.</p>
          <p className="m-0 p-0  light_1">Warwick, RI 02886</p>
        </div>,
        role : <div className="e_action role dynamic_col">Employee</div>,
        assigned : <div className="d-flex gap-2">
          <div className="icon_number">
           
            <span className="count">1</span>
          </div>
          <div className="icon_number">
           
            <span className="count">1</span>
          </div>
        </div>,
        action: <ActionDropdown/>
      },
      {
        added_on : <div className="" >
          <p className="white big p-0 m-0">Jan 19,2022</p>
          <p className="white small p-0 m-0">3:45 pm</p>
        </div>,
        manufactures : <div className="image_Box">
         <Image alt="" loading="lazy"width={20} height={20} src="/itam/images/user/user-01.png"  />
        <div>
          <p className="white big m-0 p-0">Esther Howard</p>
          <p className="small light_1">jessica.hanson@example.com</p>
        </div>
      </div>,
      company : 
        <p className="white light_1 p-0 m-0">Tata</p>
        ,
        location : <div>
          <p className="m-0 p-0  light_1">7 Prairie Ave.</p>
          <p className="m-0 p-0  light_1">Warwick, RI 02886</p>
        </div>,
        role : <div className="e_action role dynamic_col">Employee</div>,
        assigned : <div className="d-flex gap-2">
          <div className="icon_number">
           
            <span className="count">1</span>
          </div>
          <div className="icon_number">
           
            <span className="count">1</span>
          </div>
        </div>,
        action: <ActionDropdown/>
      },
  ]

    return(
        <>
            <div className="settings_table">
            <div className="custom_table">
            <Row>
                  <Col md="12">
                    <div className="table_head d-flex align-items-center justify-content-between">
                      <div className="f_col">
                        <h3 className="heading mb-0">All Suppliers</h3>
                        <AddSupplier/>
                      </div>
                      <div className="filter">
                        <div className="search_table">
                          <span className="search_icon">
                              <svg
                              width=""
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
            </div>
        </>
    )
}