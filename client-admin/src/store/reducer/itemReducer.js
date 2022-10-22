import { SET_ITEMS, SET_INGREDIENTS } from '../actionTypes/index'

const initialState = {
    items : [],
    ingredients: []
}

function itemReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: action.data
            }

        case SET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.data
            }

        default: 
        return state;
    }
}

export default itemReducer;
