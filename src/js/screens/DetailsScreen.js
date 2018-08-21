import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProductByID } from '../reducers/index'
import DetailsModal from '../components/DetailsModal'
import { Theme } from '../constants/constants'

class DetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name', ''),
      headerStyle: {
        backgroundColor: Theme.COLOR_1
      },
      headerTintColor: Theme.COLOR_2
    }
  }

  render() {
    // const { product, closeModal } = this.props

    return <DetailsModal {...this.props} />
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.navigation.getParam('id', '')
  return {
    product: getProductByID(state.products.list, id)
  }
}

DetailsScreen.propTypes = {
  product: PropTypes.object
}

export default connect(mapStateToProps)(DetailsScreen)
