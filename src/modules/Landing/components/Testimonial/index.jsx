import React from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Testimonial(props) {
  return (
    <div className="testimonial" id="Testimonial">
      <p className="testi-p1">Testimonial</p>
      <p className="testi-p2">Berbagai review positif dari pelanggan kami</p>
      <div className="list-testy">
        <Swiper
          navigation={true}
          allowTouchMove={false}
          modules={[Navigation]}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          className="mySwiper">
          {props.data.map((Testi, index) => (
              <SwiperSlide className="testi-card" key={index}>
                <img className="testi-img" src={Testi.image} alt="" />
                <div className="testi-text">
                  {[...Array(5)].map((_, i) => (
                    <i className={`${Testi.icons} testi-star`} key={i}></i>
                  ))}
                  <p className="testi-desc py-2">{Testi.description}</p>
                  <p className="testi-name">{Testi.name}</p>
                </div>
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
