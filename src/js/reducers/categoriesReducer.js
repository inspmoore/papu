import { ActionTypes } from '../constants/constants'
import sortBy from 'lodash/sortBy'

const _initialState = {
  list: []
}

export default function reducer(state = _initialState, action) {
  switch (action.type) {
  case ActionTypes.FIRST_RUN_SUCCESS: {
    return {
      ...state,
      list: sortBy(action.payload.categories.data, 'slug')
    }
  }

  default: {
    return state
  }
  }
}
