import React from 'react'
import ModalDropdown from 'react-native-modal-dropdown'
import PropTypes from 'prop-types'

export default class UniversalPicker extends React.Component {
  render() {
    const { options, style, onSelect, defaultValue } = this.props
    return (
      <ModalDropdown
        options={options}
        defaultValue={defaultValue.toString() || '0'}
        textStyle={{
          fontSize: style.fontSize
          // lineHeight: style.fontSize * 2 - 2
        }}
        style={style}
        dropdownTextStyle={{
          width: style.width,
          fontSize: style.fontSize
        }}
        onSelect={onSelect}
        ref="details_qy_picker"
      />
    )
  }
}

UniversalPicker.propTypes = {
  options: PropTypes.array.isRequired,
  style: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSelect: PropTypes.func
}
