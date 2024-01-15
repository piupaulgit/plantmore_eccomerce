import { createSlice, PayloadAction } from "@reduxjs/toolkit";

  
const initialState = {
    
} as any;



export const Products = createSlice({
    name: "Products",
    initialState,
    reducers: {
        addProductsAction: (state, action: PayloadAction<any>) => {
          state[action.payload.category] = action.payload;
        }
    },
  });

  export const {
    addProductsAction
  } = Products.actions;
  export default Products.reducer;