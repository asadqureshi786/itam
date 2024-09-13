import CustomTable from '@/components/Tables/CustomTable'
import Image from "next/image";

export default function UserHistory(){
    const thead = [
        {
          key: "date",
          label: "",
        },
      {
          key: "name",
          label: "",
        },
        {
          key: "status",
          label: "",
        },
    ]

    const tbody = [
        {
            date: (
                <div className="">
                  <p className="white big m-0 p-0">Jan 19,2022</p>
                  <p className="white small m-0 p-0">3:45 pm</p>
                </div>
              ),
              name: (
                <div className="image_Box">
                   <Image alt="" loading="lazy"width={20} height={20}src="/itam/images/mac.png"  />
                  <div>
                    <p className="white big m-0 p-0">Macbook 13” 2024</p>
                    <div className="d-flex align-items-center">
                      <p className="small white">ID#</p>
                      <p className="small light_1">MNPD00002342</p>
                    </div>
                  </div>
                </div>
              ),
              status : (
                <div className="e_action dark dynamic_col">Check Out</div>
              )
        },
        {
            date: (
                <div className="">
                  <p className="white big m-0 p-0">Jan 19,2022</p>
                  <p className="white small m-0 p-0">3:45 pm</p>
                </div>
              ),
              name: (
                <div className="image_Box">
                   <Image alt="" loading="lazy"width={20} height={20}src="/itam/images/mac.png"  />
                  <div>
                    <p className="white big m-0 p-0">Macbook 13” 2024</p>
                    <div className="d-flex align-items-center">
                      <p className="small white">ID#</p>
                      <p className="small light_1">MNPD00002342</p>
                    </div>
                  </div>
                </div>
              ),
              status : (
                <div className="e_action dark dynamic_col">Check In</div>
              )
        },
        {
            date: (
                <div className="">
                  <p className="white big m-0 p-0">Jan 19,2022</p>
                  <p className="white small m-0 p-0">3:45 pm</p>
                </div>
              ),
              name: (
                <div className="image_Box">
                   <Image alt="" loading="lazy"width={20} height={20}src="/itam/images/mac.png"  />
                  <div>
                    <p className="white big m-0 p-0">Macbook 13” 2024</p>
                    <div className="d-flex align-items-center">
                      <p className="small white">ID#</p>
                      <p className="small light_1">MNPD00002342</p>
                    </div>
                  </div>
                </div>
              ),
              status : (
                <div className="e_action dark dynamic_col">Check Out</div>
              )
        },
        {
            date: (
                <div className="">
                  <p className="white big m-0 p-0">Jan 19,2022</p>
                  <p className="white small m-0 p-0">3:45 pm</p>
                </div>
              ),
              name: (
                <div className="image_Box">
                   <Image alt="" loading="lazy"width={20} height={20}src="/itam/images/mac.png"  />
                  <div>
                    <p className="white big m-0 p-0">Macbook 13” 2024</p>
                    <div className="d-flex align-items-center">
                      <p className="small white">ID#</p>
                      <p className="small light_1">MNPD00002342</p>
                    </div>
                  </div>
                </div>
              ),
              status : (
                <div className="e_action dark dynamic_col">Check Out</div>
              )
        },
        {
            date: (
                <div className="">
                  <p className="white big m-0 p-0">Jan 19,2022</p>
                  <p className="white small m-0 p-0">3:45 pm</p>
                </div>
              ),
              name: (
                <div className="image_Box">
                   <Image alt="" loading="lazy"width={20} height={20}src="/itam/images/mac.png"  />
                  <div>
                    <p className="white big m-0 p-0">Macbook 13” 2024</p>
                    <div className="d-flex align-items-center">
                      <p className="small white">ID#</p>
                      <p className="small light_1">MNPD00002342</p>
                    </div>
                  </div>
                </div>
              ),
              status : (
                <div className="e_action dark dynamic_col">Check Out</div>
              )
        },
        {
            date: (
                <div className="">
                  <p className="white big m-0 p-0">Jan 19,2022</p>
                  <p className="white small m-0 p-0">3:45 pm</p>
                </div>
              ),
              name: (
                <div className="image_Box">
                   <Image alt="" loading="lazy"width={20} height={20}src="/itam/images/mac.png"  />
                  <div>
                    <p className="white big m-0 p-0">Macbook 13” 2024</p>
                    <div className="d-flex align-items-center">
                      <p className="small white">ID#</p>
                      <p className="small light_1">MNPD00002342</p>
                    </div>
                  </div>
                </div>
              ),
              status : (
                <div className="e_action dark dynamic_col">Check Out</div>
              )
        },
    ]
    return (
        <>
            <div className="custom_table">
                <CustomTable theadName={thead} BoydData={tbody} />
            </div>
        </>
    )
}