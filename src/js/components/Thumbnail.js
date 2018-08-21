import React from 'react'
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import BurgerIcon from './icons/HamburgerIcon'

class Thumbnail extends React.Component {
  constructor() {
    super()
    this.state = {
      imgLoaded: false
    }
  }

  loadHandler = () => {
    this.setState({
      imgLoaded: true
    })
  }

  componentDidMount() {
    Image.prefetch(this.props.uri).then(() => {
      this.setState({
        imgLoaded: true
      })
    })
  }

  render() {
    const { uri, width, onPress } = this.props
    const { imgLoaded } = this.state
    let { height } = this.props
    height = height || width

    if (!imgLoaded) {
      return (
        <View style={[styles.loader, { width, height }]}>
          <BurgerIcon />
        </View>
      )
    }

    return (
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{ width, height }}
          source={{
            uri
          }}
          onLoad={this.loadHandler}
        />
      </TouchableOpacity>
    )
  }
}

Thumbnail.propTypes = {
  uri: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
}

Thumbnail.defaultProps = {
  width: 72
}

const styles = StyleSheet.create({
  loader: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f2f2f2'
  }
})

export default Thumbnail
