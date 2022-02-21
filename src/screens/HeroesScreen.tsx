import React, { FunctionComponent } from 'react'
import { SafeAreaView, Text, Button } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { Constants } from '../utils/constants'

interface Props extends StackScreenProps<any, any> {}

const HeroesScreen: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Heroes</Text>
      <Button
        title="Ir a Detalle de Heroe"
        onPress={() => navigation.navigate(Constants.HERO_DETAIL_SCREEN)}
      />
    </SafeAreaView>
  )
}

export default HeroesScreen
