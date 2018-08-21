import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { formatPrice } from '../utils/helpers'
import { updateCartItem, removeCartItem } from '../actions/moltinActions'
import CartItemsList from '../components/CartItemsList'
import BigButton from '../components/BigButton'
import { Theme } from '../constants/constants'
import EmptyCart from '../components/EmptyCart'

class CartScreen extends Component {
  render() {
    const {
      items,
      total_price,
      updateCart,
      removeCartItem,
      navigation
    } = this.props

    if (!total_price) return <EmptyCart />
    return (
      <View style={styles.main}>
        <CartItemsList
          items={items}
          updateCart={updateCart}
          removeCartItem={removeCartItem}
        />
        <BigButton
          title={`ORDER: ${formatPrice(total_price)} €`}
          color={Theme.COLOR_4}
          onRightPress={() => navigation.navigate('Checkout')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flex: 1
  }
})

function mapStateToProps(state) {
  if (!state.cart.data) return {}
  return {
    items: state.cart.data,
    total_price: state.cart.meta.display_price.with_tax.amount
  }
}

const mapDispatchToProps = {
  updateCart: updateCartItem,
  removeCartItem: removeCartItem
}

CartScreen.propTypes = {
  items: PropTypes.array,
  total_price: PropTypes.number,
  updateCartItem: PropTypes.func,
  removeCartItem: PropTypes.func,
  navigation: PropTypes.object,
  updateCart: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartScreen)
