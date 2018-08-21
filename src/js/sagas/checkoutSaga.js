import { put, call } from 'redux-saga/effects'
import { ActionTypes } from '../constants/constants'
import { checkout } from '../api/moltinAPI'

const checkoutSaga = function*(action) {
  try {
    const order = yield call(checkout, action.payload)
    yield put({
      type: ActionTypes.CHECKOUT_SUCCESS,
      payload: {
        ...order.data
      }
    })
  } catch (e) {
    yield put({
      type: ActionTypes.CHECKOUT_FAIL
    })
    console.log('checkout error', e)
  }
}

export default checkoutSaga
