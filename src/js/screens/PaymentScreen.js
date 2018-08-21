import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Theme } from '../constants/constants'
import BigButton from '../components/BigButton'
import pop from '../utils/pop'
import { connect } from 'react-redux'
import InputTextField from '../components/Form/InputTextField'
import Form from '../components/Form/Form'
import { payment } from '../actions/moltinActions'
import * as validator from '../utils/validators'
import { formatPrice } from '../utils/helpers'
import { isCheckoutValid } from '../reducers/index'

class CheckoutScreen extends React.Component {
  constructor(props) {
    super(props)
    if (!props.isCheckoutValid) this.handleBack()
  }
  state = {}

  handlePress = () => {
    const data = this.form2.getData()
    this.props.payment({ ...data })
  }

  handleBack = () => {
    const { navigation } = this.props
    pop({ n: 1, screen: 'Checkout', navigation })
  }

  componentDidUpdate() {
    const { navigation, paymentComplete } = this.props
    if (paymentComplete) navigation.navigate('Bill')
  }

  render() {
    const { paymentPending } = this.props.payment
    const { total_price } = this.props

    return (
      <View style={styles.main}>
        <ScrollView style={styles.formContainer}>
          <Form ref={ref => (this.form2 = ref)}>
            <InputTextField
              placeholder="XXXX XXXX XXXX XXXX"
              color={Theme.COLOR_4}
              name="number"
              required
              validation={validator.validateCreditCard}
              errorMessage="Card number is invalid"
              keyboardType="phone-pad"
              label="Card number"
            />
            <InputTextField
              placeholder="MM"
              color={Theme.COLOR_4}
              name="month"
              maxLength="2"
              required
              validation={validator.validateMonth}
              errorMessage="Month is invalid"
              keyboardType="phone-pad"
              label="Month"
            />
            <InputTextField
              placeholder="YYYY"
              color={Theme.COLOR_4}
              name="year"
              required
              maxLength="4"
              validation={validator.validateYear}
              errorMessage="Year is invalid"
              keyboardType="phone-pad"
              label="Year"
            />
            <InputTextField
              placeholder="CVV"
              color={Theme.COLOR_4}
              keyboardType="phone-pad"
              name="verification_value"
              required
              validation={validator.validateCVV}
              maxLength="3"
              errorMessage="CVV is invalid"
              label="CVV"
            />

            <InputTextField
              placeholder="Name"
              color={Theme.COLOR_4}
              name="name"
              required
              validation={validator.validateName}
              errorMessage="Name is invalid"
              label="Holder's name"
            />
          </Form>
        </ScrollView>
        <BigButton
          title="NEXT"
          subtitle={`Your order: ${formatPrice(total_price)} €`}
          color={Theme.COLOR_4}
          rightChevron={true}
          leftChevron={true}
          onLeftPress={this.handleBack}
          onRightPress={this.handlePress}
          disabled={paymentPending}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff'
  },
  formContainer: {
    padding: 16
  }
})

const mapStateToProps = state => ({
  payment: {},
  total_price: state.cart.meta
    ? state.cart.meta.display_price.with_tax.amount
    : null,
  isCheckoutValid: isCheckoutValid(state),
  paymentPending: state.payment.pending,
  paymentComplete: state.payment.complete
})
const mapDisptachToProps = {
  payment
}

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(CheckoutScreen)
