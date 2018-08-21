import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Theme } from '../constants/constants'

const DetailsModal = ({ product }) => {
  return (
    <View style={styles.main}>
      <ImageBackground style={styles.image} source={{ uri: product.image }}>
        <View style={styles.textContainer}>
          <Text>{product.description}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%'
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
  textContainer: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#ffffff80'
  },
  text: {
    color: Theme.COLOR_2,
    fontSize: 16,
    fontWeight: 'bold'
  }
})

DetailsModal.propTypes = {
  product: PropTypes.object
}

export default DetailsModal
