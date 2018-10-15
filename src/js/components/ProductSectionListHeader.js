import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StyleSheet } from 'react-native'
import { Theme } from '../constants/constants'

const ProductSectionListHeader = ({ title }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    padding: 8,
    backgroundColor: '#fffffff3',
    borderBottomWidth: 1,
    borderBottomColor: Theme.COLOR_2 + 'f3',
    borderStyle: 'solid'
  },
  title: {
    fontSize: 20,
    fontFamily: 'Avenir-Book',
    color: Theme.COLOR_3
  }
})

ProductSectionListHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default ProductSectionListHeader
