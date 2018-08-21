// web
import React, { Component } from 'react'
import { View } from 'react-native'
import { ModalContainer } from 'react-router-modal'
import WebRouteGenerator from './js/WebRoute'
import MoreScreen from './js/screens/MoreScreen'
import CartScreen from './js/screens/CartScreen'
import MenuScreen from './js/screens/MenuScreen'
import HomeScreen from './js/screens/HomeScreen'
import DetailsScreen from './js/screens/DetailsScreen'
import CheckoutScreen from './js/screens/CheckoutScreen'
import PaymentScreen from './js/screens/PaymentScreen'
import BillScreen from './js/screens/BillScreen'
import store from './js/store/store'
import { firstRun } from './js/actions/moltinActions'
import 'react-router-modal/css/react-router-modal.css'
import TopBar from './js/components/TopBar'
import SideDrawer from './js/components/SideDrawer'
import SideMenu from './js/components/SideMenu'

const routeMap = {
  Home: {
    exact: true,
    path: '/',
    component: HomeScreen
  },
  Menu: {
    path: '/menu/:sectionIndex?',
    component: MenuScreen
  },
  Details: {
    path: '*/modal/:id',
    modal: true,
    component: DetailsScreen,
    exact: true
  },
  Cart: {
    exact: true,
    path: '/cart',
    component: CartScreen
  },
  Checkout: {
    path: '/cart/checkout',
    component: CheckoutScreen
  },
  Payment: {
    path: '/cart/payment',
    component: PaymentScreen
  },
  Bill: {
    path: '/cart/bill',
    component: BillScreen
  },
  More: {
    path: '/more',
    component: MoreScreen
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      drawerVisible: false
    }
  }
  componentDidMount() {
    store.dispatch(firstRun())
  }

  toggleDrawer = () => {
    this.setState(prevState => ({ drawerVisible: !prevState.drawerVisible }))
  }

  render() {
    const { drawerVisible } = this.state
    return (
      <View style={{ height: '100vh' }}>
        <TopBar onLeftPress={this.toggleDrawer} />
        <View style={{ flex: 1 }}>{WebRouteGenerator({ routeMap })}</View>
        <SideDrawer
          visible={drawerVisible}
          onHideDrawer={this.toggleDrawer}
          element={<SideMenu hideDrawer={this.toggleDrawer} />}
        />
        <ModalContainer />
      </View>
    )
  }
}

export default App
