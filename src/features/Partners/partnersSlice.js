import { createSlice } from "@reduxjs/toolkit";
import { PARTNERS } from "../../app/shared/PARTNERS";

const initialState = { partnersArray: PARTNERS };

const partnersSlice = createSlice({
    name: 'partners',
    initialState
});

console.log({ partnersSlice });

export const partnersReducer = partnersSlice.reducer;
export const selectAllPartners = () => PARTNERS;
export const selectFeaturedPartners = () => PARTNERS.find(({featured}) => featured)
