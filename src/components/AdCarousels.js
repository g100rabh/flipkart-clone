import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { carouselsImage } from "../assests/imageSrc";
import classes from "./AdCarousels.module.css";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const AdCarousels = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    const interval = setInterval(() => {
      if (swiper !== undefined) {
        swiper.slideNext();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.swiper__con}>
      <button className={`${classes.hprevbtn} hprevbtn`}>
        <FaAngleLeft />
      </button>
      <Swiper
        ref={swiperRef}
        className={classes.swiperContainer}
        slidesPerView={1}
        navigation={{ nextEl: ".hnextbtn", prevEl: ".hprevbtn" }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
      >
        {carouselsImage.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="ad" />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={`${classes.hnextbtn} hnextbtn`}>
        <FaAngleRight />
      </button>
    </div>
  );
};

export default AdCarousels;
