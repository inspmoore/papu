import { ActionTypes } from '../constants/constants'

const _initialState = {
  pending: false,
  complete: false
}

export default function reducer(state = _initialState, action) {
  switch (action.type) {
  case ActionTypes.PAYMENT:
    return {
      pending: true,
      complete: false
    }

  case ActionTypes.PAYMENT_SUCCESS:
    return {
      ...state,
      pending: false,
      complete: true
    }

  case ActionTypes.PAYMENT_FAIL:
    return {
      ...state,
      ...action.payload,
      pending: false,
      complete: true
    }

  default:
    return state
  }
}

export const getErrorMessages = payment => {
  if (payment.errors) {
    if (payment.errors.length > 0) {
      return payment.errors
    }
  }

  return null
}
