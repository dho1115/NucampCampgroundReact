import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "../../app/shared/baseURL";
// import { PARTNERS } from "../../app/shared/PARTNERS";
import { mapImageURL } from "../../Utils/mapImageURL";

const initialState = { partnersArray: [], isLoading: true, errMsg: '' };

export const fetchPartners = createAsyncThunk(
    'partners/fetchPartners',
    async () => {
        const response = await fetch(baseURL + 'partners');
        if (!response.ok) {
            return Promise.reject('Fetch request rejected. Error Status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
)

const partnersSlice = createSlice({
    name: 'partners',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPartners.pending]: (state)=> {
            state.isLoading = true;
        },
        [fetchPartners.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.partnersArray = mapImageURL(action.payload)
        }
    }
});

console.log({ partnersSlice });

export const partnersReducer = partnersSlice.reducer;
export const selectAllPartners = (state) => state.partners.partnersArray;
export const selectFeaturedPartners = (state) => (
    {
        featuredItem: state.partners.partnersArray.find(({featured}) => featured),
        isLoading: state.partners.isLoading,
        errMsg: state.partners.errMsg
    }
)
