import { configureStore, combineReducers } from "@reduxjs/toolkit";
import EstateReducer from "./ProductRedux";
import userReducer from "./userRedux";
import ProductRedux from "./ProductRedux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
  
  const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };
  
  const rootReducer = combineReducers({
  Estate: EstateReducer,
    users:userReducer,
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export let persistor = persistStore(store);