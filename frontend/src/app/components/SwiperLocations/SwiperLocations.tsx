"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  A11y,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperLocations() {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, A11y, Parallax]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="slide-content">
            <h3>Paris</h3>
            <div
              className="image-teste"
              style={{
                width: "300px",
                height: "200px",
                backgroundColor: "green",
              }}
            ></div>
            <p>Visite a Torre Eiffel e aproveite a gastronomia local.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <h3>Roma</h3>
            <div
              className="image-teste"
              style={{
                width: "300px",
                height: "200px",
                backgroundColor: "green",
              }}
            ></div>
            <p>Explore o Coliseu e a rica história romana.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <h3>Nova York</h3>
            <div
              className="image-teste"
              style={{
                width: "300px",
                height: "200px",
                backgroundColor: "green",
              }}
            ></div>
            <p>Conheça a Times Square e o Central Park.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <h3>Tóquio</h3>
            <div
              className="image-teste"
              style={{
                width: "300px",
                height: "200px",
                backgroundColor: "green",
              }}
            ></div>

            <p>Descubra a cultura japonesa e a modernidade da cidade.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
