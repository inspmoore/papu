import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Theme } from '../constants/constants'
import YouRockIcon from './icons/YouRockIcon'
import PropTypes from 'prop-types'
import BigButton from './BigButton'
import pop from '../utils/pop'

const PaymentSuccess = ({ navigation }) => {
  const handlePress = () => {
    pop({ screen: 'Menu', n: 3, navigation })
  }
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.errorIcon}>
          <YouRockIcon />
        </View>
        <Text style={[styles.text, styles.header]}>Bon Apetitte!</Text>
        <Text style={[styles.text, styles.message]}>
          Your food is on it&#39;s way
        </Text>
      </View>
      <BigButton
        title="CONTINUE SHOPPING"
        color={Theme.COLOR_4}
        onRightPress={handlePress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between'
  },
  container: {
    padding: 16
  },
  text: {
    color: Theme.COLOR_4,
    fontFamily: 'Avenir',
    textAlign: 'center'
  },
  header: {
    fontSize: 50
  },
  message: {
    fontSize: 20
  },
  errorIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    paddingBottom: 16
  }
})

PaymentSuccess.propTypes = {
  navigation: PropTypes.object
}

export default PaymentSuccess
