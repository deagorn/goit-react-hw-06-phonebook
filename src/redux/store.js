import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from '@redux-devtools/extension'
import { contactsReducer } from './Contacts/reducer'



const enhancer = devToolsEnhancer()

const rootReducer = combineReducers({
	contacts: contactsReducer,
})

export const store = createStore(rootReducer, enhancer)