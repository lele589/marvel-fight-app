import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import VillainsScreen from '../screens/VillainsScreen'
import VillainDetailScreen from '../screens/VillainDetailScreen'
import { Constants } from '../utils/constants'
import { colors } from '../theme/colors'

const Stack = createStackNavigator()

const VillainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: colors.white },
        headerShown: false,
      }}>
      <Stack.Screen name={Constants.VILLAINS_SCREEN} component={VillainsScreen} />
      <Stack.Screen name={Constants.VILLAIN_DETAIL_SCREEN} component={VillainDetailScreen} />
    </Stack.Navigator>
  )
}

export default VillainStack
