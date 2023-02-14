import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,

}

export const navSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        setOrigin: (state, action) => {

            state.origin = action.payload;
        },
        setDestination: (state, action) => {

            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {

            state.travelTimeInformation = action.payload;
        }
    } 
});

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

// Selectors
export const getOrigin = (state) => state.navigation.origin;
export const getDestination = (state) => state.navigation.destination;
export const getTravelTimeInformation = (state) => state.navigation.travelTimeInformation;



export default navSlice.reducer;