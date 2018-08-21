import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import IconButton from '../components/IconButton'
import SmallCloseIcon from '../components/icons/SmallCloseIcon'
import UniversalPicker from '../components/UniversalPicker'
import { formatPrice } from '../utils/helpers'
import PropTypes from 'prop-types'
import { Theme } from '../constants/constants'

const CartItem = ({ item, updateCart, removeFromCart }) => {
  const onSelect = val => updateCart({ id: item.id, qy: val })
  const onRemove = () => removeFromCart({ id: item.id })
  return (
    <View style={styles.main}>
      <UniversalPicker
        value={item.quantity}
        defaultValue={item.quantity}
        options={Array.from(Array(50).keys())}
        onSelect={onSelect}
        style={{
          WebkitAppearance: 'none',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: Theme.COLOR_1,
          padding: 8,
          backgroundColor: '#fff',
          fontSize: 16,
          borderRadius: 0,
          height: 36,
          width: 40
        }}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{formatPrice(item.value.amount)} €</Text>
      <IconButton width={16} icon={<SmallCloseIcon />} onPress={onRemove} />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    width: '100%',
    height: 89,
    backgroundColor: '#fff'
  },
  name: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    fontSize: 16
  },
  price: {
    fontSize: 16,
    marginRight: 8,
    textAlign: 'right',
    fontWeight: 'bold'
  }
})

CartItem.propTypes = {
  item: PropTypes.object,
  updateCart: PropTypes.func
}

export default CartItem
