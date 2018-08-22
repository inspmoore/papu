import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Platform } from 'react-native'
import PropTypes from 'prop-types'
import { Theme } from '../constants/constants'
import CloseIcon from './icons/CloseIcon'
import IconButton from './IconButton'

const DetailsModal = ({ product, closeModal }) => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.title}>{product.name}</Text>
        <IconButton
          onPress={closeModal}
          icon={<CloseIcon color={Theme.COLOR_2} />}
          width={24}
        />
      </View>
      <ImageBackground style={styles.image} source={{ uri: product.image }}>
        <View style={styles.textContainer}>
          <Text>{product.description}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%'
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
  textContainer: {
    paddingTop: 16,
    ...Platform.select({
      web: {
        paddingBottom: 40
      },
      native: {
        paddingBottom: 16
      }
    }),
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#ffffff80'
  },
  text: {
    color: Theme.COLOR_2,
    fontSize: 16,
    fontWeight: 'bold'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: Theme.COLOR_3,
    borderBottomWidth: 1,
    borderBottomColor: Theme.COLOR_2
  },
  title: {
    fontSize: 20,
    fontWeight: '100',
    color: Theme.COLOR_2
  }
})

DetailsModal.propTypes = {
  product: PropTypes.object,
  closeModal: PropTypes.func
}

export default DetailsModal
