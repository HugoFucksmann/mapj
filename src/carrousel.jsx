import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import c1 from "./assets/carrousel/c1.jpeg";
import c2 from "./assets/carrousel/c2.jpg";
import c3 from "./assets/carrousel/c3.jpg";
import c4 from "./assets/carrousel/c4.jpeg";

const Carousel = () => {
  const carouselContainerStyle = {
    width: "100vw",
    margin: "0",
    height: "90vh",
    maxHeight: "90vh",
    display: "flex",
    alignItems: "center",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
  };

  const swiperStyle = {
    width: "100%",
    height: "100%",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  return (
    <div style={carouselContainerStyle}>
      <Swiper
        style={swiperStyle}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop
      >
        <SwiperSlide>
          <img src={c1} alt="Slide 1" style={imageStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c2} alt="Slide 2" style={imageStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c3} alt="Slide 3" style={imageStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={c4} alt="Slide 4" style={imageStyle} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
