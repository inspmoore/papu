import { combineReducers } from 'redux'
import moltinAPI from './moltinAPIReducer'
import categories from './categoriesReducer'
import cart, * as fromCart from './cartReducer'
import products, * as fromProducts from './productsReducer'
import order, * as fromOrders from './orderReducer'
import payment, * as fromPayment from './paymentReducer'
import modal from './modalReducer'

export default combineReducers({
  moltinAPI,
  categories,
  products,
  cart,
  order,
  payment,
  modal
})

// SELECTORS
export const getOrderDetails = state => fromOrders.getOrderDetails(state.order)

export const getOrderData = state => fromOrders.getOrderData(state.order)

export const getProductsInSections = (products, categories) =>
  fromProducts.getProductsInSections(products, categories)

export const getProductByID = (products, id) =>
  fromProducts.getProductByID(products, id)

export const isCartEmpty = state => fromCart.isCartEmpty(state.cart)

export const isCheckoutValid = state => fromOrders.isCheckoutValid(state.order)

export const getErrorMessages = state =>
  fromPayment.getErrorMessages(state.payment)
