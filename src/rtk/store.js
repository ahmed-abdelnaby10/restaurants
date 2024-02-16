import { configureStore, combineReducers } from "@reduxjs/toolkit";

// cart
import cartReducer from "./slices/cart-slice";
import foodAmountSlice from "./slices/foodAmountSlice";
// payment
import paySuccessReducer from "./slices/payment-slice";

// presist
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const presistConfig = {
  key: "Quick-Bite",
  storage,
};

const reducers = combineReducers({
  foodAmount: foodAmountSlice,
  cart: cartReducer,
  pay: paySuccessReducer,
});

const presistedReducers = persistReducer(presistConfig, reducers);

export const store = configureStore({
  reducer: presistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
