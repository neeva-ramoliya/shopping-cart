const setCartInLocalStorage = cartData => {
  localStorage.setItem("cartData", JSON.stringify(cartData));
};

const getCartFromLocalStorage = () => {
  const cartData = localStorage.getItem("cartData");
  return cartData ? JSON.parse(cartData) : [];
};

const defaultState = {
  products: [],
  cartProducts: getCartFromLocalStorage(),
  isLoading: true,
  errorInProductFetch: null,
  discountType: {
    type: "fiction",
    amount: 15 // (in %)
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "REQUEST_PRODUCTS": {
      return {
        ...state,
        isLoading: true
      };
    }

    case "SET_ERROR_IN_PRODUCT_FETCH": {
      return {
        ...state,
        isLoading: false,
        errorInProductFetch: action.errorMessage
      };
    }
    case "SET_PRODUCTS":
      return {
        ...state,
        isLoading: false,
        products: action.data
      };

    case "ADD_TO_CART": {
      const cartProducts = [...state.cartProducts];
      const exists = cartProducts.find(item => item.id == action.id);
      (!!exists && exists.qty++) ||
        cartProducts.push({ id: action.id, qty: 1 });
      setCartInLocalStorage(cartProducts);
      return {
        ...state,
        cartProducts
      };
    }

    case "REMOVE_FROM_CART": {
      let cartProducts = [...state.cartProducts];
      cartProducts = cartProducts.filter(item => item.id != action.id);
      setCartInLocalStorage(cartProducts);
      return {
        ...state,
        cartProducts
      };
    }

    case "SET_QUANTITY": {
      const cartProducts = [...state.cartProducts];
      const item = cartProducts.find(item => item.id == action.id);
      item.qty = action.qty;
      setCartInLocalStorage(cartProducts);
      return {
        ...state,
        cartProducts
      };
    }

    default:
      return state;
  }
};
