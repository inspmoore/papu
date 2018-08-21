import React from 'react'

export default function ChevronIcon({ right, color, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 40"
      preserveAspectRatio="xMidYMin slice"
      height={height || 40}
      width={width || 20}
      // style={{
      //   width: '100%',
      //   paddingBottom: '100%',
      //   height: 1,
      //   overflow: 'visible'
      // }}
    >
      <g transform={right && 'rotate(180 10 20)'}>
        <path
          stroke={color || '#ee1528'}
          d="M14 8 L6 20 L14 32"
          strokeWidth="1"
          fill="transparent"
        />
      </g>
    </svg>
  )
}
