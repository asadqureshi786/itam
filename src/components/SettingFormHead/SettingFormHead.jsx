
import {Button,Row,Col} from 'reactstrap';
export default function ProcurementFormHead({headName}){
    return (
        <>
              <div className="form_head  side_canvas">
                <Row className=" align-items-center">
                  <Col md="4" className="d-flex align-items-center gap-2">
                    <div>
                    <h6 className="title" >{headName}</h6>
                    <span className="light_color sub_title p-0 m-0">Details</span>
                    </div>
                  </Col>
                  <Col md="8">
                    <div className="action_btn">
                        <Button color="btn cancel"> Cancel</Button>
                        <Button color="btn full_blue btn">Delete</Button>
                    </div>
                  </Col>
                </Row>
            </div>
        </>
    )
}