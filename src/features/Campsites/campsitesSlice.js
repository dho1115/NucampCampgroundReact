import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "../../app/shared/baseURL";
import { mapImageURL } from "../../Utils/mapImageURL";
// import { CAMPSITES } from "../../app/shared/oldData/CAMPSITES";


const initialState = { campsitesArray: [], isLoading: true, errMsg: '' };

export const fetchCampsites = createAsyncThunk(
    'campsites/fetchCampsites',
    async () => {
        const response = await fetch(baseURL + 'campsites') //basically, localHost:3001/campsites.
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        console.log({ data })
        return data;
    }
)

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCampsites.pending]: (state) => {
            state.isLoading = true;
        }, 
        [fetchCampsites.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = "";
            state.campsitesArray = mapImageURL(action.payload);
        }, 
        [fetchCampsites.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch has failed';
        }
    }
})

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray
}

// export const selectCampsiteById = id => {
//     return CAMPSITES.find(campsite => campsite.id === parseInt(id));
// } 

export const selectCampsiteById = id => state => {
    return state.campsites.campsitesArray.find(campsite => campsite.id === parseInt(id))
}

export const selectFeaturedCampsite = (state) => {
    // console.log({ state })
    return {
        featuredItem: state.campsites.campsitesArray.find((campsite) => campsite.featured),
        isLoading: state.campsites.isLoading,
        errMsg: state.campsites.errMsg
    }
}

console.log({ campsitesSlice });