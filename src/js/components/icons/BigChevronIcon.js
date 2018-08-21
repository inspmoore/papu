import React from 'react'

export default function BigChevronIcon({ right, color, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 7 24"
      preserveAspectRatio="xMidYMin slice"
      height={height || 24}
      width={width || 7}
    >
      <g transform={!right ? 'rotate(180 3.5 12)' : ''}>
        <path
          fill={color || '#ee1528'}
          d="M0 0L7 9L7 15L0 24L0 17L4 12 L0 7Z"
          stroke="none"
        />
      </g>
    </svg>
  )
}
