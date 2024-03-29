import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./Contacts/slice";


export const store = configureStore({
	reducer:{contacts: contactsReducer}
})


//  Старий тулкіт

// import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "./Contacts/reducer";

// export const store = configureStore({
// 	reducer:{contacts: contactsReducer}
// })


// Звичайний редакс

// import { combineReducers, createStore } from 'redux'
// import { devToolsEnhancer } from '@redux-devtools/extension'
// import { contactsReducer } from './Contacts/reducer'


// const enhancer = devToolsEnhancer()

// const rootReducer = combineReducers({
// 	contacts: contactsReducer,
// })

// export const store = createStore(rootReducer, enhancer)