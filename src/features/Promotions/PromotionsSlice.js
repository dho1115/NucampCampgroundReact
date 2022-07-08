import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseURL } from '../../app/shared/baseURL';
import { mapImageURL } from '../../Utils/mapImageURL';
//import { PROMOTIONS } from '../../app/shared/PROMOTIONS';

const initialState = { promotionsArray: [], isLoading: true, errMsg: '' };

export const fetchPromotions = createAsyncThunk(
    'promotions/fetchPromotions',
    async () => {
        const response = await fetch(baseURL + 'promtions');
        if (!response.ok) {
            return Promise.reject('Fetch promotions failed. Status code ' + response.status + '.');
        }
        const data = await response.json()
        return data;
    }
)

const promotionsSlice = createSlice({
    name: 'promotions',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPromotions.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchPromotions.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = ""; //Why do we need this even though it's already in initial state? Let's say we have an error the 1st time. We do not want errMsg. to show the 2nd time.
            state.promotionsArray = mapImageURL(action.payload)
        },
        [fetchPromotions.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Something wrong with Fetch Promotions Request.'
        }
    }
})

export const promotionsReducer = promotionsSlice.reducer;

export const selectFeaturedPromotion = state => state.promotions.promotionsArray.find(({featured}) => featured)

//export const selectFeaturedPromotionII = PROMOTIONS.find(({featured}) => featured)



