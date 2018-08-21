import { ActionTypes } from '../constants/constants'
import { addCartStatusToProduct } from '../utils/helpers'
import { productsToSections } from '../utils/helpers'

const _initialState = {
  list: null,
  visibleProducts: null
}

export default function reducer(state = _initialState, action) {
  switch (action.type) {
  case ActionTypes.GET_ALL_PRODUCTS_SUCCESS: {
    return {
      ...state,
      list: action.payload.data
    }
  }

  case ActionTypes.FIRST_RUN_SUCCESS: {
    return {
      ...state,
      list: action.payload.products
    }
  }

  case ActionTypes.ADD_TO_CART_SUCCESS:
  case ActionTypes.GET_CART_SUCCESS:
  case ActionTypes.REMOVE_CART_ITEM_SUCCESS:
  case ActionTypes.PAYMENT_SUCCESS:
  case ActionTypes.UPDATE_CART_ITEM_SUCCESS: {
    return {
      ...state,
      list: addCartStatusToProduct(action.payload, state)
    }
  }

  default:
    return state
  }
}

export const getProductsInSections = (products, categories) =>
  categories.length > 0 && products.length > 0
    ? productsToSections(products, categories)
    : null

export const getProductByID = (products, id) =>
  products.find(product => product.id === id)
