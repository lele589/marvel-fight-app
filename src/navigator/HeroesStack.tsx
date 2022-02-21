import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HeroesScreen from '../screens/HeroesScreen'
import HeroDetailScreen from '../screens/HeroDetailScreen'
import { Constants } from '../utils/constants'
import { colors } from '../theme/colors'

const Stack = createStackNavigator()

const HeroStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: colors.white },
        headerShown: false,
      }}>
      <Stack.Screen name={Constants.HEROES_SCREEN} component={HeroesScreen} />
      <Stack.Screen name={Constants.HERO_DETAIL_SCREEN} component={HeroDetailScreen} />
    </Stack.Navigator>
  )
}

export default HeroStack
