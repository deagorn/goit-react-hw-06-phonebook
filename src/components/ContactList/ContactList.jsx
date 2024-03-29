import { useSelector } from "react-redux"
import { ContactItem } from "./ContactItem"
import s from "./ContactList.module.css"

import React from 'react'
import { selectContacts, selectFilter, selectValue } from "../../redux/Contacts/selectors"


export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const value = useSelector(selectValue);

    const filteredItems = contacts;
        
        

    const filteredData = () => {
        switch (filter) {
            case 'all':
                return contacts.filter(contact =>
                    contact.name.toLowerCase().includes(value.toLowerCase())
                );
            
            case 'favorites':
                return contacts.filter(contact =>
                    contact.name.toLowerCase().includes(value.toLowerCase()) && contact.favorite)
            
            default:
                return filteredItems;
        }
    }

    return (
        <ul className={s.listContainer}>
            {filteredData().map(contact =>
                <ContactItem key={contact.id} {...contact} />)}
        </ul>
    )
}

