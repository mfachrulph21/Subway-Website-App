import { SET_CATEGORIES } from '../actionTypes/index'
const baseUrl = 'http://localhost:4000'

function categoriesSuccessFetch(payload) {
    return {
        type: SET_CATEGORIES,
        data: payload
    }
}

function fetchCategories() {
    return async (dispatch) => {
        try {
            const response = await fetch(`${baseUrl}/categories`)

            if (!response.ok) throw new Error('Something wrong happened!')
            const categories = await response.json()

            dispatch(categoriesSuccessFetch(categories))

        } catch (error) {
            console.log(error)
        }
    }
}

export {
    categoriesSuccessFetch,
    fetchCategories
}