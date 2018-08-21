import { getCart } from '../api/moltinAPI'
import { put, call } from 'redux-saga/effects'
import { ActionTypes } from '../constants/constants'

const getCartSaga = function*() {
  try {
    const cart = yield call(getCart)
    yield put({
      type: ActionTypes.GET_CART_SUCCESS,
      payload: {
        ...cart
      }
    })
  } catch (e) {
    console.log('nie pobrało koszyka', e)
  }
}

export default getCartSaga
