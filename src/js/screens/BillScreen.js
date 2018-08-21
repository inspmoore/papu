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
    const { isOrderID, navigation } = this.props
    if (!isOrderID) {
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
  isOrderID: state.order.id
})

BillScreen.propTypes = {
  errorMessage: PropTypes.arrayOf(
    PropTypes.shape({ detail: PropTypes.string })
  ),
  isOrderID: PropTypes.string,
  navigation: PropTypes.object
}

export default connect(mapStateToProps)(BillScreen)
