import { put, call } from 'redux-saga/effects'
import { ActionTypes } from '../constants/constants'
import { updateCartItem } from '../api/moltinAPI'

const updateCartItemSaga = function*(action) {
  console.log('zaaktualizowano- ', action)
  try {
    const cart = yield call(updateCartItem, action.payload)
    yield put({
      type: ActionTypes.UPDATE_CART_ITEM_SUCCESS,
      payload: {
        ...cart
      }
    })
  } catch (e) {
    console.log('nie udało się zaaktualizawoać koszyka', e)
  }
}

export default updateCartItemSaga
