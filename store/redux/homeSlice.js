import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

// const initialState=[];
const STORAGE_KEY = '@forntask:unitSize';

const homeSlice = createSlice({
  name: 'unitSize',
  initialState: {
    unitSize: '',
    bedRooms: 0,
    bathRooms: 0,
    guestRoom: 0,
    lounges: 0,
    funrnished: 'no',
    kitchen: 'open',
    parking: 'central',
    electrialMeter: '',
    waterMeters: '',
    selectAcType: 'split',
    image: [],
  },
  reducers: {
    addUnitSize(state, action) {
      // console.log('action',action.payload);
      return {...state, unitSize: action.payload};
    },
    addBedR: (state, action) => {
      return {...state, bedRooms: state.bedRooms + 1};
    },
    minusBedR: (state, action) => {
      return {...state, bedRooms: Math.max(0, state.bedRooms - 1)};
    },
    addBathRoom: (state, action) => {
      return {...state, bathRooms: state.bathRooms + 1};
    },
    minusBathRoom: (state, action) => {
      return {...state, bathRooms: Math.max(0, state.bathRooms - 1)};
    },
    addGuestRoom: (state, action) => {
      return {...state, guestRoom: state.guestRoom + 1};
    },
    minusGuestRoom: (state, action) => {
      return {...state, guestRoom: Math.max(0, state.guestRoom - 1)};
    },
    addLounge: (state, action) => {
      return {...state, lounges: state.lounges + 1};
    },
    minusLounges: (state, action) => {
      return {...state, lounges: Math.max(0, state.lounges - 1)};
    },
    setFurnished(state, action) {
      return {...state, furnished: action.payload};
    },
    setKitchen(state, action) {
      return {...state, kitchen: action.payload};
    },
    setParking(state, action) {
      return {...state, parking: action.payload};
    },
    addElectricalMeter(state, action) {
      // console.log('action',action.payload);
      return {...state, electrialMeter: action.payload};
    },
    addWaterMeter(state, action) {
      return {...state, waterMeters: action.payload};
    },
    addImage(state, action) {
        const newImages = action.payload.map((uri) => ({ uri }));
        return { ...state, image: [...state.image, ...newImages] };
      },
    setAcType: (state, action) => {
      return {
        ...state,
        selectAcType: action.payload,
      };
    },
  },
});

export const {
  addUnitSize,
  addBedR,
  minusBedR,
  addBathRoom,
  minusBathRoom,
  addGuestRoom,
  minusGuestRoom,
  addLounge,
  minusLounges,
  setFurnished,
  setKitchen,
  setParking,
  addElectricalMeter,
  addWaterMeter,
  addImage,
  setAcType
} = homeSlice.actions;
export default homeSlice.reducer;

// Async actions
export const saveStateToAsyncStorage = async state => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Error saving state to AsyncStorage:', error);
  }
};

export const loadStateFromAsyncStorage = async () => {
  try {
    const storedState = await AsyncStorage.getItem(STORAGE_KEY);
    //   console.log('stored', storedState);
    return storedState ? JSON.parse(storedState) : undefined;
  } catch (error) {
    console.error('Error loading state from AsyncStorage:', error);
    return undefined;
  }
};
