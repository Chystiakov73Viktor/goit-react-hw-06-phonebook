import React from 'react';
import { useSelector } from 'react-redux';
import { getContactsValue, getFilteredValue } from 'redux/contactsReducer';
import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContactsValue);
  const filterContacts = useSelector(getFilteredValue);

  const getFilteredContacts = () => {
    const changeFilterCase = filterContacts.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(changeFilterCase)
    );
  };

  const contactFiltered = getFilteredContacts();

  return (
    <ul className={css.list}>
      {contactFiltered.map(contact => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </ul>
  );
};
