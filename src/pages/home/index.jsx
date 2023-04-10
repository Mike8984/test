import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductItem from '../../components/productItem'
import { getProducts } from '../../store/products/productsSlice'

const Home = () => {
  const { products, isLoading } = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
      {isLoading ? (
        <div>Loading..</div>
      ) : (
        <div>
          <div style={{ padding: 20 }}>
          {products.map(product => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <ProductItem product={product} />
            </Link>
          ))}
        </div>
        </div>
        
      )}
    </>
  )
}

export default Home
