// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './baseApi';
import themeReducer from '../redux/theme/themeSlice.jsx';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
 
};

const persistedThemeReducer = persistReducer(persistConfig, themeReducer);

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);
export default store;
