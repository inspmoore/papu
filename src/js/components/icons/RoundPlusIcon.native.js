import React from 'react'
import Svg, { Path, G, Circle } from 'react-native-svg'

export default function RoundPlusIcon({
  fill = '#ee1528',
  color = '#ffffff',
  minus = false
}) {
  return (
    <Svg
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMin"
      width={32}
      height={32}
    >
      <G>
        <Circle fill={fill} cx={16} cy={16} r={16} />
        <Path stroke={color} d="M10 16L22 16" strokeWidth="2" />
        {minus || <Path stroke={color} d="M16 10L16 22" strokeWidth="2" />}
      </G>
    </Svg>
  )
}
