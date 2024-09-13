
// Alert
import {Button,Row,Col} from 'reactstrap';
import Alert from '@/components/Alert/Alert'
export default function Form_head({headName,action_btn}){
    return (
        <>
            <div className="form_head ">
                <Row className="align-items-center">
                  <Col md="4">
                    <h6 className="title" >{headName}</h6>
                    <span className="light_color sub_title p-0 m-0">Details</span>
                  </Col>
                  <Col md="8">
                    <div className="action_btn">
                        <Button color="btn btn delete ">Delete</Button>
                        <Alert/>
                        <Button color="btn btn update ">
                          {
                            (action_btn) ? action_btn : 'Update'
                          }
                        </Button>
                    </div>
                  </Col>
                </Row>
            </div>
        </>
    )
}