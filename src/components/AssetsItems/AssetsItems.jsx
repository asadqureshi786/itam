import "./AssetItems.scss";
import Image from "next/image";
import {Container, Row, Col, Card, CardBody, Input, Button } from 'reactstrap';

// import './Alert.scss'

export default function AssetsItems() {
  const Assets_Items = [
    {
      image: "/itam/images/asset_items/item1.png",
      name: "Lorem Ipsum Look Same",
      tag: "SNV5554300233",
    },
    {
      image: "/itam/images/asset_items/item2.png",
      name: "Lorem Ipsum Look Same",
      tag: "IUG3859584839",
    },
    {
      image: "/itam/images/asset_items/item3.png",
      name: "Lorem Ipsum Look Same",
      tag: "MK34854968385",
    },
    {
        image: "/itam/images/asset_items/item1.png",
        name: "Lorem Ipsum Look Same",
        tag: "SNV5554300233",
      },
      {
        image: "/itam/images/asset_items/item2.png",
        name: "Lorem Ipsum Look Same",
        tag: "IUG3859584839",
      },
      {
        image: "/itam/images/asset_items/item3.png",
        name: "Lorem Ipsum Look Same",
        tag: "MK34854968385",
      },
      {
        image: "/itam/images/asset_items/item1.png",
        name: "Lorem Ipsum Look Same",
        tag: "SNV5554300233",
      },
      {
        image: "/itam/images/asset_items/item2.png",
        name: "Lorem Ipsum Look Same",
        tag: "IUG3859584839",
      },
      {
        image: "/itam/images/asset_items/item3.png",
        name: "Lorem Ipsum Look Same",
        tag: "MK34854968385",
      },
      {
        image: "/itam/images/asset_items/item1.png",
        name: "Lorem Ipsum Look Same",
        tag: "SNV5554300233",
      },
      {
        image: "/itam/images/asset_items/item2.png",
        name: "Lorem Ipsum Look Same",
        tag: "IUG3859584839",
      },
      
  ];

  return (
    <>
      <div className="asset_items">
        <Row>
          {Assets_Items.map((element , index) => (
            <Col md="3" key={index} className="mb-4">
              <div className="items">
                <div className="image_box">
                   <Image alt="" loading="lazy"width={20} height={20} src={element.image}  />
                </div>
                <p className="item name m-0 p-0">{element.name}</p>
                <p className="light_color tag item tag m-0 p-0">{element.tag}</p>
                <div className="item_footer">
                  <Button color="btn cancel">CheckOut</Button>
                  <Button color="btn update">View</Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
