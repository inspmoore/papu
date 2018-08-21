// mock moltin API
import authentication from './authentication.js'
import categories from './categories'
import products from './products'
import emptyCart from './empty_cart'

function promisify(response) {
  return new Promise(resolve => {
    resolve(response)
  })
}

class BaseExtend {
  All() {}
}

class CatalogueExtend extends BaseExtend {
  With(includes) {
    this.includes = includes
    return this
  }
}

class CategoriesEndpoint extends CatalogueExtend {
  constructor() {
    super()
  }
  All() {
    return promisify(categories)
  }
}

class ProductsEndpoint extends CatalogueExtend {
  constructor() {
    super()
  }

  All() {
    return promisify(products)
  }
}

export default class Mocktin {
  constructor() {
    this.Categories = new CategoriesEndpoint()
    this.Products = new ProductsEndpoint()
  }

  Authenticate() {
    return promisify(authentication)
  }

  Cart() {
    return {
      Items: () => promisify(emptyCart)
    }
  }
}

const gateway = () => new Mocktin()

export { gateway }
