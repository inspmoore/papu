import { put, call } from 'redux-saga/effects'
import { ActionTypes } from '../constants/constants'
import { removeCartItem } from '../api/moltinAPI'

const removeCartItemSaga = function*(action) {
  try {
    const cart = yield call(removeCartItem, action.payload)
    yield put({
      type: ActionTypes.REMOVE_CART_ITEM_SUCCESS,
      payload: {
        ...cart
      }
    })
  } catch (e) {
    console.log('nie udało się usunąć produktu z koszyka', e)
  }
}

export default removeCartItemSaga
