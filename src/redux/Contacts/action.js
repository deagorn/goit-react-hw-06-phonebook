import { ADD_CONTACT, ADD_TO_FAVORITE, CHANGE_FILTER, CHANGE_VALUE, EDIT_CONTACT, REMOVE_CONTACT } from "./constants";

export const removeContact = (id) => ({ type: REMOVE_CONTACT, payload: id })
export const addContacts = (item) => ({ type: ADD_CONTACT, payload: item })
export const changeFilter = (filtre) =>  ({type:CHANGE_FILTER, payload:filtre})
export const changeValue = (value) => ({
	type: CHANGE_VALUE,
	payload: value,
})
export const addToFavorite = (id) => ({ type: ADD_TO_FAVORITE, payload: id })
export const editContact = (contact) => ({ type: EDIT_CONTACT, payload: contact })


