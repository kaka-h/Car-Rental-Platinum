import React from "react";
import imgservice from "../../assets/image/img_service.png";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

let OurServices = (props) => {
  return (
    <div id="Services">
      <div className="container services ">
        <div className="row services-wrapper ">
          <div className="col-lg-6 col-12 frame">
            <img className="image-service col-md-12" src={imgservice} alt="" />
          </div>
          <div className="col-lg-6 col-12 frame right-frame">
            <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
            <p className="sewa">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <div className="frame-2">
              {props.data.map((Our, index) => (
                <div key={index} className="frame-3">
                  <i className={`icons ${Our.icons}`}></i>
                  <p className="p" key={index}>
                    {Our.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
