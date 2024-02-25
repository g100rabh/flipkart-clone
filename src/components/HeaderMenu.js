import React from "react";
import ProductMenu from "./ProductMenu";
import classes from "./HeaderMenu.module.css";
import {imageSrc } from "../assests/imageSrc"

const HeaderMenu = () => {
  return (
    <div className={classes.headerMenu}>
      <ProductMenu items={imageSrc} />
    </div>
  );
};

export default HeaderMenu;
