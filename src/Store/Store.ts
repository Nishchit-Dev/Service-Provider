import { configureStore } from "@reduxjs/toolkit";
import req from "./RequestStore.ts";
import cart from "./Checkout.ts";

export default configureStore({
  reducer: {
    Request: req,
    Checkout: cart,
  },
});
