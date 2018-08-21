import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Theme } from '../constants/constants'
import BigButton from '../components/BigButton'
import pop from '../utils/pop'
import { connect } from 'react-redux'
import InputTextField from '../components/Form/InputTextField'
import Form from '../components/Form/Form'
import { checkout } from '../actions/moltinActions'
import * as validator from '../utils/validators'
import { getOrderData, isCartEmpty } from '../reducers/index'
import { formatPrice } from '../utils/helpers'
import { isCheckoutValid } from '../reducers/index'
import PropTypes from 'prop-types'

class CheckoutScreen extends React.Component {
  constructor(props) {
    super(props)
    if (props.isCartEmpty) this.handleBack()
  }
  state = {}

  handlePress = () => {
    const data = this.form.getData()
    if (data) this.props.checkout({ ...data })
  }

  handleBack = () => {
    const { navigation } = this.props
    pop({ n: 1, screen: 'Cart', navigation })
  }

  componentDidUpdate() {
    const { navigation, isCheckoutValid } = this.props

    if (isCheckoutValid) navigation.navigate('Payment')
  }

  render() {
    // const {
    //   first_name,
    //   last_name,
    //   email,
    //   address,
    //   instructions
    // } = this.props.order
    const { total_price, checkoutPending } = this.props

    return (
      <View style={styles.main}>
        <ScrollView style={styles.formContainer}>
          <Form ref={ref => (this.form = ref)}>
            <InputTextField
              placeholder="First name"
              // value={first_name}
              color={Theme.COLOR_4}
              name="first_name"
              required
              validation={validator.validateName}
              errorMessage="You need to type at least two letters"
            />
            <InputTextField
              placeholder="Last name"
              // value={last_name}
              color={Theme.COLOR_4}
              name="last_name"
              required
              validation={validator.validateName}
              errorMessage="You need to type at least two letters"
            />
            <InputTextField
              placeholder="Address"
              // value={address}
              color={Theme.COLOR_4}
              name="address"
              required
            />
            <InputTextField
              placeholder="Email"
              // value={email}
              color={Theme.COLOR_4}
              keyboardType="email-address"
              name="email"
              required
              validation={validator.validateEmail}
              errorMessage="Email is invalid"
            />
            <InputTextField
              placeholder="Instructions (optional)"
              // value={instructions}
              color={Theme.COLOR_4}
              name="instructions"
              multiline
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
          disabled={checkoutPending}
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
  order: getOrderData(state),
  total_price: state.cart.meta
    ? state.cart.meta.display_price.with_tax.amount
    : null,
  isCartEmpty: isCartEmpty(state),
  checkoutPending: state.order.pending,
  isCheckoutValid: isCheckoutValid(state)
})
const mapDisptachToProps = {
  checkout
}

CheckoutScreen.propTypes = {
  order: PropTypes.object,
  total_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isCartEmpty: PropTypes.bool,
  checkoutPending: PropTypes.bool,
  isCheckoutValid: PropTypes.bool
}

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(CheckoutScreen)
