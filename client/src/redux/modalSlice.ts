import { createSlice, PayloadAction } from "@reduxjs/toolkit";

  
const initialState = {
    loginModal: {
        isOpen: false
    },
    registerModal: {
        isOpen: false
    },
    activeModalName: ''
} as any;

interface IModalAction {
    modalName: string,
    isOpen: boolean
}


export const Modals = createSlice({
    name: "modals",
    initialState,
    reducers: {
        modalAction: (state, action: PayloadAction<IModalAction>) => {
            state[action.payload.modalName].isOpen = action.payload.isOpen;
            action.payload.isOpen ? state.activeModalName = action.payload.modalName : state.activeModalName = '';
        }
    },
  });

  export const {
    modalAction
  } = Modals.actions;
  export default Modals.reducer;