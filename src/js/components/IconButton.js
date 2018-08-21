import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'

export default function IconButton({ onPress, icon, width = 32, height }) {
  const pressHandler = () => {
    if (onPress) onPress()
  }

  return (
    <TouchableOpacity
      onPress={pressHandler}
      style={{ width, height: height || width }}
    >
      {React.cloneElement(icon)}
    </TouchableOpacity>
  )
}

IconButton.propTypes = {
  onPress: PropTypes.func,
  icon: PropTypes.any.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
}
