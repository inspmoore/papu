import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

export default function ScrollButton({
  onPress,
  icon,
  direction,
  visible = true
}) {
  const pressHandler = () => {
    if (visible) onPress(direction)
    else return
  }
  if (!visible) return <View style={styles.main} />

  return (
    <TouchableOpacity onPress={pressHandler} style={styles.main}>
      {React.cloneElement(icon)}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  main: {
    width: 20
  }
})

ScrollButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  direction: PropTypes.oneOf([1, -1]),
  icon: PropTypes.any.isRequired,
  visible: PropTypes.bool
}
