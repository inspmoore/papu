import keyMirror from 'keymirror'

export const ActionTypes = keyMirror({
  STORE_AUTH: null,
  STORE_AUTH_SUCCESS: null,
  STORE_AUTH_FAIL: null,
  GET_ALL_CATEGORIES: null,
  GET_ALL_CATEGORIES_SUCCESS: null,
  GET_ALL_CATEGORIES_FAIL: null,
  GET_ALL_PRODUCTS: null,
  GET_ALL_PRODUCTS_SUCCESS: null,
  GET_ALL_PRODUCTS_FAIL: null,
  FIRST_RUN: null,
  FIRST_RUN_SUCCESS: null,
  FIRST_RUN_FAIL: null,
  GET_CART: null,
  GET_CART_SUCCESS: null,
  GET_CART_FAIL: null,
  ADD_TO_CART: null,
  ADD_TO_CART_SUCCESS: null,
  ADD_TO_CART_FAIL: null,
  UPDATE_CART_ITEM: null,
  UPDATE_CART_ITEM_SUCCESS: null,
  UPDATE_CART_ITEM_FAIL: null,
  REMOVE_CART_ITEM: null,
  REMOVE_CART_ITEM_SUCCESS: null,
  REMOVE_CART_ITEM_FAIL: null,
  CHECKOUT: null,
  CHECKOUT_SUCCESS: null,
  CHECKOUT_FAIL: null,
  PAYMENT: null,
  PAYMENT_SUCCESS: null,
  PAYMENT_FAIL: null,
  DELETE_CART: null,
  DELETE_CART_FAIL: null,
  DELETE_CART_SUCCESS: null,
  SHOW_DETAILS: null,
  HIDE_DETAILS: null,
  SHOW_CART: null,
  HIDE_CART: null
})

export const ProductCategories = {
  STARTERS: { slug: '01-starters', index: 0 },
  SALADS: { slug: '02-salads', index: 1 },
  SOUPS: { slug: '03-soups', index: 2 },
  BURGERS: { slug: '04-burgers', index: 3 },
  DESERTS: { slug: '05-deserts', index: 4 },
  SOFT_DRINKS: { slug: '06-soft-drinks', index: 5 },
  HARD_DRINKS: { slug: '07-hard-drinks', index: 6 }
}

export const Theme = {
  COLOR_1: '#ee1528',
  COLOR_2: '#f2f2f2',
  COLOR_3: '#0B0B0B',
  COLOR_4: '#09ACE8',
  FONT_BOOK: 'Avenir-Book',
  FONT_MEDIUM: 'Avenir-Medium',
  FONT_BLACK: 'Avenir-Black'
}
