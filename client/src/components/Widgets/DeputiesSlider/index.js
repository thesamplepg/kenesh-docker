"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Deputy from "@/components/Deputy";

import "./index.scss";
import SwiperController from "@/components/UI/SwiperController";

function DeputiesSlider({ data }) {
  const deputies = data.map((data) => {
    return (
      <SwiperSlide key={data.id}>
        <div className="deputy-item">
          <Deputy data={data} />
        </div>
      </SwiperSlide>
    );
  });

  const controllerClasses = [
    "widget-deputies-slider-controller-prev",
    "widget-deputies-slider-controller-next",
  ];

  return (
    <div className="widget-deputies-slider">
      <Swiper
        resistanceRatio={0}
        slidesPerView="auto"
        modules={[Navigation]}
        navigation={{
          prevEl: "." + controllerClasses[0],
          nextEl: "." + controllerClasses[1],
        }}
      >
        {deputies}
      </Swiper>
      <SwiperController classes={controllerClasses} />
    </div>
  );
}

export default DeputiesSlider;
