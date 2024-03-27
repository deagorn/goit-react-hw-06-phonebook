import React from 'react'
import s from "./ContactList.module.css"
import { useDispatch } from 'react-redux'
import { removeContact } from '../../redux/Contacts/action'

export const ContactItem = ({ id, name, number, favorite }) => {
    const dispatch = useDispatch()
    return (
        <li key={id} className={s.listItem}>  <div className={s.contactInfo}>
            <span className={s.contactName}> {name} </span> : {number} </div>
            <button onClick={() => dispatch(removeContact(id))} type="button" className={s.deleteButton}>
                Delete
            </button>
        </li>
    )
}
