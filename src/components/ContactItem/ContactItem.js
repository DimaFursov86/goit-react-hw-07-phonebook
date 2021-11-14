import s from "./ContactItem.module.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import actions from "../../redux/app/app-actions";
import { useDeleteContactMutation } from "../../redux/app/contactSlice";

export default function ContactItem({ id, name, phone }) {
  // const dispatch = useDispatch();
  const [deleteContact, { isLoading, isSuccess }] = useDeleteContactMutation();

  return (
    <div className={s.contactItem}>
      <p className={s.contactItemText}>{name}</p>
      <p className={s.contactItemText}>{phone}</p>
      <button
        type="button"
        className={s.contactItemText}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
}
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
