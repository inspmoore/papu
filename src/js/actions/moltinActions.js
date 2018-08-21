import { ActionTypes } from '../constants/constants'

export function firstRun() {
  return {
    type: ActionTypes.FIRST_RUN
  }
}

export function authenticate() {
  return {
    type: ActionTypes.STORE_AUTH
  }
}

export function getAllCategories() {
  return {
    type: ActionTypes.GET_ALL_CATEGORIES_W_PRODUCTS
  }
}

export function getAllProducts() {
  return {
    type: ActionTypes.GET_ALL_PRODUCTS
  }
}

export function getCart() {
  return {
    type: ActionTypes.GET_CART
  }
}

/* Add an item to the cart.
id :string - Moltin product id  
qy :number - integer for quantity of the product. */
export function addToCart({ id, qy }) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      id,
      qy
    }
  }
}

/* Update quantity of an item in the cart */
export function updateCartItem({ id, qy }) {
  console.log('actions', id, qy)

  return {
    type: ActionTypes.UPDATE_CART_ITEM,
    payload: {
      id,
      qy
    }
  }
}

export function removeCartItem({ id }) {
  return {
    type: ActionTypes.REMOVE_CART_ITEM,
    payload: {
      id
    }
  }
}

export function checkout({
  first_name,
  last_name,
  email,
  address,
  instructions
}) {
  return {
    type: ActionTypes.CHECKOUT,
    payload: {
      first_name,
      last_name,
      email,
      address,
      instructions
    }
  }
}

export function payment({ number, month, year, verification_value }) {
  return {
    type: ActionTypes.PAYMENT,
    payload: {
      number,
      month,
      year,
      verification_value
    }
  }
}

export function deleteCart() {
  return {
    type: ActionTypes.DELETE_CART
  }
}
