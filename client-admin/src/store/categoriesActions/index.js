import { SET_CATEGORIES } from '../actionTypes/index'
const baseUrl = 'http://localhost:3000'

function categoriesSuccessFetch(payload) {
    return {
        type: SET_CATEGORIES,
        data: payload
    }
}

function fetchCategories() {
    return async (dispatch) => {
        try {
            const response = await fetch(`${baseUrl}/categories`, {
                method: 'GET',
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })

            if (!response.ok) throw new Error('Something wrong happened!')
            const categories = await response.json()

            dispatch(categoriesSuccessFetch(categories))

        } catch (error) {
            console.log(error)
        }
    }
}

function addCategory(categoryInput) {
    return async (dispatch) => {
        try {
            await fetch(`${baseUrl}/categories` , {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    access_token: localStorage.getItem("access_token")
                },
                body : JSON.stringify(categoryInput)
            })
            dispatch(fetchCategories())
        } catch (error) {
            console.log(error)
        }
    }
}

function deleteCategory (id) {
    return async (dispatch) => {
        try {
            await fetch(`${baseUrl}/categories/${id}`, {
                method: 'DELETE',
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
            dispatch(fetchCategories())
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    categoriesSuccessFetch,
    fetchCategories,
    addCategory,
    deleteCategory
}