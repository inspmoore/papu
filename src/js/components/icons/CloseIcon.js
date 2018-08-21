import React from 'react'

function CloseIcon({ color = '#000000' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMin slice"
      style={{
        width: '100%',
        paddingBottom: '100%',
        height: 1,
        overflow: 'visible'
      }}
    >
      <path d="M0 0L24 24" fill="transparent" stroke={color} />
      <path d="M0 24L24 0" fill="transparent" stroke={color} />
    </svg>
  )
}

export default CloseIcon
