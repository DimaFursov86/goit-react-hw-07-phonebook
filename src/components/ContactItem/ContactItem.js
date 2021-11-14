import s from "./ContactItem.module.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import actions from "../../redux/app/app-actions";

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div className={s.contactItem}>
      <p className={s.contactItemText}>{name}</p>
      <p className={s.contactItemText}>{number}</p>
      <button
        type="button"
        className={s.contactItemText}
        onClick={() => dispatch(actions.deleteContact(id))}
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
