import React from 'react'
import s from "./ContactList.module.css"
import { useDispatch } from 'react-redux'
// import { addToFavorite } from '../../redux/Contacts/action'
import { MdDeleteOutline } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";
import { addToFavorite, removeContact } from '../../redux/Contacts/slice';


export const ContactItem = ({ id, name, number, favorite, handleEditItem }) => {
    const dispatch = useDispatch()
    return (
        <li key={id} className={s.listItem}>  <div className={s.contactInfo}>
            <span className={s.contactName}> {name} </span> : {number} </div>
            <button onClick={() => dispatch(addToFavorite(id))} type="button" className={s.deleteButton}>
                {favorite ? <BiSolidLike size={18}/> : <BiLike size={18} /> }
            </button>

            <button onClick={handleEditItem} type="button" className={s.deleteButton}>
                <MdOutlineEdit size={18} />
            </button>

            <button onClick={() => dispatch(removeContact(id))} type="button" className={s.deleteButton}>
                <MdDeleteOutline size={18} />
            </button>
        </li>
    )
}
