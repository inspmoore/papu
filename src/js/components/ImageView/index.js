import React from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

function ImageView({ uri, style, children, shadow, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[style, shadow, { backgroundImage: `url("${uri}")` }]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  )
}

ImageView.propTypes = {
  uri: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  onPress: PropTypes.func
}

export default ImageView
