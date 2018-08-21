import React from 'react'

const SmallCloseIcon = ({ color = '#EE1528' }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      preserveAspectRatio="xMidYMin slice"
      style={{
        width: '100%',
        paddingBottom: '100%',
        height: 1,
        overflow: 'visible'
      }}
    >
      <circle cx={8} cy={8} r={8} fill="transparent" stroke={color} />
      <path d="M5 5L11 11" fill="none" stroke={color} />
      <path d="M5 11L11 5" fill="none" stroke={color} />
    </svg>
  )
}

export default SmallCloseIcon
