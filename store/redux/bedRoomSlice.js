import { createSlice } from "@reduxjs/toolkit";


const bedRoomSlice=createSlice({
    name: 'bedRoom',
    initialState:{
        bedRoomNum:0,
    },
    reducers:{
        addBedR:(state,action)=>{
            return { ...state, bedRoomNum: state.bedRoomNum + 1 };
        },
        minusBedR:(state,action)=>{
            return { ...state, bedRoomNum: state.bedRoomNum - 1 };
        }
    }
})

export const {addBedR,minusBedR}=bedRoomSlice.actions
export default bedRoomSlice.reducer;