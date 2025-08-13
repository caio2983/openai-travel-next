"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Parallax, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperLocations() {
  const locations = [
    {
      title: "Paris",
      img: "/paris.jpg",
      desc: "Visite a Torre Eiffel e aproveite a gastronomia local.",
    },
    {
      title: "Roma",
      img: "/rome.jpg",
      desc: "Explore o Coliseu e a rica história romana.",
    },
    {
      title: "Nova York",
      img: "/newyork.jpg",
      desc: "Conheça a Times Square e o Central Park.",
    },
    {
      title: "Tóquio",
      img: "/tokyo.jpg",
      desc: "Descubra a cultura japonesa e a modernidade da cidade.",
    },
    {
      title: "Rio de Janeiro",
      img: "/rio.jpg",
      desc: "Visite o Cristo Redentor e as belas praias.",
    },
    {
      title: "Dubai",
      img: "/dubai.jpg",
      desc: "Conheça o Burj Khalifa e o luxo da cidade.",
    },
  ];

  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, A11y, Parallax, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        speed={7000}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        allowTouchMove={false}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        draggable={true}
      >
        {locations.map((loc, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <h3>{loc.title}</h3>
              <div className="slide-image-wrapper">
                <img src={loc.img} alt={loc.title} />
              </div>
              <p>{loc.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
