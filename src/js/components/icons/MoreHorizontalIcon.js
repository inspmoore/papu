import React from 'react'

export default function MoreHorizontalIcon({ color, size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      preserveAspectRatio="xMidYMin slice"
      style={{
        width: '100%',
        paddingBottom: '100%',
        height: 1,
        overflow: 'visible'
      }}
    >
      <g fill={color || '#ee1528'}>
        <circle cx="2" cy="20" r="4" stroke="transparent" />
        <circle cx="20" cy="20" r="4" stroke="transparent" />
        <circle cx="38" cy="20" r="4" stroke="transparent" />
      </g>
    </svg>
  )
}
