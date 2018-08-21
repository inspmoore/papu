import { gateway } from './moltin/moltin'
// import { gateway } from './mocktin/mocktin'

let Moltin = null

export function authenticate() {
  Moltin = gateway({
    client_id: 'ivoSe4GFNpDvpanmQ57DNddHUHXxvclrpBVawbbT',
    grant_type: 'implicit'
  })

  return Moltin.Authenticate()
}

export function getAllCategories() {
  return Moltin.Categories.All()
}

export function getAllProducts() {
  return Moltin.Products.With('main_image').All()
}

export function getCart() {
  return Moltin.Cart().Items()
}

export function addToCart({ id, qy }) {
  return Moltin.Cart().AddProduct(id, qy)
}

export function updateCartItem({ id, qy }) {
  return Moltin.Cart().UpdateItemQuantity(id, qy)
}

export function removeCartItem({ id }) {
  return Moltin.Cart().RemoveItem(id)
}

export function checkout({
  first_name,
  last_name,
  email,
  address,
  instructions
}) {
  const customer = {
    name: first_name + ' ' + last_name,
    email
  }
  const shipping_address = {
    first_name,
    last_name,
    line_1: address,
    city: 'Vaduz',
    postcode: '00000',
    county: 'Vaduz',
    country: 'Liechtenstein',
    instructions
  }
  return Moltin.Cart().Checkout(customer, shipping_address)
}

export function payment({
  id,
  first_name,
  last_name,
  number,
  month,
  year,
  verification_value
}) {
  const gateway = 'stripe'
  const method = 'purchase'
  return Moltin.Orders.Payment(id, {
    method,
    gateway,
    first_name,
    last_name,
    number,
    month,
    year,
    verification_value
  })
}

export function deleteCart() {
  return Moltin.Cart().Delete()
}
