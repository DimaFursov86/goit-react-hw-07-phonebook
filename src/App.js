// import { useState, useEffect } from "react";
// import shortid from "shortid";
// import contactsObj from "./contacts.json";

import Section from "./components/Section";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import s from "./App.module.scss";

export default function Phonebook() {
  return (
    <Section>
      <div className={s.box}>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Section>
  );
}

// const [contacts, setContacts] = useState(contactsObj);
// const [filter, setFilter] = useState("");

// useEffect(() => {
//   const contacts = window.localStorage.getItem("contacts");
//   const parsedContacts = JSON.parse(contacts);
//   if (parsedContacts) {
//     setContacts(parsedContacts);
//   }
// }, []);

// useEffect(() => {
//   window.localStorage.setItem("contacts", JSON.stringify(contacts));
// }, [contacts]);

// const addContact = ({ name, number }) => {
//   const contact = {
//     id: shortid.generate(),
//     name,
//     number,
//   };
//   const nameArr = getVisibleContacts();
//   const existName = nameArr.map((obj) => obj.name);
//   if (existName.includes(name)) {
//     alert(`${name} is already in contacts`);
//   } else {
//     setContacts([...contacts, contact]);
//   }
// };

// const getVisibleContacts = () => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

// const deleteContact = (contactId) => {
//   setContacts(contacts.filter((contact) => contact.id !== contactId));
// };

// const changeFilter = (e) => {
//   setFilter(e.currentTarget.value);
// };

//   return (
//     <Section>
//       <div className={s.box}>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={addContact} />

//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={changeFilter} />
//         <ContactList
//           contacts={getVisibleContacts()}
//           onDeleteContact={deleteContact}
//         />
//       </div>
//     </Section>
//   );
// }
