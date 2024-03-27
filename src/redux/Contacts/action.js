import { ADD_CONTACT, REMOVE_CONTACT } from "./constants";

export const removeContact = (id) => ({ type: REMOVE_CONTACT, payload: id })
export const addContacts = (item) =>  ({type:ADD_CONTACT, payload:item})
