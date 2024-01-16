import { createSlice, PayloadAction } from "@reduxjs/toolkit";

  
const initialState = {
   categories: null
} as any;


export const Category = createSlice({
    name: "category",
    initialState,
    reducers: {
        saveCategoryAction: (state, action: PayloadAction<any>) => {
            state.categories = action.payload;
        }
    },
  });

  export const {
    saveCategoryAction
  } = Category.actions;
  export default Category.reducer;