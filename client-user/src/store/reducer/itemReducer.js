import {FETCH_ITEMS, FETCH_ITEMS_DETAILS, FETCH_LOADING} from '../actionTypes/itemActionsType'

const initialState = {
  items: [],
  detail: {},
  loading: false
}


function itemReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload
      }
    case FETCH_ITEMS_DETAILS:
      return {
        ...state,
        detail: action.payload
      }
    case FETCH_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    default:
      return state
  }
}

export default itemReducer;