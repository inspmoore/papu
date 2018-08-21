import { Dimensions, Platform } from 'react-native'
import sortBy from 'lodash.sortby'

/**
 * Takes the product list from backend and adds to each product category slug name and image link
 * @param {array} products A list of products from Moltin backend
 * @param {array} categories A list of categories from Moltin backend
 * @param {array} images A list of images from Moltin backend
 * @returns {array} Returns array of object representing products extended by two additional fields: cat_slug and images
 **/
export function addImageAndCategorySlugToProduct(products, categories, images) {
  return sortBy(
    products.map(product => {
      return {
        ...product,
        cat_slug: categories.find(
          category =>
            category.id === product.relationships.categories.data[0].id
        ).slug,
        image: images.find(
          image => image.id === product.relationships.main_image.data.id
        ).link.href
      }
    }),
    'cat_slug'
  )
}

export function addCartStatusToProduct(cart, products) {
  //if cart is empty return products
  if (!cart.data || cart.data.lenght < 1) return products
  //if cart is not empty update products with quantity
  return products.list.map(product => ({
    ...product,
    cartQy: findQy(cart, product)
  }))
}

export function expandProductData(products, categories, images, cart) {
  return sortBy(
    products.map(product => {
      return {
        ...product,
        cat_slug: categories.find(
          category =>
            category.id === product.relationships.categories.data[0].id
        ).slug,
        image: images.find(
          image => image.id === product.relationships.main_image.data.id
        ).link.href,
        cartQy: findQy(cart, product)
      }
    }),
    'cat_slug'
  )
}

/* productsToSections - builds an array of objects/section. Products are put into the data array and are filtered by category. Each sections has a title of category name */

export function productsToSections(products, categories) {
  const sections = categories.map(category => {
    const productsFilteredByCategory = products.filter(
      product => product.relationships.categories.data[0].id === category.id
    )
    return {
      title: category.name,
      slug: category.slug,
      data: [...productsFilteredByCategory]
    }
  })
  return sortBy(sections, 'slug')
}

function findQy(cart, product) {
  if (!cart.data || cart.data.lenght < 1) return null
  const matchingCartItem = cart.data.find(
    item => item.product_id === product.id
  )
  return matchingCartItem ? matchingCartItem.quantity : null
}

export function isIphoneX() {
  const dimen = Dimensions.get('window')
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812)
  )
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle
  }
  return regularStyle
}

export function formatPrice(price) {
  return parseFloat(price / 100).toFixed(2)
}
