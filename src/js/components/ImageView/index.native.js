import React from 'react'
import { ImageBackground, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

function ImageView({ uri, style, shadow, children, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={shadow}>
      <ImageBackground style={style} source={uri}>
        {children}
      </ImageBackground>
    </TouchableOpacity>
  )
}

ImageView.propTypes = {
  uri: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  onPress: PropTypes.func
}

export default ImageView
