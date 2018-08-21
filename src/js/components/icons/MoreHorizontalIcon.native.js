import React from 'react'
import Svg, { Circle, G } from 'react-native-svg'

export default function MoreHorizontalIcon({ color = '#ee1528', size = 28 }) {
  return (
    <Svg
      viewBox="0 0 40 40"
      preserveAspectRatio="xMidYMin"
      width={size}
      height={size}
    >
      <G>
        <Circle cx="4" cy="20" r="4" stroke="transparent" fill={color} />
        <Circle cx="20" cy="20" r="4" stroke="transparent" fill={color} />
        <Circle cx="36" cy="20" r="4" stroke="transparent" fill={color} />
      </G>
    </Svg>
  )
}
