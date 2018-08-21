import { ActionTypes } from '../constants/constants'

const _initialState = {
  authenticated: false
}

export default function reducer(state = _initialState, action) {
  switch (action.type) {
  case ActionTypes.FIRST_RUN_SUCCESS:
    return {
      ...state,
      authenticated: true,
      ...action.payload.moltin
    }

  default:
    return state
  }
}
