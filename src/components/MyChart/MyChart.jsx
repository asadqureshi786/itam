"use client";
import React from "react";
import { Row, Col, Card, Button, CardBody } from "reactstrap";
import ChartOne from "@/components/Charts/ChartOne";
import ChartThree from "@/components/Charts/ChartThree";
export default function MyChart(){
    return(
        <>
           <div className="chart_section mt-3">
 <Row>
    <Col md="9">
      <Card>
        <CardBody>
          <div className="chard_head">
            <div className="data_side">
              <h5 className="head text-white">Maintenance Cost</h5>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center mt-1 gap-2">
                  <h2 className="prices text-white">$12.7K</h2>
                  <div className="d-flex ms-4 gap-4">
                    <div className="d-flex align-items-center gap-2">
                      <div className="arrow_icon">
                        <svg
                          width="16px"
                          height="16px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 20L12 4M12 4L18 10M12 4L6 10"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="growth_rate text-white">1.3%</span>
                    </div>
                    <span className="duration text-white">
                      since last year
                    </span>
                  </div>
                </div>
                <div className="flex w-full max-w-45 justify-end">
                  <div className="maintaince_filter  inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
                    <Button color="rounded px-3 py-1 text-xs font-medium  ">
                      Day
                    </Button>
                    <Button color="rounded px-3 py-1 text-xs font-medium active  ">
                      Week
                    </Button>
                    <Button color="rounded px-3 py-1 text-xs font-medium">
                      Month
                    </Button>
                  </div>
                </div>
              </div>
              <ChartOne />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
    <Col md="3">
      <Card>
        <CardBody className="align-items-center d-flex flex-column justify-content-between">
          <div className="chard_head w-100">
            <div className="data_side d-flex justify-content-between">
              <h5 className="head">Assets Overview</h5>
              <span className="text-white" >1D</span>
            </div>
          </div>
          <ChartThree />
        </CardBody>
      </Card>
    </Col>
  </Row>
  </div>
        </>
    )
}