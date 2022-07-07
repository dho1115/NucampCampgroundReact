import { createSelector, createSlice } from "@reduxjs/toolkit";
import { COMMENTS } from "../../app/shared/COMMENTS";


const initialState = { commentsArray: COMMENTS };

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            // console.log({ payload: action.payload, comments: state.comments });
    
            const newComment = { id: state.commentsArray.length + 1, ...action.payload }
    
            state.commentsArray.push(newComment); //We can do this mutation b/c of Immer.
        }
    }
})
export const { addComment } = commentsSlice.actions; //Action creator.
console.log({ addComment });

export const commentsReducer = commentsSlice.reducer;

// console.log({ commentsSlice })
// console.log({ commentsReducer })

export const selectCommentsByCampsiteId = (campsiteId) => {
    return state => state.comments.commentsArray.filter(comment => comment.campsiteId === parseInt(campsiteId))
}

// createSelector( state => campsiteId => state.filter(comment => comment.campsiteId === parseInt(campsiteId)) )