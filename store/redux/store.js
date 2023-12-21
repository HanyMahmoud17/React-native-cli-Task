import { configureStore } from "@reduxjs/toolkit";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AsyncStorage } from "react-native";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import unitSizeSlice from "./unitSizeSlice";
// import bedRoomSlice from "./bedRoomSlice";



const reducers=combineReducers({
    unitSize:unitSizeSlice,
    // bedRoom: bedRoomSlice,
})

const persistConfig={
    key:'root',
    storage,
    whiteList:['unitSize']
}

const persistedReducer=persistReducer(persistConfig,reducers);

export const Store=configureStore({
    reducer:persistedReducer
})