import React from "react";
import classes from "./ProductMenu.module.css";

const ProductMenu = ({ items }) => {
  return (
    <div className={classes.prodMenu}>
      {items.map((item, index) => (
        <div key={index} className={classes.menuItem}>
          <img src={item.imgLink} alt={item.name} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductMenu;
