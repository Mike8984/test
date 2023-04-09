import React from 'react'
import styles from './productItem.module.css'

const ProductItem = ({ product }) => {
  return (
    <div className={styles.container}>
      <img src={product.images[0]} alt="product" />
      <h2>{product.title}</h2>
    </div>
  )
}

export default ProductItem
