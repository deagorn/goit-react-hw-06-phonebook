import { ADD_CONTACT, CHANGE_FILTER, CHANGE_VALUE, REMOVE_CONTACT } from "./constants";

export const removeContact = (id) => ({ type: REMOVE_CONTACT, payload: id })
export const addContacts = (item) => ({ type: ADD_CONTACT, payload: item })
export const changeFilter = (filtre) =>  ({type:CHANGE_FILTER, payload:filtre})
export const changeValue = (value) => ({
	type: CHANGE_VALUE,
	payload: value,
})
