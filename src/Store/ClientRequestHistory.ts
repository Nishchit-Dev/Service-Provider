import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Request {
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

export const request = createSlice({
  name: "RequestArray",
  initialState: {
    request: [] as Request[],
  },
  reducers: {
    addData: (state, action: PayloadAction<Request>) => {
      state.request.push(action.payload);
    },
    deleteData: (state, action) => {
      state.request.pop();
    },
    findAndDelete: (state, action: PayloadAction<string>) => {
      // Delete a request by ID
      state.request = state.request.filter(
        (request) => request.id !== action.payload
      );
    },
  },
});

export const { addData, deleteData, findAndDelete } = request.actions;
export default request.reducer;
