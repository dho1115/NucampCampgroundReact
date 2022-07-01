import { createSlice } from "@reduxjs/toolkit";
import { PARTNERS } from "../../app/shared/PARTNERS";

const initialState = { partnersList: PARTNERS }

const partnersSlice = createSlice({
    name: 'partners',
    initialState
})

console.log({ partnersSlice });

export const parntersReducer = partnersSlice.reducer;
export const selectAllPartners = () => PARTNERS;
export const selectFeaturedPartners = () => PARTNERS.find(({featured}) => featured)
