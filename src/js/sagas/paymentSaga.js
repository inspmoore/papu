import { put, call, select } from 'redux-saga/effects'
import { ActionTypes } from '../constants/constants'
import { payment, deleteCart } from '../api/moltinAPI'
import { getOrderDetails } from '../reducers/index'

const paymentSaga = function*(action) {
  try {
    const details = yield select(getOrderDetails)
    const body = {
      ...action.payload,
      ...details
    }

    yield call(payment, body)
    yield call(deleteCart)
    yield put({
      type: ActionTypes.PAYMENT_SUCCESS,
      payload: {
        //fake cart
        data: [],
        meta: null
      }
    })
  } catch (error) {
    yield put({
      type: ActionTypes.PAYMENT_FAIL,
      payload: {
        ...error
      }
    })
    console.log('nie udało się zapłacić', error)
  }
}

export default paymentSaga
