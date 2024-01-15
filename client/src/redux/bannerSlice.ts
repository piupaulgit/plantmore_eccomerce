import { createSlice, PayloadAction } from "@reduxjs/toolkit";

  
const initialState = {
    bannerOne: {},
    bannerTwo: {},
    bannerThree: {}
} as any;

interface IBannerAction {
    bannerName: string,
    value: Object
}


export const Banners = createSlice({
    name: "banners",
    initialState,
    reducers: {
        saveBannerAction: (state, action: PayloadAction<IBannerAction>) => {
            state[action.payload.bannerName] = action.payload.value;
        }
    },
  });

  export const {
    saveBannerAction
  } = Banners.actions;
  export default Banners.reducer;