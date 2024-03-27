import { useSelector } from "react-redux"
import { ContactItem } from "./ContactItem"
import s from "./ContactList.module.css"

import React from 'react'
import { selectContacts } from "../../redux/Contacts/selectors"


export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    return (
        <ul className={s.listContainer}>
            {contacts.map(contact =>
                <ContactItem key={contact.id} {...contact} />)}
        </ul>
    )
}

