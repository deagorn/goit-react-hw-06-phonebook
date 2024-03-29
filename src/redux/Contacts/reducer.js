import { ADD_CONTACT, ADD_TO_FAVORITE, CHANGE_FILTER, CHANGE_VALUE, EDIT_CONTACT, REMOVE_CONTACT } from "./constants"


const initialState = {
    items: [{ id: '1', name: 'Valik', number: 115515155, favorite: false },
    { id: '2', name: 'Olya', number: 5646546546, favorite: true }],
    filter: 'all',
    value: '',
}



export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_CONTACT:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            }
        case ADD_CONTACT:
            return {
                ...state,
                items: [...state.items, action.payload],
            }
        case CHANGE_FILTER:
            return {
                ...state,
                filter: action.payload,
            }
        case ADD_TO_FAVORITE:
            return {
                ...state,
                items: state.items.map(item => (item.id === action.payload ? { ...item, favorite: !item.favorite } : item)),
            }
        case EDIT_CONTACT:
            return {
                ...state,
                items: state.items.map(item => (item.id === action.payload.id ? { ...action.payload } : item)),
            }
        case CHANGE_VALUE:
			return {
				...state,
                value: action.payload,
			}
        default:
            return state;
    };
};