import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProducts } from '../../store/search/searchSlice'
import styles from './search.module.css'

const Search = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.search)

  useEffect(() => {
    dispatch(getProducts(value))
  }, [value])

  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        value={value}
        onChange={e => setValue(e.target.value)}
        type="text"
      />
      <div>
        {products.map(product => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <img src={product.images[0]} alt="product" />
            <h1>{product.title}</h1>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Search
