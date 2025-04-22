import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api';

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const res = await api.get('/products');
  return res.data;
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
