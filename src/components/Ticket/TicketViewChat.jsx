"use client";
import "./ticket.scss";
import {Form, FormGroup,Input,Label, Card, CardBody, Button } from 'reactstrap';
import Link from "next/link";
import Select from 'react-select'
import Image from "next/image";

export default function TicketViewChat() {
  const status = [
    { value: 'Open', label: 'Open' },
    { value: 'In Progress', label: 'In Progress' },
    { value: 'Resolved', label: 'Resolved' },
    { value: 'Closed', label: 'Closed' },
  ];
  const Assigned = [
    { value: 'John Doe', label: 'John Doe' },
  ];
  return (
    <>
      <div className="ticketViewChat">
        <div className="divide_column">
          <div className="chat_body">
            <Card>
              <CardBody>
                <div className="head">
                  <h5 className="hd ">Ticket Subject</h5>
                  <p className="sub_text m-0 p-0">Issue explanation</p>
                </div>
                <ul className="content_body">
                  <li className="left_side user_message">
                    <div
                      className="profile_image"
                      style={{ background: "url('images/chat-profile.jpg')" }}
                    ></div>
                    <div className="messages">
                      <ul className="m-0 p-0">
                        <li className="message_item">omg, this is amazing</li>
                        <li className="message_item">perfect! ✅</li>
                        <li className="message_item">
                          Wow, this is really epic
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="right_side user_message">
                    <div
                      className="profile_image"
                      style={{ background: "url('images/chat-profile.jpg')" }}
                    ></div>
                    <div className="messages">
                      <ul className="m-0 p-0">
                        <li className="message_item">How are you?</li>
                      </ul>
                    </div>
                  </li>
                  <li className="left_side user_message">
                    <div
                      className="profile_image"
                      style={{ background: "url('images/chat-profile.jpg')" }}
                    ></div>
                    <div className="messages">
                      <ul className="m-0 p-0">
                        <li className="message_item">
                          just ideas for next time
                        </li>
                        <li className="message_item">
                          I'll be there in 2 mins ⏰
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="right_side user_message">
                    <div
                      className="profile_image"
                      style={{ background: "url('images/chat-profile.jpg')" }}
                    ></div>
                    <div className="messages">
                      <ul className="m-0 p-0">
                        <li className="message_item">woohoooo</li>
                        <li className="message_item">Haha oh man</li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <div className="chat_footer custom_form">
                  <FormGroup className="form-groups m-0 p-0">
                    <div className="url_link">
                       <Image alt="" loading="lazy"width={20} height={20}
                        src="/itam/images/chat_icon.png"
                        className="img-fluid"
                      />
                    </div>
                    <Input type="textarea"
                      className="form-control"
                      placeholder="Write your message here..."
                    />
                    <Button color="btn full_blue">Send</Button>
                  </FormGroup>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="user_info">
            <div className="head">
              <h5 className="hd ">Ticket Subject</h5>
              <p className="sub_text m-0 p-0">Issue explanation</p>
            </div>
            <div className="user_detail_card">
              <ul>
                <li>
                  <p className="light_color bold text">Ticket ID</p>
                  <p className="light_color text">#32736</p>
                </li>
                <li>
                  <p className="light_color bold text">Date Created</p>
                  <p className="light_color text">12/12/2024</p>
                </li>
                <li>
                  <p className="light_color bold text">Type</p>
                  <p className="light_color text">Complain</p>
                </li>
                <li>
                  <p className="light_color bold text">Status</p>
                  <p className="light_color text">Hight</p>
                </li>
                <li>
                  <p className="light_color bold text">Priority</p>
                  <p className="light_color text">Open</p>
                </li>
                <li>
                  <p className="light_color bold text">Generated by</p>
                  <Link href="#" className="link text">James Smith</Link>
                </li>
                <li>
                  <p className="light_color bold text">Asset</p>
                  <Link href="#" className="link text">Macbook 13” 2024</Link>
                </li>
              </ul>
            </div>

            <div className="tags">
                <div className="custom_form">
                    <Form action="">
                        <FormGroup className="form-groups status">
                            <Label htmlFor="">Status</Label>
                            <Select options={status} />
                        </FormGroup>
                        <FormGroup className="form-groups assigned">
                            <Label htmlFor="">Assigned to</Label>
                            <Select isMulti options={Assigned} />
                        </FormGroup>
                    </Form>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
