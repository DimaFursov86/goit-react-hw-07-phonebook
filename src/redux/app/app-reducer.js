import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./app-actions";

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  filter,
});

// import { combineReducers } from 'redux';
// import types from './app-selectors';
// import contactsObj from "./contacts.json";

// const contacts = (state = contactsObj, { type, payload }) => {
//   switch (type) {
//       case types.ADD:

//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   contacts,
//   filter,
// });
