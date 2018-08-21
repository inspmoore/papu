import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Animated,
  Easing,
  Platform
} from 'react-native'
import ScrollButton from './../ScrollButton'
import ChevronIcon from '../icons/ChevronIcon'

class Tabs extends React.Component {
  constructor() {
    super()
    this.state = {
      scrollerWidth: 0,
      containerWidth: 0,
      offset: 0,
      leftVisible: false,
      rightVisible: false,
      x: undefined,
      width: undefined,
      previousX: 0,
      previousWidth: 0
    }
    this.indicatorAnimation = new Animated.Value(0)
  }

  componentWillMount() {
    this.tabs = this.props.children.map((child, i) => {
      return React.cloneElement(child, {
        index: i,
        key: Math.random() + i,
        onPress: this.selectTab.bind(this)
      })
    })
  }

  selectTab({ width, x, index, value }) {
    this.indicatorAnimation.setValue(0)
    Animated.timing(this.indicatorAnimation, {
      toValue: 1,
      duration: 300,
      easing: Easing.bezier(0.4, 0, 0.2, 1)
    }).start()

    this.setState({
      width: width,
      x: x,
      previousWidth: this.state.width || width,
      previousX: this.state.x === undefined ? x : this.state.x
    })

    if (this.props.onChange) this.props.onChange(value || index)
  }

  onContainerLayoutChange = e => {
    var { width } = e.nativeEvent.layout
    this.setState({
      containerWidth: width
    })
  }

  onScrollerLayoutChange = width => {
    this.setState({ scrollerWidth: width })
  }

  onScrollHandler = e => {
    const { x } = e.nativeEvent.contentOffset
    this.setState({
      offset: x
    })
  }

  onScrollButtonHandler = dir => {
    // ReactNativeWeb scrollTo doesn't work on the web. Had to use browser's scrollBy
    if (Platform.OS === 'web') {
      this.refs.scroller.getScrollableNode().scrollBy({
        left: 85 * dir,
        behavior: 'smooth'
      })
    } else {
      const { offset } = this.state
      this.refs.scroller.scrollTo({
        x: offset + 85 * dir,
        animated: true
      })
    }
  }

  createInterpolation({ from, to }) {
    return this.indicatorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [from, to]
    })
  }

  render() {
    const {
      scrollerWidth,
      containerWidth,
      offset,
      x,
      width,
      previousX,
      previousWidth
    } = this.state
    const showButtons = scrollerWidth > containerWidth
    const maxOffset = scrollerWidth - containerWidth
    const leftVisible = offset > 0
    const rightVisible = offset - 16 < maxOffset
    const left = this.createInterpolation({ from: previousX, to: x })
    const indicatorWidth = this.createInterpolation({
      from: previousWidth,
      to: width
    })

    return (
      <View
        style={styles.scrollerContainer}
        onLayout={this.onContainerLayoutChange}
      >
        {showButtons ? (
          <ScrollButton
            direction={-1}
            onPress={this.onScrollButtonHandler}
            icon={<ChevronIcon />}
            visible={leftVisible}
          />
        ) : null}

        <ScrollView
          style={[styles.main, showButtons && styles.showButtonsMargins]}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onContentSizeChange={this.onScrollerLayoutChange}
          onScroll={this.onScrollHandler}
          scrollEventThrottle={100}
          ref="scroller"
        >
          {/* This is where the Tab element is rendered */}
          {this.tabs}

          <Animated.View
            style={[styles.indicator, { left, width: indicatorWidth }]}
          />
        </ScrollView>
        {showButtons ? (
          <ScrollButton
            direction={1}
            onPress={this.onScrollButtonHandler}
            icon={<ChevronIcon right={true} />}
            visible={rightVisible}
          />
        ) : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    // marginLeft: -16,
    // marginRight: -16,
    height: 40
    // paddingBottom: 8,
    // paddingTop: 64
  },
  showButtonsMargins: {
    marginLeft: 0,
    marginRight: 0
  },
  scrollerContainer: {
    // marginTop: 8,
    // marginBottom: 8,
    backgroundColor: '#f2f2f2',
    paddingLeft: 8,
    paddingRight: 8,
    width: '100%',
    overflow: 'hidden',
    flexDirection: 'row'
  },
  indicator: {
    height: 2,
    width: 0,
    position: 'absolute',
    left: 0,
    backgroundColor: '#ee1528',
    bottom: 0
  }
})

export default Tabs
