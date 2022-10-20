import { SET_ITEMS } from '../actionTypes/index'
const baseUrl = 'http://localhost:4000'

function itemsSuccessFetch(payload) {
    return {
        type: SET_ITEMS,
        data: payload
    }
}

function fetchItems() {
    return async (dispatch) => {
        try {
            const response = await fetch(`${baseUrl}/items?_expand=author&_expand=category`)

            if (!response.ok) throw new Error('Something wrong happened!')

            const items = await response.json()

            dispatch(itemsSuccessFetch(items))
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    fetchItems,
    itemsSuccessFetch
}


