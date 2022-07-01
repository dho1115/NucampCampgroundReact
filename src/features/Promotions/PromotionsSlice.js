import { createSlice } from '@reduxjs/toolkit';
import { PROMOTIONS } from '../../app/shared/PROMOTIONS';

const initialState = { promotionsArray: PROMOTIONS };

const promotionsSlice = createSlice({
    name: 'promotions',
    initialState
})

export const promotionsReducer = promotionsSlice.reducer;

export const selectFeaturedPromotion = state => state.promotions.promotionsArray.find(({featured}) => featured)

//export const selectFeaturedPromotionII = PROMOTIONS.find(({featured}) => featured)



