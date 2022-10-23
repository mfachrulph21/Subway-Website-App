import { SET_ITEMS, SET_INGREDIENTS, SUCCESS_FETCH_DETAIL } from '../actionTypes/index'

const initialState = {
    items : [],
    ingredients: [],
    itemDetail : {}
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

        case SUCCESS_FETCH_DETAIL:
            return {
                ...state,
                itemDetail: action.data
            }

        default: 
        return state;
    }
}

export default itemReducer;
