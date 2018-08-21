import React from 'react'
import PropTypes from 'prop-types'
import { SectionList } from 'react-native'
import ProductsListItem from './ProductsListItem'
import ProductSectionListHeader from './ProductSectionListHeader'
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout'

class ProductsSectionList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sectionIndex: null
    }
    this.prevSectionIndex = null
  }

  static getDerivedStateFromProps(props) {
    return {
      sectionIndex: props.scrollToSection
    }
  }

  componentDidUpdate() {
    if (this.state.sectionIndex !== this.prevSectionIndex) {
      this.list.scrollToLocation({
        animated: true,
        sectionIndex: this.state.sectionIndex,
        itemIndex: 0,
        viewPosition: 0
      })
      this.prevSectionIndex = this.state.sectionIndex
    }
  }

  getLayout = sectionListGetItemLayout({
    getItemHeight: () => 89,
    getSeparatorHeight: () => -1,
    getSectionHeaderHeight: () => 40,
    getSectionFooterHeight: () => 0,
    listHeaderHeight: -40
  })

  render() {
    const { products, onAddToCart, onShowDetails } = this.props
    return (
      <SectionList
        ref={comp => (this.list = comp)}
        getItemLayout={this.getLayout}
        renderItem={({ item, index }) => (
          <ProductsListItem
            name={item.name}
            description={item.description}
            price={item.meta.display_price.with_tax.amount}
            image={item.image}
            id={item.id}
            cartQy={item.cartQy}
            onShowDetails={onShowDetails}
            onAddToCart={onAddToCart}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <ProductSectionListHeader title={title} />
        )}
        sections={products}
        keyExtractor={(item, index) => item.slug + index}
      />
    )
  }
}

ProductsSectionList.propTypes = {
  products: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func
}

export default ProductsSectionList
