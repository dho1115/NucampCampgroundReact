import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { campsitesReducer } from '../features/Campsites/campsitesSlice';
import { commentsReducer } from '../features/Comments/commentsSlice';
import { partnersReducer } from '../features/Partners/partnersSlice';
import { promotionsReducer } from '../features/Promotions/PromotionsSlice';
import { userReducer } from '../features/User/userSlice';

// import counterReducer from '../features/counter/counterSlice';

console.log({ partnersReducer });

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: promotionsReducer,
    user: userReducer
  },
  
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat([logger])
  }
});

console.log({ store: store.getState() })