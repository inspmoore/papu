import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Theme } from '../constants/constants'

const ListSeparator = () => {
  return <View style={style.main} />
}

const style = StyleSheet.create({
  main: {
    height: 1,
    borderTopColor: Theme.COLOR_2,
    borderBottomWidth: 1,
    borderBottomColor: Theme.COLOR_2
  }
})

export default ListSeparator
