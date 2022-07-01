import { createSlice } from "@reduxjs/toolkit";
import { CAMPSITES } from "../../app/shared/CAMPSITES";

const initialState = { campsitesArray: CAMPSITES };
const campsitesSlice = createSlice({
    name: 'campsites',
    initialState
})

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = (state) => {
    console.log({ state });
    console.log({ state_dot_campsites: state.campsites});

    return state.campsites.campsitesArray
}

// export const selectCampsiteById = id => {
//     return CAMPSITES.find(campsite => campsite.id === parseInt(id));
// } 

export const selectCampsiteById = id => state => {
    return state.campsites.campsitesArray.find(campsite => campsite.id === parseInt(id))
}

export const selectFeaturedCampsite = (state) => {
    return state.campsites.campsitesArray.find(({featured}) => featured)
}

console.log({ campsitesSlice });