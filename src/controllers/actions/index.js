const APIS = {
  PRODUCT_LIST: "https://api.myjson.com/bins/qhnfp"
};
export const fetchProductList = () => {
  return dispatch => {
    fetch(APIS.PRODUCT_LIST)
      .then(res => {
        (res.status == 200 &&
          res.json().then(data => {
            dispatch(setProducts(data));
          })) ||
          dispatch(setErrorInProductFetch(res.statusText));
      })
      .catch(err => {
        err.text().then(errorMessage => {
          dispatch(setErrorInProductFetch(errorMessage));
        });
      });
  };
};

const setErrorInProductFetch = errorMessage => {
  return {
    type: "SET_ERROR_IN_PRODUCT_FETCH",
    errorMessage
  };
};
const setProducts = data => {
  return {
    type: "SET_PRODUCTS",
    data
  };
};

export const addToCart = id => {
  return {
    type: "ADD_TO_CART",
    id
  };
};

export const removeFromCart = id => {
  return {
    type: "REMOVE_FROM_CART",
    id
  };
};

export const setItemQuanity = (id, qty) => {
  return {
    type: "SET_QUANTITY",
    id,
    qty
  };
};

export const requestProducts = () => {
  return {
    type: "REQUEST_PRODUCTS"
  };
};
