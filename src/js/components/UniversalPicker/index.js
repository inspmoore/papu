// web version
import React from 'react'
import PropTypes from 'prop-types'
export default function UniversalPicker({ options, style, value, onSelect }) {
  const onChangeHandler = e => {
    const { value } = e.target
    onSelect(value, value)
  }
  return (
    <select style={style} onChange={onChangeHandler} value={value || ''}>
      {options.map((val, i) => (
        <option value={val} key={i}>
          {val}
        </option>
      ))}
    </select>
  )
}

UniversalPicker.propTypes = {
  options: PropTypes.array.isRequired,
  style: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onSelect: PropTypes.func
}
