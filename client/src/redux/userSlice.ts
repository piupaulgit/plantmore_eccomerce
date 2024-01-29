import { createSlice, PayloadAction } from "@reduxjs/toolkit";

  
const initialState = {
    currentUser : null
} as any;

interface IUser {
    _id: string,
    email: string,
    accessToken: string,
    role: Number
}

export const User = createSlice({
    name: "user",
    initialState,
    reducers: {
        saveUser: (state, action: PayloadAction<IUser|null>) => {
            state.currentUser = action.payload;
        }
    },
  });

  export const {
    saveUser
  } = User.actions;
  export default User.reducer;