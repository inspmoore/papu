import React from 'react'
import { View, StyleSheet } from 'react-native'
import TopLogo from './icons/TopLogo'
import MenuIcon from './icons/MenuIcon'
import IconButton from './IconButton'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import CartButton from './CartButton'
import { Theme } from '../constants/constants'

class TopBar extends React.Component {
  state = {}

  goCart = () => {
    const { history } = this.props
    history.push('/cart')
  }
  goHome = () => {
    const { history } = this.props
    history.push('/')
  }

  render() {
    const { onLeftPress } = this.props
    return (
      <View style={stl.main}>
        <IconButton icon={<MenuIcon />} onPress={onLeftPress} />

        <IconButton
          icon={<TopLogo />}
          onPress={this.goHome}
          height={56}
          width={167}
        />
        <IconButton
          icon={<CartButton tintColor={Theme.COLOR_1} />}
          onPress={this.goCart}
          width={40}
        />
      </View>
    )
  }
}

const stl = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 0,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#fff'
  }
})

TopBar.propTypes = {
  navigation: PropTypes.object,
  onLeftPress: PropTypes.func
}

export default withRouter(TopBar)
