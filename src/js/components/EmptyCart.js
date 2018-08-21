import React from 'react'
import EmptyPlateIcon from './icons/EmptyPlateIcon'
import { View, Text, StyleSheet } from 'react-native'
import { Theme } from '../constants/constants'

const EmptyCart = () => {
  return (
    <View style={styles.main}>
      <View style={styles.emptyIcon}>
        <EmptyPlateIcon />
      </View>
      <Text style={styles.message}>
        Fill up your cart and threw in some addons to continue
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  emptyIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    paddingBottom: 16
  },
  message: {
    textAlign: 'center',
    color: Theme.COLOR_3,
    fontFamily: 'Avenir',
    fontSize: 20
  }
})

export default EmptyCart
