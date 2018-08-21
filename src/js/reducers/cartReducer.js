import { ActionTypes } from '../constants/constants'

const _initialState = {}

export default function reducer(state = _initialState, action) {
  switch (action.type) {
  case ActionTypes.ADD_TO_CART_SUCCESS:
  case ActionTypes.GET_CART_SUCCESS:
  case ActionTypes.REMOVE_CART_ITEM_SUCCESS:
  case ActionTypes.UPDATE_CART_ITEM_SUCCESS:
    return {
      ...state,
      ...action.payload
    }

  case ActionTypes.FIRST_RUN_SUCCESS:
    return {
      ...state,
      ...action.payload.cart
    }

  case ActionTypes.PAYMENT_SUCCESS:
    return {
      ...state,
      data: null,
      meta: null
    }

  default:
    return state
  }
}

export const isCartEmpty = cart => {
  if (!cart.data || !cart.data.length) return true
  return false
}
