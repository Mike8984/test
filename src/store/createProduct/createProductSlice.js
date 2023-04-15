import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../api'

const initialState = {
  product: null,
}

export const createProduct = createAsyncThunk(
  'createProduct/createProduct',
  async formData => {
    const { data } = await axios.post('products/add', formData)
    return data
  }
)

export const createProductSlice = createSlice({
  name: 'createProduct',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createProduct.pending, state => {
        state.product = null
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.product = action.payload
      })
      .addCase(createProduct.rejected, state => {
        state.product = null
      })
  },
})

export default createProductSlice.reducer
