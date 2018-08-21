import { ActionTypes } from '../constants/constants'

const _initialState = {}

export default function reducer(state = _initialState, action) {
  switch (action.type) {
  case ActionTypes.CHECKOUT:
    return {
      pending: true
    }

  case ActionTypes.CHECKOUT_SUCCESS:
    return {
      ...state,
      ...action.payload,
      pending: false
    }

  case ActionTypes.CHECKOUT_FAIL:
    return {
      ...state,
      pending: false
    }

  case ActionTypes.PAYMENT_SUCCESS:
    return {
      //removes all order data
      ..._initialState
    }

  default:
    return state
  }
}

export const getOrderDetails = state => ({
  id: state.id,
  first_name: state.shipping_address.first_name,
  last_name: state.shipping_address.last_name
})

export const getOrderData = state => {
  if (!state.shipping_address) return {}
  return {
    first_name: state.shipping_address.first_name,
    last_name: state.shipping_address.last_name,
    email: state.customer.email,
    address: state.shipping_address.line_1,
    instructions: state.shipping_address.instructions
  }
}

export const isCheckoutValid = checkout => {
  if (checkout) {
    if (
      checkout.id &&
      checkout.status === 'incomplete' &&
      checkout.payment === 'unpaid'
    ) {
      return true
    }
  }
  return false
}
