import React from 'react'
import { Svg, Circle, Path } from 'react-native-svg'

const SmallCloseIcon = ({ color = '#EE1528' }) => {
  return (
    <Svg viewBox="0 0 16 16" width="16" height="16">
      <Circle cx={8} cy={8} r={7} fill="transparent" stroke={color} />
      <Path d="M5 5L11 11" fill="none" stroke={color} />
      <Path d="M5 11L11 5" fill="none" stroke={color} />
    </Svg>
  )
}

export default SmallCloseIcon
