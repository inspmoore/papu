import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getErrorMessages } from '../reducers/index'
import PaymentError from '../components/PaymentError'
import PaymentSuccess from '../components/PaymentSuccess'
import pop from '../utils/pop'

class BillScreen extends React.Component {
  constructor(props) {
    super(props)
    this.goToCart()
  }

  goToCart() {
    const { pending, complete, navigation } = this.props
    if (!pending && !complete) {
      pop({ screen: 'Cart', n: 3, navigation })
    }
  }

  render() {
    const { errorMessage, navigation } = this.props
    if (errorMessage)
      return (
        <PaymentError errorMessage={errorMessage} navigation={navigation} />
      )
    return <PaymentSuccess navigation={navigation} />
  }
}

const mapStateToProps = state => ({
  errorMessage: getErrorMessages(state),
  pending: state.payment.pending,
  complete: state.payment.complete
})

BillScreen.propTypes = {
  errorMessage: PropTypes.arrayOf(
    PropTypes.shape({ detail: PropTypes.string })
  ),
  pending: PropTypes.bool,
  complete: PropTypes.bool,
  navigation: PropTypes.object
}

export default connect(mapStateToProps)(BillScreen)
