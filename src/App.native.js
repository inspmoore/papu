/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import HomeScreen from './js/screens/HomeScreen'
import DetailsScreen from './js/screens/DetailsScreen'
import MenuScreen from './js/screens/MenuScreen'
import CartScreen from './js/screens/CartScreen'
import MoreScreen from './js/screens/MoreScreen'
import CheckoutScreen from './js/screens/CheckoutScreen'
import PaymentScreen from './js/screens/PaymentScreen'
import store from './js/store/store'
import { firstRun } from './js/actions/moltinActions'
import { Provider } from 'react-redux'
import LogoType from './js/components/icons/LogoType'
import { Theme } from './js/constants/constants'
import CartButton from './js/components/CartButton'
import BillScreen from './js/screens/BillScreen'
import MoreHorizontalIcon from './js/components/icons/MoreHorizontalIcon'
import MenuIcon from './js/components/icons/MenuIcon'
import HomeIcon from './js/components/icons/HomeIcon'

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: <LogoType />,
      headerStyle: {
        backgroundColor: Theme.COLOR_1
      }
    }
  }
})

const MenuStack = createStackNavigator(
  {
    Menu: {
      screen: MenuScreen,
      navigationOptions: {
        title: 'Menu',
        headerStyle: {
          backgroundColor: '#EE1528'
        },
        headerTintColor: Theme.COLOR_2
      }
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    mode: 'modal'
  }
)

const CartStack = createStackNavigator({
  Cart: {
    screen: CartScreen,
    navigationOptions: {
      title: 'Cart',
      headerStyle: {
        backgroundColor: '#EE1528'
      },
      headerTintColor: Theme.COLOR_2
    }
  },
  Checkout: {
    screen: CheckoutScreen,
    navigationOptions: {
      title: 'Checkout',
      headerStyle: {
        backgroundColor: Theme.COLOR_4
      },
      headerTintColor: Theme.COLOR_2
    }
  },
  Payment: {
    screen: PaymentScreen,
    navigationOptions: {
      title: 'Payment',
      headerStyle: {
        backgroundColor: Theme.COLOR_4
      },
      headerTintColor: Theme.COLOR_2
    }
  },
  Bill: {
    screen: BillScreen,
    navigationOptions: {
      title: 'Bill',
      headerStyle: {
        backgroundColor: Theme.COLOR_4
      },
      headerTintColor: Theme.COLOR_2
    }
  }
})

const MoreStack = createStackNavigator({
  Home: {
    screen: MoreScreen,
    navigationOptions: {
      title: 'More',
      headerStyle: {
        backgroundColor: Theme.COLOR_1
      },
      headerTintColor: Theme.COLOR_2
    }
  }
})
const RootStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: props => <HomeIcon size={25} color={props.tintColor} />
      }
    },
    Menu: {
      screen: MenuStack,
      navigationOptions: {
        tabBarIcon: props => <MenuIcon size={24} color={props.tintColor} />
      }
    },
    Cart: {
      screen: CartStack,
      navigationOptions: {
        tabBarIcon: props => <CartButton {...props} />
      }
    },
    More: {
      screen: MoreStack,
      navigationOptions: {
        tabBarIcon: props => (
          <MoreHorizontalIcon color={props.tintColor} size={25} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Theme.COLOR_1
    }
  }
)

export default class App extends Component {
  componentDidMount() {
    store.dispatch(firstRun())
  }
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}
