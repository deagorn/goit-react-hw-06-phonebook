import { useSelector } from "react-redux"
import { ContactItem } from "./ContactItem"
import s from "./ContactList.module.css"

import React from 'react'
import { selectContacts, selectFilter } from "../../redux/Contacts/selectors"


export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    const filteredData = () => {
        switch (filter) {
            case 'favorites':
                return contacts.filter(item => item.favorite)
        
            default:
                return contacts;
        }

    }
    return (
        <ul className={s.listContainer}>
            {filteredData().map(contact =>
                <ContactItem key={contact.id} {...contact} />)}
        </ul>
    )
}

