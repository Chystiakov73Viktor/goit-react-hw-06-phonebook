import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts, getFilteredValue } from 'redux/contactsReducer';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterContacts = useSelector(getFilteredValue);

  return (
    <div className={css.container}>
      <label>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={filterContacts}
          onChange={evt =>
            dispatch(getFilteredContacts(evt.currentTarget.value))
          }
        />
      </label>
    </div>
  );
};
