import React from 'react'
import CartItem from '../components/CartItem'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'
import ListSeparator from './ListSeparator'

const CartItemsList = ({ items, updateCart, removeCartItem }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <CartItem
          key={item.id}
          item={item}
          updateCart={updateCart}
          removeFromCart={removeCartItem}
        />
      )}
      ItemSeparatorComponent={ListSeparator}
      ListFooterComponent={ListSeparator}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}

CartItemsList.propTypes = {
  items: PropTypes.array,
  updateCart: PropTypes.func,
  removeCartItem: PropTypes.func
}

export default CartItemsList
