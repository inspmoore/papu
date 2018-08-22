import React from 'react'
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  Easing,
  TouchableWithoutFeedback
} from 'react-native'
import { Theme } from '../constants/constants'
import PropTypes from 'prop-types'

class SideDrawer extends React.Component {
  constructor() {
    super()
    this.state = {
      width: 0,
      mainVisible: false
    }
    this.animation = new Animated.Value(0)
  }

  componentDidMount() {
    this.getWindowDimensions()
    Dimensions.addEventListener('change', this.getWindowDimensions)
  }

  getWindowDimensions = () => {
    const { width } = Dimensions.get('window')
    this.setState({
      width
    })
  }

  componentWillReceiveProps(nextProp) {
    if (nextProp.visible) this.openDrawer()
    if (!nextProp.visible) this.closeDrawer()
  }

  openDrawer = () => {
    this.setState(
      {
        mainVisible: true
      },
      this.animationCreator(1)
    )
  }

  closeDrawer = () => {
    this.animationCreator(0)
  }

  animationCreator = to => {
    Animated.timing(this.animation, {
      toValue: to,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      duration: 250
    }).start(() => {
      if (to === 0) this.setState({ mainVisible: false })
    })
  }

  render() {
    const { element, onHideDrawer } = this.props
    const { mainVisible } = this.state
    const { width } = this.state
    if (width === 0 || !mainVisible) return null
    const x = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-width, 0]
    })

    const opacity = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.5]
    })

    const transform = {
      transform: [{ translateX: x }]
    }

    return (
      <View style={styles.main}>
        <TouchableWithoutFeedback style={styles.main} onPress={onHideDrawer}>
          <Animated.View style={[styles.main, styles.overlay, { opacity }]} />
        </TouchableWithoutFeedback>
        <Animated.View style={[styles.main, styles.drawer, transform]}>
          {element}
        </Animated.View>
      </View>
    )
  }
}

SideDrawer.propTypes = {
  visible: PropTypes.bool.isRequired,
  element: PropTypes.element,
  onHideDrawer: PropTypes.func
}

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    paddingTop: 0
  },
  overlay: {
    backgroundColor: Theme.COLOR_3,
    opacity: 0.5
  },
  drawer: {
    right: 56,
    maxWidth: 400,
    backgroundColor: '#ffffff',
    opacity: 1
  }
})

export default SideDrawer
