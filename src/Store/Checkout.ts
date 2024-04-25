import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cartItems {
  address: string;
  availability: string;
  companyName: string;
  createdAt: string;
  description: string;
  email: string;
  id: string;
  name: string;
  phoneNumber: string;
  price: string;
  serviceCategoryId: string;
  website: string;
  bookingDate: string;
  time: string;
}

export const Checkout = createSlice({
  name: "CheckoutDetails",
  initialState: {
    cart: [] as cartItems[],
  },
  reducers: {
    addData: (state, action: PayloadAction<cartItems>) => {
      state.cart.push(action.payload);
    },
    deleteData: (state, action) => {
      state.cart.pop();
    },
    findAndDelete: (state, action: PayloadAction<string>) => {
      // Delete a request by ID
      state.cart = state.cart.filter(
        (request) => request.id !== action.payload
      );
    },
  },
});

export const { addData, deleteData, findAndDelete } = Checkout.actions;
export default Checkout.reducer;
