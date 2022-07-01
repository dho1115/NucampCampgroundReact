import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/Campsites/campsitesSlice';
import { commentsReducer } from '../features/Comments/commentsSlice';
import { partnersReducer } from '../features/Partners/partnersSlice';
import { promotionsReducer } from '../features/Promotions/PromotionsSlice';

// import counterReducer from '../features/counter/counterSlice';

console.log({ partnersReducer });

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: promotionsReducer
  }
});

console.log({ store: store.getState() })