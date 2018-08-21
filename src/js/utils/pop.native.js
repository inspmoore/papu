import { StackActions } from 'react-navigation'

const pop = ({ navigation, n }) => {
  navigation.dispatch(StackActions.pop({ n }))
}

export default pop
