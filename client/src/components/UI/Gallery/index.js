"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import SwiperController from "../SwiperController";
import Image from "next/image";

import "./index.scss";
import "swiper/css";
import "swiper/css/pagination";

function Gallery({ images }) {
  const slides = images.data.map((image, index) => {
    const data = image.attributes;
    const url = "http://127.0.0.1:1337" + data.url;
    const style = { backgroundImage: `url(${url})` };

    return (
      <SwiperSlide key={index}>
        <div className="main-image">
          <Image src={url} fill={true} />
        </div>
      </SwiperSlide>
    );
  });

  const classes = ["ui-gallery-controller-prev", "ui-gallery-controller-next"];

  return (
    <section className="ui-gallery">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView="auto"
        pagination={true}
        navigation={{
          prevEl: "." + classes[0],
          nextEl: "." + classes[1],
        }}
      >
        {slides}
      </Swiper>
      <SwiperController classes={classes} inside={true} />
    </section>
  );
}

export default Gallery;
