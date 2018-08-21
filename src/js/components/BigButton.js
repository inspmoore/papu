import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import BigChevronIcon from '../components/icons/BigChevronIcon'
import { Theme } from '../constants/constants'

const BigButton = ({
  title,
  subtitle,
  color,
  rightChevron,
  leftChevron,
  onRightPress,
  onLeftPress,
  disabled
}) => {
  const renderBigButton = () => (
    <TouchableOpacity
      onPress={onRightPress}
      disabled={disabled}
      style={[
        styles.main,
        leftChevron && { flex: 1 },
        color && { backgroundColor: color },
        disabled && { opacity: 0.5 }
      ]}
    >
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? (
          <Text style={[styles.title, styles.subtitle]}>{subtitle}</Text>
        ) : null}
      </View>
      {rightChevron ? (
        <View style={styles.rightChevron}>
          <BigChevronIcon
            right={true}
            color={Theme.COLOR_2}
            height={24}
            width={7}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  )

  if (!leftChevron) return renderBigButton()
  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={disabled || false}
        style={[
          styles.rightChevron,
          styles.leftChevron,
          { borderColor: color },
          disabled && { opacity: 0.5 }
        ]}
        onPress={onLeftPress}
      >
        <BigChevronIcon color={Theme.COLOR_4} height={24} width={7} />
      </TouchableOpacity>
      {renderBigButton()}
    </View>
  )
}

BigButton.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  color: PropTypes.string,
  rightChevron: PropTypes.bool,
  onLeftPress: PropTypes.func,
  onRightPress: PropTypes.func,
  disabled: PropTypes.any,
  leftChevron: PropTypes.bool
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  main: {
    height: 72,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1
  },
  title: {
    textAlign: 'center',
    color: Theme.COLOR_2,
    fontSize: 20,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '100'
  },
  rightChevron: {
    width: 72,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftChevron: {
    backgroundColor: '#fff',
    borderWidth: 1,
    height: 72
  }
})

export default BigButton
