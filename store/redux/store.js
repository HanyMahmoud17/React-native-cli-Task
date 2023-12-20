import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";


const reducers=combineReducers({
    home:homeSlice
})

const persistConfig={
    key:'root',
    storage:AsyncStorage,
    whiteList:['home']
}

const persistedReducer=persistReducer(persistConfig,reducers);

export const Store=configureStore({
    reducer:persistedReducer
})