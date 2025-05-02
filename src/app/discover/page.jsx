'use client';

import {Row,Col,Card,CardBody,Button} from "reactstrap";
import CustomTable from "@/components/Tables/CustomTable";
import Link from "next/link";
import Image from "next/image";


    // Tracking Table Head
 
    export default function Discover(){
  

    return (
        <>
           <div className="asset_discover tab_height_adjust  text-center">
            <div className="content">
              <div className="image_box">
                <Image
                  width={20}
                  height={20}
                  src="/itam/images/radar.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <h1>Discover Your Assets</h1>
              <p className="f-15 light_color m-0 mb-4 mt-2 p-0">
                Network Discovery finds all devices connected to a network (WiFi
                or ethernet). 
              </p>
              <Button color="btn update">Find Assets on Network</Button>

              <p className="f-15 light_color m-0 mt-2 p-0">
                <small>Locate Manually</small> 
              </p>
            </div>
          </div>


        </>
    )
}