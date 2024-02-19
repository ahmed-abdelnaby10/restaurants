import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2'

const foodAmountSlice = createSlice({
  initialState: [],
  name: "foodAmountSlice",
  reducers: {
    addFoodAmount: (state, action) => {
      const repeatedFood = state.find((product)=>product.title === action.payload.title)
      const food = {};
      food.title = action.payload.title;
      food.price = action.payload.price;
      food.descr = action.payload.descr;
      food.quan = action.payload.q;
      food.image = action.payload.image
      if (repeatedFood) {
          Swal.fire({
              title: "This Product Already Added to Cart!",
              confirmButtonText: "OK",
          })
      }else {
          state.push(food)
      }
    },
    removeFromFoodAmount: (state, action) => {
      return state.filter((product)=> product.title !== action.payload.title)
    },
    clearFoodAmount: (state, action) => {
      state = []
    },
  },
});

export const { addFoodAmount, removeFromFoodAmount, clearFoodAmount } = foodAmountSlice.actions;
export default foodAmountSlice.reducer;
