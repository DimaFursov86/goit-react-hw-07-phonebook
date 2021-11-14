import { createAction } from "@reduxjs/toolkit";

const changeFilter = createAction("phonebook/changeFilter");

const phonebookActions = { changeFilter };
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
