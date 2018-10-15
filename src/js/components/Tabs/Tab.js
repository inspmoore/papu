import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Theme } from '../../constants/constants'

const tabStyles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    paddingLeft: 8,
    paddingRight: 8
  },
  label: {
    color: '#ee1528',
    fontFamily: Theme.FONT_BOOK
  }
})

export default class Tab extends React.Component {
  metaData = {}
  onLayout = e => {
    const { width, x } = e.nativeEvent.layout
    this.metaData = { ...this.metaData, width, x }
  }

  onPressHandler = () => {
    const { index, value, onPress } = this.props
    const data = { ...this.metaData, index, value }
    if (onPress) onPress(data)
  }

  render() {
    return (
      <TouchableHighlight
        style={tabStyles.main}
        onLayout={this.onLayout}
        onPress={this.onPressHandler}
        underlayColor="#ffffff"
      >
        <Text style={tabStyles.label}>{this.props.label.toUpperCase()}</Text>
      </TouchableHighlight>
    )
  }
}

Tab.propTypes = {
  label: PropTypes.string.isRequired
}
