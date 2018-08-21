import React from 'react'
import Svg, { Path, G } from 'react-native-svg'

export default function ChevronIcon({ right, color = '#ee1528' }) {
  return (
    <Svg
      viewBox="0 0 20 40"
      preserveAspectRatio="xMidYMin"
      width={20}
      height={40}
    >
      <G rotation={right && 180} x={right && 20} y={right && 40}>
        <Path
          stroke={color}
          d="M14 8 L6 20 L14 32"
          strokeWidth="1"
          fill="transparent"
        />
      </G>
    </Svg>
  )
}
