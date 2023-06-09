import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../api'

const initialState = {
  products: [],
  isLoading: false,
  error: null,
}

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const { data } = await axios.get('products')
    return data.products
  }
)

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload
        state.error = null
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export default productsSlice.reducer
