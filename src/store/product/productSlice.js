import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../api'

const initialState = {
  product: null,
}

export const getProduct = createAsyncThunk('product/getProduct', async id => {
  const { data } = await axios.get(`products/${id}`)
  return data
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [getProduct.pending]: state => {
      state.product = null
    },
    [getProduct.fulfilled]: (state, action) => {
      state.product = action.payload
    },
    [getProduct.rejected]: state => {
      state.product = null
    },
  },
})

export default productSlice.reducer
