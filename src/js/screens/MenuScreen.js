import React, { Component } from 'react'
import { SafeAreaView, Text } from 'react-native'
import CategoriesScrollList from '../components/CategoriesScrollList'
import ProductsSectionList from '../components/ProductsSectionList'
import { connect } from 'react-redux'
import { getProductsInSections } from '../reducers/index'
import { addToCart } from '../actions/moltinActions'

class MenuScreen extends Component {
  static navigationOptions = {
    title: 'Menu',
    headerStyle: {
      backgroundColor: '#EE1528'
    }
  }

  state = {
    scrollI: null
  }

  onCategoryChange = sectionIndex => {
    this.props.navigation.navigate('Menu', { sectionIndex })
  }

  onShowDetails = data => {
    this.props.navigation.navigate('Details', { name: data.name, id: data.id })
  }

  render() {
    const { products, navigation, onAddToCart } = this.props
    const sectionIndex = navigation.getParam('sectionIndex', null)
    if (!products) return <Text>Loading...</Text>
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <CategoriesScrollList onChange={this.onCategoryChange} />
        <ProductsSectionList
          products={products}
          scrollToSection={sectionIndex}
          onShowDetails={this.onShowDetails}
          onAddToCart={onAddToCart}
        />
      </SafeAreaView>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: getProductsInSections(state.products.list, state.categories.list)
  }
}

const mapDispatchToProps = {
  onAddToCart: addToCart
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuScreen)
