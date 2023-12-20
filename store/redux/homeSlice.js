import { createSlice } from "@reduxjs/toolkit";

// const initialState=[];

const homeSlice=createSlice({
    name: 'home',
    initialState:{
        unitSize:''
    },
    reducers:{
        addUnitSize(state,action){
          return { ...state, unitSize: action.payload };
        },
        addBedR(state,action){}
    }
})

export const {addUnitSize,addBedR}=homeSlice.actions
export default homeSlice.reducer;