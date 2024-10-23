"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import NewsPost from "@/components/NewsPost";
import "swiper/css";
import "swiper/css/bundle";
import "./index.scss";
import SwiperController from "@/components/UI/SwiperController";

function NewsSlider({ data }) {
  const news = data.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <div className="slider-item">
          <NewsPost data={item} />
        </div>
      </SwiperSlide>
    );
  });

  const classes = [
    "widget-news-slider-controller-prev",
    "widget-news-slider-controller-next",
  ];

  return (
    <div className="widget-news-slider">
      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        navigation={{
          prevEl: "." + classes[0],
          nextEl: "." + classes[1],
        }}
      >
        {news}
      </Swiper>
      <SwiperController classes={classes} />
    </div>
  );
}

export default NewsSlider;
