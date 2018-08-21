import { addToCart, getCart } from '../api/moltinAPI'
import { put, call } from 'redux-saga/effects'
import { ActionTypes } from '../constants/constants'

const addToCartSaga = function*(action) {
  try {
    yield call(addToCart, action.payload)
    const cart = yield call(getCart)
    yield put({
      type: ActionTypes.ADD_TO_CART_SUCCESS,
      payload: {
        ...cart
      }
    })
  } catch (error) {
    console.log('nie udało się dodać do koszyka', error)
  }
}

export default addToCartSaga
