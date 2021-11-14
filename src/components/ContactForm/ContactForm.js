import { useState } from "react";
import s from "./ContactForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/app/app-actions";
import { getVisibleContacts } from "../../redux/app/app-selectors";

export default function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const getVcontacts = useSelector(getVisibleContacts);
  const handleSubmit = (e) => {
    e.preventDefault();

    const existName = getVcontacts.map((obj) => obj.name);
    if (existName.includes(name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(actions.addContact({ name, number }));
    }
    setName("");
    setNumber("");
  };

  return (
    <form className={s.formContact} onSubmit={handleSubmit}>
      <label className={s.contactFormItem}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <br />
      <label className={s.contactFormItem}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <button className={s.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
}
