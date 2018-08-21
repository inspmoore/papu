import React from 'react'
import Tabs, { Tab } from './Tabs'
import { ProductCategories } from '../constants/constants'
import PropTypes from 'prop-types'

function CategoriesScrollList({ onChange }) {
  return (
    <Tabs onChange={onChange}>
      <Tab label="Starters" value={ProductCategories.STARTERS.index} />
      <Tab label="Salads" value={ProductCategories.SALADS.index} />
      <Tab label="Soups" value={ProductCategories.SOUPS.index} />
      <Tab label="Burgers" value={ProductCategories.BURGERS.index} />
      <Tab label="Deserts" value={ProductCategories.DESERTS.index} />
      <Tab label="Soft Drinks" value={ProductCategories.SOFT_DRINKS.index} />
      <Tab label="Hard Drinks" value={ProductCategories.HARD_DRINKS.index} />
    </Tabs>
  )
}

CategoriesScrollList.propTypes = {
  onChange: PropTypes.func
}

export default CategoriesScrollList
