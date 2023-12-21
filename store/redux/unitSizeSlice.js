import { createSlice } from "@reduxjs/toolkit";

// const initialState=[];

const unitSizeSlice=createSlice({
    name: 'unitSize',
    initialState:{
        unitSize:"",
        bedRooms:0,
        bathRooms:0,
        guestRoom:0,
        lounges:0,
        funrnished:'no',
        kitchen:'open',
        parking:'central',
        electrialMeter:'',
        waterMeters:'',
        selectAcType:'split',
        image:[]
    },
    reducers:{
        addUnitSize(state,action){
            // console.log('action',action.payload);
          return { ...state, unitSize: action.payload.unitSize };
        },
        addBedR:(state,action)=>{
            return { ...state, bedRooms: state.bedRooms + 1 };
        },
        minusBedR:(state,action)=>{
            return { ...state, bedRooms: state.bedRooms - 1 };
        }
    }
})

export const {addUnitSize}=unitSizeSlice.actions
export default unitSizeSlice.reducer;