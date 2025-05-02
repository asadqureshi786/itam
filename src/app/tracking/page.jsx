"use client";

import { Row, Col, Card, CardBody, Button } from "reactstrap";

import Link from "next/link";
import Image from "next/image";
export default function Tracking_Fun() {

  const svg = `  <svg
                                viewBox="0 0 15 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.86682 6.84058L5.22864 10.2024L13.6332 1.79785"
                                  stroke="url(#paint0_linear_730_4436)"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_730_4436"
                                    x1="7.75"
                                    y1="1.79785"
                                    x2="7.75"
                                    y2="10.2024"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#1B4DFF" />
                                    <stop offset="1" stop-color="#102E99" />
                                  </linearGradient>
                                </defs>
                              </svg>`

  return (
    <>
      <div className="tracking_packages">
        <Row className="justify-content-center">
          <Col md="10">
            <Card>
              <CardBody>
                <Row>
                  <div className="p-3 px-4">
                    <h5 className="text-white f20 fw5 m-0 p-0 ">
                      Subscribe and Unlock Premium features
                    </h5>
                    <p className="m-0 mt-1 p-0 f15 light_color fw4">
                      You're currently on the Free Plan. To take your experience
                      next level subscribe with our paid plans
                    </p>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

      <div className="price_section">
      <Row className="justify-content-center">
          <Col md="10">
            <Row>
              <Col md="4">
                <div className="basic price_card">
                <Image
                  width={20}
                  height={20}
                  src="/images/price_back.png"
                  className="img-fluid price_back"
                  alt=""
                />
                  <Card className="p-3 px-3">
                    <CardBody>
                      <div className="head">
                        <div className="box"></div>
                        <div className="dts">
                          <p className="package light f16 white m-0 p-0">
                            For individuals
                          </p>
                          <p className="type white f20 fw5 m-0 p-0">Basic</p>
                        </div>
                      </div>

                      <p className="sub_text mt-4 mb-3 pb-0 light f15">
                        Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                        adipiscing elit.{" "}
                      </p>

                      <div className="price d-flex align-items-end">
                        <h1 className="p-0 m-0 fw7 white">$99</h1>
                        <small className="p-0 m-0 pb-1 light">/monthly</small>
                      </div>

                      <div className="list_item mt-3">
                        <p className="p-0 m-0 fw7 mb-3 white">
                          What’s included
                        </p>
                        <ul className=" p-0">
                          <li>
                            <div className="icon_box">
                              <svg
                                viewBox="0 0 15 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.86682 6.84058L5.22864 10.2024L13.6332 1.79785"
                                  stroke="url(#paint0_linear_730_4436)"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_730_4436"
                                    x1="7.75"
                                    y1="1.79785"
                                    x2="7.75"
                                    y2="10.2024"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#1B4DFF" />
                                    <stop offset="1" stop-color="#102E99" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <p className="light text">All analytics features</p>
                          </li>
                          <li>
                            <div className="icon_box">
                            <svg
                                viewBox="0 0 15 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.86682 6.84058L5.22864 10.2024L13.6332 1.79785"
                                  stroke="url(#paint0_linear_730_4436)"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_730_4436"
                                    x1="7.75"
                                    y1="1.79785"
                                    x2="7.75"
                                    y2="10.2024"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#1B4DFF" />
                                    <stop offset="1" stop-color="#102E99" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <p className="light text">Up to 1,000,000 leads</p>
                          </li>
                          <li>
                            <div className="icon_box">
                            <svg
                                viewBox="0 0 15 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.86682 6.84058L5.22864 10.2024L13.6332 1.79785"
                                  stroke="url(#paint0_linear_730_4436)"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_730_4436"
                                    x1="7.75"
                                    y1="1.79785"
                                    x2="7.75"
                                    y2="10.2024"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#1B4DFF" />
                                    <stop offset="1" stop-color="#102E99" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <p className="light text">Premium support</p>
                          </li>
                          <li>
                            <div className="icon_box">
                            <svg
                                viewBox="0 0 15 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.86682 6.84058L5.22864 10.2024L13.6332 1.79785"
                                  stroke="url(#paint0_linear_730_4436)"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_730_4436"
                                    x1="7.75"
                                    y1="1.79785"
                                    x2="7.75"
                                    y2="10.2024"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#1B4DFF" />
                                    <stop offset="1" stop-color="#102E99" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <p className="light text">Up to 10 team members</p>
                          </li>
                        </ul>

                        <Link href="#" class="price_button">Get started</Link>

                      </div>
                    </CardBody>
                  </Card>
                </div>
              </Col>
              <Col md="4">
                <div className="pro price_card">
                <Image
                  width={20}
                  height={20}
                  src="/images/price_back.png"
                  className="img-fluid price_back"
                  alt=""
                />
                  <Card className="p-3 px-3">
                    <CardBody>
                      <div className="head">
                        <div className="box"></div>
                        <div className="dts">
                          <p className="package light f16 white m-0 p-0">
                            For startups
                          </p>
                          <div className="d-flex align-items-center gap-2" >
                          <p className="type white f20 fw5 m-0 p-0">Pro</p>
                          <p className="tags m-0 p-0">Poplular</p>
                          </div>
                        </div>
                      </div>

                      <p className="sub_text mt-4 mb-3 pb-0 light f15">
                        Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                        adipiscing elit.{" "}
                      </p>

                      <div className="price d-flex align-items-end">
                        <h1 className="p-0 m-0 fw7 white">$199</h1>
                        <small className="p-0 m-0 pb-1 light">/monthly</small>
                      </div>

                      <div className="list_item mt-3">
                        <p className="p-0 m-0 fw7 mb-3 white">
                          What’s included
                        </p>
                        <ul className=" p-0">
                          <li>
                            <div className="icon_box">
                              <svg
                                viewBox="0 0 15 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.86682 6.84058L5.22864 10.2024L13.6332 1.79785"
                                  stroke="url(#paint0_linear_730_4436)"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_730_4436"
                                    x1="7.75"
                                    y1="1.79785"
                                    x2="7.75"
                                    y2="10.2024"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#1B4DFF" />
                                    <stop offset="1" stop-color="#102E99" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <p className="light text">All analytics features</p>
                          </li>
                          <li>
                            <div className="icon_box">
                            <svg
                                viewBox="0 0 15 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.86682 6.84058L5.22864 10.2024L13.6332 1.79785"
                                  stroke="url(#paint0_linear_730_4436)"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_730_4436"
                                    x1="7.75"
                                    y1="1.79785"
                                    x2="7.75"
                                    y2="10.2024"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#1B4DFF" />
                                    <stop offset="1" stop-color="#102E99" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <p className="light text">Up to 250,000 leads</p>
                          </li>
                          <li>
                            <div className="icon_box">
                            <svg
                                viewBox="0 0 15 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.86682 6.84058L5.22864 10.2024L13.6332 1.79785"
                                  stroke="url(#paint0_linear_730_4436)"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_730_4436"
                                    x1="7.75"
                                    y1="1.79785"
                                    x2="7.75"
                                    y2="10.2024"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#1B4DFF" />
                                    <stop offset="1" stop-color="#102E99" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <p className="light text">Normal support</p>
                          </li>
                          <li>
                            <div className="icon_box">
                            <svg
                                viewBox="0 0 15 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.86682 6.84058L5.22864 10.2024L13.6332 1.79785"
                                  stroke="url(#paint0_linear_730_4436)"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_730_4436"
                                    x1="7.75"
                                    y1="1.79785"
                                    x2="7.75"
                                    y2="10.2024"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#1B4DFF" />
                                    <stop offset="1" stop-color="#102E99" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <p className="light text">Up to 3 team members</p>
                          </li>
                        </ul>

                        <Link href="#" class="price_button">Get started</Link>

                      </div>
                    </CardBody>
                  </Card>
                </div>
              </Col>
              <Col md="4">
                <div className="Premium price_card">
                <Image
                  width={20}
                  height={20}
                  src="/images/price_back.png"
                  className="img-fluid price_back"
                  alt=""
                />
                  <Card className="p-3 px-3">
                    <CardBody>
                      <div className="head">
                        <div className="box"></div>
                        <div className="dts">
                          <p className="package light f16 white m-0 p-0">
                           For individuals
                          </p>
                          <p className="type white f20 fw5 m-0 p-0">Premium</p>
                        </div>
                      </div>

                      <p className="sub_text mt-4 mb-3 pb-0 light f15">
                        Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                        adipiscing elit.{" "}
                      </p>

                      <div className="price d-flex align-items-end">
                        <h1 className="p-0 m-0 fw7 white">$299</h1>
                        <small className="p-0 m-0 pb-1 light">/monthly</small>
                      </div>

                      <div className="list_item mt-3">
                        <p className="p-0 m-0 fw7 mb-3 white">
                          What’s included
                        </p>
                        <ul className=" p-0">
                          <li>
                            <div className="icon_box">
                              <svg
                                viewBox="0 0 15 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.86682 6.84058L5.22864 10.2024L13.6332 1.79785"
                                  stroke="url(#paint0_linear_730_4436)"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_730_4436"
                                    x1="7.75"
                                    y1="1.79785"
                                    x2="7.75"
                                    y2="10.2024"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#1B4DFF" />
                                    <stop offset="1" stop-color="#102E99" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <p className="light text">All analytics features</p>
                          </li>
                          <li>
                            <div className="icon_box">
                            <svg
                                viewBox="0 0 15 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.86682 6.84058L5.22864 10.2024L13.6332 1.79785"
                                  stroke="url(#paint0_linear_730_4436)"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_730_4436"
                                    x1="7.75"
                                    y1="1.79785"
                                    x2="7.75"
                                    y2="10.2024"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#1B4DFF" />
                                    <stop offset="1" stop-color="#102E99" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <p className="light text">Up to 1,000,000 leads</p>
                          </li>
                          <li>
                            <div className="icon_box">
                            <svg
                                viewBox="0 0 15 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.86682 6.84058L5.22864 10.2024L13.6332 1.79785"
                                  stroke="url(#paint0_linear_730_4436)"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_730_4436"
                                    x1="7.75"
                                    y1="1.79785"
                                    x2="7.75"
                                    y2="10.2024"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#1B4DFF" />
                                    <stop offset="1" stop-color="#102E99" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <p className="light text">Premium support</p>
                          </li>
                          <li>
                            <div className="icon_box">
                            <svg
                                viewBox="0 0 15 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.86682 6.84058L5.22864 10.2024L13.6332 1.79785"
                                  stroke="url(#paint0_linear_730_4436)"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_730_4436"
                                    x1="7.75"
                                    y1="1.79785"
                                    x2="7.75"
                                    y2="10.2024"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#1B4DFF" />
                                    <stop offset="1" stop-color="#102E99" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <p className="light text">Up to 10 team members</p>
                          </li>
                        </ul>

                        <Link href="#" class="price_button">Get started</Link>

                      </div>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      </div>
    </>
  );
}
