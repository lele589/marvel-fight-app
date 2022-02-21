import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AddFightScreen from '../screens/AddFightScreen'
import HeroStack from './HeroesStack'
import VillainStack from './VillainStack'
import SettingsScreen from '../screens/SettingsScreen'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Añadir partida" component={AddFightScreen} />
      <Tab.Screen name="Heroes" component={HeroStack} />
      <Tab.Screen name="Villanos" component={VillainStack} />
      <Tab.Screen name="Ajustes" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default Tabs
