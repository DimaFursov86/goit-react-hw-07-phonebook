import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";
import types from "./app-types";

const addContact = createAction(types.ADD, ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction(types.DELETE);

const changeFilter = createAction(types.CHANGE_FILTER);

const phonebookActions = { addContact, deleteContact, changeFilter };
export default phonebookActions;

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {

//       id: shortid.generate(),
//       name,
//       number,
//     },

// });

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// export default { addContact, deleteContact, changeFilter };
