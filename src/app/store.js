import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/Campsites/campsitesSlice';
import { commentsReducer } from '../features/Comments/commentsSlice';
import { parntersReducer } from '../features/Partners/partnersSlice';

// import counterReducer from '../features/counter/counterSlice';

console.log({ parntersReducer });

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer,
    parnters: parntersReducer
  },
});
