import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import appReducer from "./app/app-reducer";
import { contactApi } from "./app/contactSlice";
import logger from "redux-logger";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactApi.middleware,
  logger,
];

export const store = configureStore({
  reducer: {
    contacts: appReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

setupListeners(store.dispatch);

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import logger from "redux-logger";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import appReducer from "./app/app-reducer";

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];

// const contactsPersistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };

// export const store = configureStore({
//   reducer: {
//     contacts: persistReducer(contactsPersistConfig, appReducer),
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === "development",
// });

// export const persistor = persistStore(store);

// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import counterReducer from './counter/counter-reducer';
// import appReducer from './app/app-reducer';

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   Phonebook: appReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
