import {configureStore} from '@reduxjs/toolkit';
import countriesReducer from '../features/countriesdropdown/CountriesSlice';
import menuReducer from '../features/countriesdropdown/menuSlice';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, countriesReducer);
const persistedMenuReducer = persistReducer(persistConfig, menuReducer);

export const store = configureStore({
  reducer: {
    dropdown: persistedReducer,
    menu: persistedMenuReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
