import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../store/product/productSlice'

const Product = () => {
  const { id } = useParams()
  const { product } = useSelector(state => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProduct(id))
  }, [dispatch, id])

  return (
    <>
      {product && (
        <div style={{ marginTop: 20 }}>
          <img src={product.images[0]} alt="product" />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      )}
    </>
  )
}

export default Product
