import React from 'react'
import { TextInput, View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Theme } from '../../constants/constants'

class InputTextField extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: this.props.value || '', error: null }
  }

  handleChange = value => {
    this.setState({ value })
    this.validate(value)
  }

  validate = (value = this.state.value) => {
    const {
      validation,
      required,
      errorMessage,
      onValidation,
      name
    } = this.props

    if (required && (!value || value.length < 1)) {
      this.setState({ error: 'This field is required' })
      onValidation(name, null, required)
    } else if (value && validation && !validation(value)) {
      this.setState({ error: errorMessage || 'This field is invalid.' })
      onValidation(name, null, required)
    } else {
      // valid
      this.setState({ error: null })
      onValidation(name, value, required)
    }
  }

  handleBlur = () => {
    const { value } = this.state
    this.validate(value)
  }

  render() {
    const {
      placeholder,
      color,
      multiline,
      maxLength,
      keyboardType,
      label
    } = this.props
    const { error, value } = this.state
    return (
      <View style={styles.main}>
        {label && <Text style={[styles.label, { color: color }]}>{label}</Text>}
        <TextInput
          style={[
            styles.input,
            { borderColor: error ? Theme.COLOR_1 : color },
            multiline && { height: 88 }
          ]}
          placeholder={placeholder}
          value={value}
          onChangeText={this.handleChange}
          multiline={multiline}
          keyboardType={keyboardType}
          autoCapitalize="none"
          maxLength={maxLength && parseInt(maxLength, 10)}
          onBlur={this.handleBlur}
        />
        {error && <Text style={styles.errorField}>{error}</Text>}
      </View>
    )
  }
}

InputTextField.defaultProps = {
  keyboardType: 'default',
  color: '#000',
  maxLength: null
}

InputTextField.propTypes = {
  placeholder: PropTypes.string
}

export default InputTextField

const styles = StyleSheet.create({
  main: {
    paddingTop: 8,
    paddingBottom: 8,
    flexShrink: 1
  },
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    height: 40,
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 16,
    fontSize: 16,
    color: Theme.COLOR_3
  },
  errorField: {
    position: 'absolute',
    bottom: -4,
    fontSize: 10,
    color: Theme.COLOR_1
  },
  errorBorder: {
    borderColor: Theme.COLOR_1
  },
  label: {
    fontSize: 14
  }
})
