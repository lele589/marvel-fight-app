import React, { FunctionComponent } from 'react'
import { SafeAreaView, Text, Button } from 'react-native'
import { Constants } from '../utils/constants'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any> {}

const VillainsScreen: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Villanos</Text>
      <Button
        title="Ir a Detalle de Villano"
        onPress={() => navigation.navigate(Constants.VILLAIN_DETAIL_SCREEN)}
      />
    </SafeAreaView>
  )
}

export default VillainsScreen
