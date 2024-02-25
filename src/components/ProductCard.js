import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({item}) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img className={styles.image_itm} src={`https://source.unsplash.com/featured/?${item.name}
        `} alt={item.name} />
      </div>
      
      <div className={styles.detailsContainer}>
        <spna>{item.name}</spna>
        <span className={styles.price}>{item.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
