import { ActionTypes } from '../constants/constants'

const _initialState = {
  visible: false,
  product: null
}

export default function reducer(state = _initialState, action) {
  switch (action.type) {
  case ActionTypes.SHOW_DETAILS:
    return {
      ...state,
      visible: true,
      product: action.payload
    }

  case ActionTypes.HIDE_DETAILS:
    return {
      ...state,
      visible: false,
      product: null
    }

  default:
    return state
  }
}
