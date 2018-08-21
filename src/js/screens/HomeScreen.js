import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Card from '../components/Card'

class HomeScreen extends Component {
  render() {
    return (
      <ScrollView
        style={styles.main}
        contentContainerStyle={styles.scrollContainer}
      >
        <Card
          title="OUR FABULOUS MENU"
          copy="Check out our fabulous menu. We have everything for your small and big hunger!"
          bgColor="rgba(233,201,004,0.9)"
          image={require('../../assets/card1.png')}
          onPress={() => this.props.navigation.navigate('Menu')}
        />
        <Card
          title="TODAY's SPECIALS"
          copy="Our sheef recomends today!"
          bgColor="rgba(104,201,32,0.9)"
          image={require('../../assets/card2.png')}
        />
        <Card
          title="YOUR LAST ORDER"
          copy="When you love something more and more every time."
          bgColor="rgba(9,172,235,0.9)"
          image={require('../../assets/card3.png')}
        />
        <Card
          title="MEAT TORNADO"
          copy="Give more meat!"
          bgColor="rgba(238,21,40,0.9)"
          image={require('../../assets/card4.png')}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff'
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'flex-start'
  }
})

HomeScreen.propTypes = {
  navigation: PropTypes.object
}

export default HomeScreen
