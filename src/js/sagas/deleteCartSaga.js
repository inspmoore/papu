import { put, call } from 'redux-saga/effects'
import { ActionTypes } from '../constants/constants'
import { deleteCart } from '../api/moltinAPI'

const deleteCartSaga = function*() {
  try {
    const cart = yield call(deleteCart)
    yield put({
      type: ActionTypes.DELETE_CART_SUCCESS,
      payload: {
        ...cart
      }
    })
  } catch (e) {
    put({
      type: ActionTypes.DELETE_CART_FAIL,
      payload: {
        ...e
      }
    })
    console.log('nie usunęło koszyka', e)
  }
}

export default deleteCartSaga
