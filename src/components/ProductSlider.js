import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import ProductCard from './ProductCard';
import styles from './ProductCard.module.css';
import classes from './ProductSlider.module.css';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const ProductSlider = ({ products }) => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    1260: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 5,
    },
  };

  const centeredSlides = products.length === 1;

  return (
    <div className={classes.swiper__con}>
      <button className={`${classes.prevbtn} prevbtn`}><FaAngleLeft /></button>
      <Swiper
        breakpoints={breakpoints}
        className={styles.swiperContainer}
        slidesPerView={4}
        centeredSlides={centeredSlides}
        navigation={{nextEl:".nextbtn", prevEl:".prevbtn"}}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard item={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={`${classes.nextbtn} nextbtn`}><FaAngleRight /></button>
    </div>
  );
};

export default ProductSlider;
