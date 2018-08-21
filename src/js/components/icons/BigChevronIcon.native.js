import React from 'react'
import Svg, { Path, G } from 'react-native-svg'

export default function ChevronIcon({ right, color, width, height }) {
  return (
    <Svg
      viewBox="0 0 7 24"
      preserveAspectRatio="xMidYMin"
      width={width || 7}
      height={height || 24}
    >
      <G rotation={!right ? 180 : 0} x={!right ? 7 : 0} y={!right ? 24 : 0}>
        <Path
          fill={color || '#ee1528'}
          d="M0 0L7 9L7 15L0 24L0 17L4 12 L0 7Z"
          stroke="none"
        />
      </G>
    </Svg>
  )
}
