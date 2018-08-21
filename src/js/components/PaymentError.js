import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Theme } from '../constants/constants'
import ErrorPlateIcon from './icons/ErrorPlateIcon'
import BigButton from './BigButton'
import pop from '../utils/pop'

const PaymentError = ({
  errorMessage = [{ detail: 'Something went wrong! Go back and try again.' }],
  navigation
}) => {
  const handlePress = () => {
    pop({ screen: 'Payment', navigation, n: 1 })
  }

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.errorIcon}>
          <ErrorPlateIcon />
        </View>
        <Text style={[styles.text, styles.header]}>Ooops!</Text>
        {errorMessage.map((msg, i) => (
          <Text key={i} style={[styles.text, styles.message]}>
            {msg.detail}
          </Text>
        ))}
      </View>
      <BigButton
        title="BACK TO PAYMENT"
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

PaymentError.propTypes = {
  errorMessage: PropTypes.arrayOf(
    PropTypes.shape({ detail: PropTypes.string })
  ),
  navigation: PropTypes.object
}

export default PaymentError
