import { FETCH_ITEMS, FETCH_ITEMS_DETAILS, FETCH_LOADING} from '../actionTypes/itemActionsType'

const baseUrl = "http://localhost:3000";

export function fetchProductSuccess(data) {
    return {
        type: FETCH_ITEMS,
        payload: data
    }
}

export function fetchDetailSuccess(data) {
    return {
        type: FETCH_ITEMS_DETAILS,
        payload: data
    }
}

export function loadingFetch(loading) {
    return {
        type: FETCH_LOADING,
        loading: loading
    }
}

export function fetchProducts() {
    return async (dispatch) => {

        dispatch(loadingFetch(true))

        try {
            const response = await fetch(`${baseUrl}/pub/items`)

            if (!response.ok) {
                throw new Error(`Something's Wrong!`)
            }

            const items = await response.json()

            dispatch(fetchProductSuccess(items))
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(loadingFetch(false))
        }
    }
}

export function fetchDetail(id) {
    return async (dispatch) => {
        dispatch(loadingFetch(true))
        try {
            const response = await fetch(`${baseUrl}/pub/items/${id}`)

            if (!response.ok) {
                throw new Error(`Something's Wrong!`)
            }
            const items = await response.json()

            dispatch(fetchDetailSuccess(items))
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(loadingFetch(false))
        }
    }
}