import { takeLatest } from 'redux-saga/effects'
import { ActionTypes } from '../constants/constants'
import firstRunSaga from './firstRunSaga'
import getCartSaga from './getCartSaga'
import addToCartSaga from './addToCartSaga'
import updateCartItemSaga from './updateCartItemSaga'
import removeCartItemSaga from './removeCartItemSaga'
import checkoutSaga from './checkoutSaga'
import paymentSaga from './paymentSaga'
import deleteCartSaga from './deleteCartSaga'

const root = function*() {
  yield takeLatest(ActionTypes.FIRST_RUN, firstRunSaga)
  yield takeLatest(ActionTypes.GET_CART, getCartSaga)
  yield takeLatest(ActionTypes.ADD_TO_CART, addToCartSaga)
  yield takeLatest(ActionTypes.UPDATE_CART_ITEM, updateCartItemSaga)
  yield takeLatest(ActionTypes.REMOVE_CART_ITEM, removeCartItemSaga)
  yield takeLatest(ActionTypes.CHECKOUT, checkoutSaga)
  yield takeLatest(ActionTypes.PAYMENT, paymentSaga)
  yield takeLatest(ActionTypes.DELETE_CART, deleteCartSaga)
}

export default root
