import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products/productsSlice'
import productReducer from './product/productSlice'
import searchReducer from './search/searchSlice'
import createProductReducer from './createProduct/createProductSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    search: searchReducer,
    createProduct: createProductReducer
  },
})
