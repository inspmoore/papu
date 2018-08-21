import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import IconButton from './IconButton'
import RoundPlusIcon from './icons/RoundPlusIcon'
import Thumbnail from './Thumbnail'
import { Theme } from '../constants/constants'

function ProductsListItem({
  name,
  description,
  price,
  image,
  id,
  cartQy,
  onAddToCart,
  onShowDetails
}) {
  const addHandler = () => {
    onAddToCart({ id, qy: 1 })
  }

  const showProductDetails = () => {
    onShowDetails({ name, image, qy: cartQy, id })
  }

  return (
    <View style={[styles.main, cartQy && styles.addedBg]}>
      <Thumbnail uri={image} onPress={showProductDetails} />
      <View style={styles.middle}>
        <Text style={[styles.heading, cartQy && styles.addedFg]}>{name}</Text>
        <Text style={[styles.description, cartQy && styles.addedFg]}>
          {description}
        </Text>
      </View>
      <View style={styles.right}>
        <Text style={[styles.heading, cartQy && styles.addedFg]}>
          {parseFloat(price / 100).toFixed(2)}€
        </Text>
        <IconButton
          onPress={addHandler}
          icon={
            <RoundPlusIcon
              fill={cartQy ? Theme.COLOR_2 : Theme.COLOR_1}
              color={cartQy ? Theme.COLOR_1 : Theme.COLOR_2}
            />
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: Theme.COLOR_2,
    borderBottomWidth: 1,
    borderBottomColor: Theme.COLOR_2,
    marginTop: -1,
    width: '100%',
    height: 89
  },
  addedBg: {
    backgroundColor: Theme.COLOR_1
  },
  addedFg: {
    color: Theme.COLOR_2
  },
  middle: {
    flexShrink: 1,
    flexGrow: 1,
    height: '100%',
    paddingLeft: 8,
    paddingRight: 8,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  right: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  heading: {
    fontSize: 14,
    fontWeight: '600'
  },
  description: {
    fontSize: 12,
    fontWeight: '100',
    lineHeight: 14,
    overflow: 'hidden',
    flexShrink: 1
  }
})

export default ProductsListItem

ProductsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  cartQy: PropTypes.number
}
