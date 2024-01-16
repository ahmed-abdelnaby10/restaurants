import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart-slice";
import paySuccessSlice from "./slices/payment-slice"
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const presistConfig = {
    key: "Quick-Bite",
    storage
}

const reducers = combineReducers({
    cart: cartSlice,
    pay: paySuccessSlice,
})

const presistedReducers = persistReducer(presistConfig, reducers)

export const store = configureStore({
    reducer: presistedReducers,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
        })
})
