import { ActionTypes } from '../constants/constants'

export function showProductDetails({ name, image, qy, id }) {
  // console.log(payload)

  return {
    type: ActionTypes.SHOW_DETAILS,
    payload: { name, image, qy, id }
  }
}

export function hideProductDetails() {
  return {
    type: ActionTypes.HIDE_DETAILS
  }
}

export function showCart() {
  return {
    type: ActionTypes.SHOW_CART
  }
}
export function hideCart() {
  return {
    type: ActionTypes.HIDE_CART
  }
}
