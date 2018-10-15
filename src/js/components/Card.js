import React from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'
import PropTypes from 'prop-types'
import responsivex from '../utils/Responsivex'
import ImageView from './ImageView'
import { Theme } from '../constants/constants'

const styles = StyleSheet.create({
  main: {
    height: 240,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    width: '100%'
  },
  card: {
    width: '100%',
    height: '100%',
    ...Platform.select({
      web: {
        backgroundSize: 'cover'
      }
    }),
    backgroundColor: Theme.COLOR_2,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 1
  },
  text: {
    fontFamily: Theme.FONT_BLACK,
    color: Theme.COLOR_2,
    padding: 12
  },
  title: {
    fontSize: 23,
    opacity: 0.95,
    backgroundColor: 'transparent',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { height: 1, width: 1 },
    textShadowRadius: 1
  },
  copy: {
    minHeight: 68,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 3
  }
})

function Card({
  dims,
  title,
  copy,
  image,
  bgColor = Theme.COLOR_1,
  color,
  onPress
}) {
  return (
    <View
      style={[styles.main, dims.width > 550 && { width: '50%' }]}
      onPress={onPress}
    >
      <ImageView
        style={styles.card}
        uri={image}
        shadow={styles.shadow}
        onPress={onPress}
      >
        <Text style={[styles.text, styles.title, color && { color }]}>
          {title}
        </Text>
        {copy && (
          <View style={[styles.copy, { backgroundColor: bgColor }]}>
            <Text style={[styles.text]}>{copy}</Text>
          </View>
        )}
      </ImageView>
    </View>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  dims: PropTypes.object,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func
}

export default responsivex(Card)
