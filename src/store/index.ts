import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import ridesReducer from "@/modules/rides/redux/slices/ridesSlice";
import bookingReducer from "@/modules/booking/redux/slices/bookingSlice";
import profileReducer from "@/modules/profile/redux/slices/profileSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["profile", "booking"],
};

const rootReducer = combineReducers({
  rides: ridesReducer,
  booking: bookingReducer,
  profile: profileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;