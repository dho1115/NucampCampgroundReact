import { createSelector, createSlice } from "@reduxjs/toolkit";
import { COMMENTS } from "../../app/shared/COMMENTS";


const initialState = { commentsArray: COMMENTS };

const commentsSlice = createSlice({
    name: 'comments',
    initialState
})

export const commentsReducer = commentsSlice.reducer;

console.log({ commentsSlice })
console.log({ commentsReducer })

export const selectCommentsByCampsiteId = (campsiteId) => {
    return state => state.comments.commentsArray.filter(comment => comment.campsiteId === parseInt(campsiteId))
}

// createSelector( state => campsiteId => state.filter(comment => comment.campsiteId === parseInt(campsiteId)) )