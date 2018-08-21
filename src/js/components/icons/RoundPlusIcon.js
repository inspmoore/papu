import React from 'react'

export default function RoundPlusIcon({
  fill = '#ee1528',
  color = '#ffffff',
  minus = false
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMin slice"
      style={{
        width: '100%',
        paddingBottom: '100%',
        height: 1,
        overflow: 'visible'
      }}
    >
      <g>
        <circle fill={fill} cx="16" cy="16" r="16" />
        <path stroke={color} d="M10 16L22 16" strokeWidth="2" />
        {minus || <path stroke={color} d="M16 10L16 22" strokeWidth="2" />}
      </g>
    </svg>
  )
}
