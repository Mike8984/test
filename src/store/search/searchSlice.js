import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../api'

const initialState = {
  products: [],
}

export const getProducts = createAsyncThunk(
  'search/getProducts',
  async (searchVal, { dispatch }) => {
    await axios
      .get(`products/search?q=${searchVal}`)
      .then(res => dispatch(setProducts(res.data.products)))
  }
)

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload
    },
  },
})

export const { setProducts } = searchSlice.actions
export default searchSlice.reducer
