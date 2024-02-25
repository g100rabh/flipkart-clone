import classes from "./Product.module.css";

import { electronicsProducts } from "../assests/productList";
import ProductCard from "./ProductCard";
import { FaCircleChevronRight } from "react-icons/fa6";
import ProductSlider from "./ProductSlider";

const Product = () => {
  return (

      <div className={classes.product_con_parent}>
        <div className={classes.product_con}>
          <span className={classes.prod__head}>
            <text>Best of Electronics</text>
            <span>
              <FaCircleChevronRight />
            </span>
          </span>
          <ProductSlider products={electronicsProducts} />
        </div>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/530/810/image/fc8b3084c8753d06.jpg?q=20"
            alt="ad"
            className={classes.image_con}
          />
      </div>

  );
};

export default Product;
