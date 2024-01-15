import { createSlice, PayloadAction } from "@reduxjs/toolkit";

  
const initialState = {
    currentUser : {
        email: '',
        accessToken: '',
        role: null
    }
} as any;

interface IUser {
    email: string,
    accessToken: string,
    role: Number
}

export const User = createSlice({
    name: "user",
    initialState,
    reducers: {
        saveUser: (state, action: PayloadAction<IUser>) => {
            state.currentUser = action.payload;
        }
    },
  });

  export const {
    saveUser
  } = User.actions;
  export default User.reducer;