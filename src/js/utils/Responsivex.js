import React from 'react'
import { Dimensions } from 'react-native'

export default function responsivex(Component) {
  return class ResponsivexWrapper extends React.Component {
    constructor() {
      super()
      this.state = {
        dims: {}
      }
    }
    changeHandler = dims => this.setState({ dims: dims.window })

    componentWillMount() {
      Dimensions.addEventListener('change', this.changeHandler)
    }

    componentDidMount() {
      this.setState({
        dims: Dimensions.get('window')
      })
    }

    componentWillUnmount() {
      Dimensions.removeEventListener('change', this.changeHandler)
    }

    render() {
      const { props } = this
      return <Component dims={this.state.dims} {...props} />
    }
  }
}
