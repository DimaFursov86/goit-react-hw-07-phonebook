import s from "./ContactList.module.scss";
import ContactItem from "../ContactItem";
// import { useSelector } from "react-redux";
// import { GetVisibleContacts } from "../../redux/app/app-selectors";
import { useFetchContactsQuery } from "../../redux/app/contactSlice";
import { getFilter } from "../../redux/app/app-selectors";
import { useSelector } from "react-redux";

export default function ContactList() {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const value = useSelector(getFilter);

  const getVcontacts =
    contacts &&
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

  // const vcontacts = useSelector(GetVisibleContacts);
  console.log(contacts);
  return (
    <ul className={s.contactList}>
      {contacts &&
        getVcontacts.map(({ id, name, phone }) => (
          <li key={id}>
            <ContactItem id={id} name={name} number={phone} />
          </li>
        ))}
    </ul>
  );
}
