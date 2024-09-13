import {Input, Row, Col} from 'reactstrap';
import CustomTable from "@/components/Tables/CustomTable";
import AddCustomField from "@/components/Settings/AddCustomField";

// Use Icons


export default function CustomFields(){

   // ALL Users Table Head Data
   const thead = [
    {
      key :'name',
      label : 'Name',
    },
  ];

  // All Users Body Data
  const tbody = [
    {
      name :  <AddCustomField tdName="Manufacturer Companies"/>,
    },
    {
      name :  <AddCustomField tdName="Asset Types"/>,
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
                        <h3 className="heading mb-0">Custom Fields</h3>
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