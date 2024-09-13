// components/ImageUploader.js
import { useState } from "react";
import styles from "./ImageUploader.module.css"; // Assuming you use CSS modules for styling

export default function ImageUploader({id}) {
  const [images, setImages] = useState([]);

  const getImages = (event) => {
    let files = event.target.files;
    let newImages = [];

    for (let count = 0; count < files.length; count++) {
      let target = URL.createObjectURL(files[count]);
      newImages.push(target);
    }

    setImages([...newImages]);
    event.target.value = ""; // Clear the input after files are loaded
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className={styles.single_img_uploader_head}>
        <label htmlFor={ id ? id : 'image_upload'} className={styles.single_image_uploader}>
          <svg width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 5H14.5C15.0523 5 15.5 5.44772 15.5 6C15.5 6.55228 15.9477 7 16.5 7H19C20.1046 7 21 7.89543 21 9V16M3 3L21 21M11.6598 15.9809C10.2795 15.8251 9.18287 14.7327 9.02069 13.3543M3 9V17C3 18.1046 3.89543 19 5 19H14" stroke="#8897AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input type="file" onChange={getImages} id={id ? id : 'image_upload'} multiple />
        </label>
        <div className={styles.ul_list}>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.li_items}
              onClick={() => removeImage(index)}
            >
              <div
                className={styles.showImg}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              <div className={styles.close_item}>
                <svg
                  width="100px"
                  height="100px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5001 6H3.5"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M9.5 11L10 16"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M14.5 11L14 16"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
                    stroke="#fff"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
        <div className="about_upload text-center mt-2">
          <p className="light_color p-0 m-0">Upload PNG/JPEG</p>
          <p className="light_color p-0 m-0">(Max file size 5 mb)</p>
        </div>
      </div>
    </>
  );
}
