import {
  authenticate,
  getAllProducts,
  getAllCategories,
  getCart
} from '../api/moltinAPI'
import { call, put, all } from 'redux-saga/effects'
import { ActionTypes } from '../constants/constants'
import { expandProductData } from '../utils/helpers'

const firstRunSaga = function*() {
  try {
    const moltin = yield call(authenticate)
    const [products, categories, cart] = yield all([
      call(getAllProducts),
      call(getAllCategories),
      call(getCart)
    ])
    yield put({
      type: ActionTypes.FIRST_RUN_SUCCESS,
      payload: {
        moltin,
        products: expandProductData(
          products.data,
          categories.data,
          products.included.main_images,
          cart
        ),
        categories,
        cart
      }
    })
  } catch (e) {
    console.log('chuj się nie zalogowało', e)
  }
}

export default firstRunSaga
