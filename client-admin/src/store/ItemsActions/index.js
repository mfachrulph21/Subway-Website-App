import { SET_ITEMS, SET_INGREDIENTS } from '../actionTypes/index'
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

function ingredientsSuccessFetch(payload) {
    return {
        type: SET_INGREDIENTS,
        data: payload
    }
}   

function fetchIngredients() {
    return async (dispatch) => {
        const response = await fetch(`${baseUrl}/ingredients`)

        if (!response.ok) throw new Error('Something wrong happened!')

        const ingredients = await response.json()

        dispatch(ingredientsSuccessFetch(ingredients))
    }
}

function addItems(payload) {
    return async (dispatch) => {
        try {
            const response = fetch("http://localhost:3000/items", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    access_token: localStorage.getItem("access_token"),
                },
                body: JSON.stringify(payload)
            })

            if (!response.ok) {
                throw await response.text()
            }

            const data = await response.json()
            dispatch(fetchItems())
            
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    fetchItems,
    itemsSuccessFetch,
    fetchIngredients,
    ingredientsSuccessFetch,
    addItems
}


