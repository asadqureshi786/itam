import {Button,Row,Col} from 'reactstrap';

export default function ProcurementFormHead({headName,notDelete,notOrder,hideModal}){
    return (
        <>
              <div className="form_head  side_canvas">
                <Row className="align-items-center">
                  <Col md="4" className="d-flex align-items-center gap-2">
                  <button type="button" onClick={hideModal} className="Head_Back" data-bs-dismiss="offcanvas" aria-label="Close" >
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#8897AE"/>
                    </svg>
                  </button>
                    <div>
                    <h6 className="title" >{headName}</h6>
                    <span className="light_color sub_title p-0 m-0">Details</span>
                    </div>
                  </Col>
                  <Col md="8">
                    <div className="action_btn">
                        {
                          (notDelete) ? '' : <Button color="btn delete ">Delete</Button> 
                        }
                        <Button color="btn cancel"> Edit</Button>
                        {
                          (notOrder) ? <Button color="btn update ">View</Button> :  <Button color="btn update ">Order</Button> 
                        }
                    </div>
                  </Col>
                </Row>
            </div>
        </>
    )
}