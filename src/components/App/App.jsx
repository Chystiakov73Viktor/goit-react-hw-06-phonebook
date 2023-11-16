import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useSelector } from 'react-redux';
import { getContactsValue } from 'redux/contactsReducer';
import css from './App.module.css';

export function App() {
  const contacts = useSelector(getContactsValue);

  return (
    <div>
      <h1 className={css.tatel}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.tatel}>Contacts</h2>
      {contacts.length !== 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
}
