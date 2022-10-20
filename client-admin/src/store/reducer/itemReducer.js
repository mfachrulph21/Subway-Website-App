import { SET_ITEMS } from '../actionTypes/index'

const initialState = {
    items : [],
    isLoading :
}

function itemReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: action.data
            }
        default: 
        return state;
    }
}

export default itemReducer;
