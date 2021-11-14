import s from "./ContactItem.module.scss";
import PropTypes from "prop-types";
import { useDeleteContactMutation } from "../../redux/app/contactSlice";
import Loader from "../Loader/Loader";

export default function ContactItem({ id, name, phone }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <div className={s.contactItem}>
      <p className={s.contactItemText}>{name}</p>
      <p className={s.contactItemText}>{phone}</p>
      <button
        type="button"
        disabled={isLoading}
        className={s.contactItemTextB}
        onClick={() => deleteContact(id)}
      >
        {isLoading ? <Loader /> : "Delete"}
      </button>
    </div>
  );
}
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
