import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const appSlice = createSlice({
   name: 'app',
   initialState: {
      roomId: null,
   },
   reducers: {
      enterRoom: (state, action) => {
         state.roomId = action.payload.roomId;
      },
   },
})

export const { enterRoom } = appSlice.actions;

export const selectRoomId = (state: RootState ) => state.app.roomId;

export default appSlice.reducer;