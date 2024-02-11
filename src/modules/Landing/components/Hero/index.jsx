import React from "react";
import "./style.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Carimg from "../../assets/image/car.png";
import { Link } from "react-router-dom";

let Hero = ({ showButton }) => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-6 hero-left">
            <p className="hero-text">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </p>
            <p className="hero-text-2 my-3">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <div>
              <Link className="hero-btn-wrapper" to={`/search`}>
                {showButton && (
                  <button className="hero-btn">Mulai Sewa Mobil</button>
                )}
              </Link>
            </div>
          </div>
          <div className="col-12 col-xl-6 hero-right">
            <div className="bg-hero">
              <img className="hero-car" src={Carimg} alt="car-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
