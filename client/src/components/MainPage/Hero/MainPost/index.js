import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import "./index.scss";
import { Link } from "@/navigation";

function MainPost({ data }) {
  const images = data.attributes.images.data.map((image, index) => {
    const data = image.attributes;
    const url = process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL + data.url;

    return (
      <SwiperSlide key={index}>
        <div className="main-image">
          <Image
            src={url}
            fill={true}
            alt="Кенеш"
            style={{ objectFit: "cover" }}
          />
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="main-page__hero-main-post">
      <Link href={`/news/${data.id}`}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000 }}
          speed={1500}
          resistanceRatio={0}
          slidesPerView={1}
        >
          {images}
        </Swiper>
        <div className="info">
          <p>{new Date(data.attributes.date).toLocaleDateString("ru")}</p>
          <h1>{data.attributes.title}</h1>
        </div>
      </Link>
    </div>
  );
}

export default MainPost;
