import React from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {
  constructor() {
    super()

    this.getData = this.getData.bind(this)
    this.form = {}
  }

  state = {
    data: {},
    requiredFields: null
  }

  static getDerivedStateFromProps(props) {
    let refrence = 0
    props.children.forEach(child => {
      if (child.props.required) refrence += 1
    })
    return {
      chekcsumReference: refrence
    }
  }

  onValidation = (key, value, required) => {
    const temp = {}
    temp[key] = { data: value, required }
    this.setState(prevState => ({ data: { ...prevState.data, ...temp } }))
  }

  getData = () => {
    const { data, chekcsumReference } = this.state
    Object.keys(this.form).forEach(ref => this.form[ref].validate())

    const keys = Object.keys(data)
    let checksum = 0
    if (keys.length) {
      keys.forEach(key => {
        if (data[key].required) checksum += data[key].data === null ? 0 : 1
      })
    }
    if (checksum === chekcsumReference) {
      const flatData = {}
      keys.forEach(key => (flatData[key] = data[key].data))
      return flatData
    }
    return null
  }

  render() {
    const { children } = this.props

    return children.map((child, index) =>
      React.cloneElement(child, {
        onValidation: this.onValidation,
        key: index,
        ref: node => (this.form[child.props.name] = node)
      })
    )
  }
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}

export default Form
