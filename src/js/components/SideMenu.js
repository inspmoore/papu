import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import TopLogo from './icons/TopLogo'
import { Theme } from '../constants/constants'
import { withRouter } from 'react-router-dom'

const SideMenuItem = ({ title, url, onPress }) => {
  const handlePress = () => {
    onPress(url)
  }
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const SideMenu = ({ history, hideDrawer }) => {
  const handleMenuItemPress = url => {
    history.push(url)
    hideDrawer()
  }

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <TopLogo />
      </View>
      <View style={styles.items}>
        <SideMenuItem title="HOME" url="/" onPress={handleMenuItemPress} />
        <SideMenuItem title="MENU" url="/menu" onPress={handleMenuItemPress} />
        <SideMenuItem title="CART" url="/cart" onPress={handleMenuItemPress} />
        <SideMenuItem title="MORE" url="/more" onPress={handleMenuItemPress} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Theme.COLOR_3
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  items: {
    padding: 16
  },
  button: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Theme.COLOR_2,
    marginVertical: 8
  },
  buttonText: {
    color: Theme.COLOR_2,
    fontFamily: 'Avenir',
    fontSize: 22,
    paddingHorizontal: 16,
    paddingVertical: 8
  }
})

SideMenu.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  onPress: PropTypes.func
}

export default withRouter(SideMenu)
