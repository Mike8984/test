import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products/productsSlice'
import productReducer from './product/productSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
  },
})
