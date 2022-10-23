import {
    SET_ITEMS,
    SET_INGREDIENTS,
    SUCCESS_FETCH_DETAIL,
  } from "../actionTypes/index";
  // const baseUrl = "http://localhost:3000";
  const baseUrl= 'https://subwhy-server.herokuapp.com'
  
  function itemsSuccessFetch(payload) {
    return {
      type: SET_ITEMS,
      data: payload,
    };
  }
  
  function fetchItems() {
    return async (dispatch) => {
      try {
        const response = await fetch(`${baseUrl}/items`, {
          method: "GET",
          headers: {
            access_token: localStorage.getItem(`access_token`),
          },
        });
  
        if (!response.ok) throw new Error("Something wrong happened!");
  
        const items = await response.json();
  
        dispatch(itemsSuccessFetch(items));
      } catch (error) {
        console.log(error);
      }
    };
  }
  
  function ingredientsSuccessFetch(payload) {
    return {
      type: SET_INGREDIENTS,
      data: payload,
    };
  }
  
  function fetchIngredients() {
    return async (dispatch) => {
      const response = await fetch(`${baseUrl}/items/ingredients`, {
        method: "GET",
        headers: {
          access_token: localStorage.getItem(`access_token`),
        },
      });
  
      if (!response.ok) throw new Error("Something wrong happened!");
  
      const ingredients = await response.json();
  
      dispatch(ingredientsSuccessFetch(ingredients));
    };
  }
  
  function addItems(payload) {
    return async (dispatch) => {
      try {
        const response = await fetch(`${baseUrl}/items`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            access_token: localStorage.getItem("access_token"),
          },
          body: JSON.stringify(payload),
        });
        
        if (!response.ok) {
            throw await response.text();
        }
        
        const data = await response.json();
        
        dispatch(fetchItems());
      } catch (error) {
        console.log(error);
      }
    };
  }
  
  function itemDetailSuccess(payload) {
    return {
      type: SUCCESS_FETCH_DETAIL,
      data: payload,
    };
  }
  
  function itemDetail(id) {
    return async (dispatch) => {
      try {
        const response = await fetch(`${baseUrl}/items/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            access_token: localStorage.getItem("access_token"),
          },
        });
  
        if (!response.ok) {
          throw await response.text();
        }
        const item = await response.json();
  
        dispatch(itemDetailSuccess(item));
      } catch (error) {
        console.log(error);
      }
    };
  }
  
  function editItem(payload, id) {
    return async (dispatch) => {
      try {
        const response = await fetch(`${baseUrl}/items/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            access_token: localStorage.getItem("access_token"),
          },
          body: JSON.stringify(payload),
        });
  
        if (!response.ok) {
          throw response;
        }
  
        const item = await response.json();
        dispatch(fetchItems());
      } catch (error) {
        console.log(error);
      }
    };
  }
  
  function deleteItem(id) {
    return async (dispatch) => {
      try {
        await fetch(`${baseUrl}/items/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            access_token: localStorage.getItem(`access_token`),
          },
        });
        dispatch(fetchItems());
      } catch (error) {
        console.log(error);
      }
    };
  }
  
  export {
    fetchItems,
    itemsSuccessFetch,
    fetchIngredients,
    ingredientsSuccessFetch,
    addItems,
    itemDetail,
    editItem,
    deleteItem,
  };
  