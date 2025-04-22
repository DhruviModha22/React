import { createSlice } from '@reduxjs/toolkit';

const GST_RATE = 0.18; // 18% GST

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalGST: 0,
  finalAmount: 0,
  totalQuantity: 0,
};

const calculateItemTotals = (item) => {
  const basePrice = item.price * item.quantity;
  const gst = basePrice * GST_RATE;
  const total = basePrice + gst;
  return { basePrice, gst, total };
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
        const { basePrice, gst, total } = calculateItemTotals(existingItem);
        existingItem.basePrice = basePrice;
        existingItem.gst = gst;
        existingItem.totalPrice = total;
      } else {
        const newItemWithQuantity = {
          ...newItem,
          quantity: 1,
        };
        const { basePrice, gst, total } = calculateItemTotals(newItemWithQuantity);
        newItemWithQuantity.basePrice = basePrice;
        newItemWithQuantity.gst = gst;
        newItemWithQuantity.totalPrice = total;
        state.cartItems.push(newItemWithQuantity);
      }
      
      // Recalculate totals
      state.totalAmount = state.cartItems.reduce((sum, item) => sum + item.basePrice, 0);
      state.totalGST = state.cartItems.reduce((sum, item) => sum + item.gst, 0);
      state.finalAmount = state.totalAmount + state.totalGST;
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      const existingItem = state.cartItems.find(item => item.id === itemId);
      
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(item => item.id !== itemId);
      } else {
        existingItem.quantity--;
        const { basePrice, gst, total } = calculateItemTotals(existingItem);
        existingItem.basePrice = basePrice;
        existingItem.gst = gst;
        existingItem.totalPrice = total;
      }
      
      // Recalculate totals
      state.totalAmount = state.cartItems.reduce((sum, item) => sum + item.basePrice, 0);
      state.totalGST = state.cartItems.reduce((sum, item) => sum + item.gst, 0);
      state.finalAmount = state.totalAmount + state.totalGST;
      state.totalQuantity--;
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalGST = 0;
      state.finalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
