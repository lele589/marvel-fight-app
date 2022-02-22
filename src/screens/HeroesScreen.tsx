import React, { FunctionComponent } from 'react'
import { SafeAreaView, Button, ScrollView } from 'react-native'
import Text from '../components/UI/Text/Text'
import { StackScreenProps } from '@react-navigation/stack'
import { Constants } from '../utils/constants'
import commonStyles from '../theme/library'

interface Props extends StackScreenProps<any, any> {}

const HeroesScreen: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={commonStyles.paddingContainer}>
        <Text size={22}>Heroes</Text>
        <Button
          title="Ir a Detalle de Heroe"
          onPress={() => navigation.navigate(Constants.HERO_DETAIL_SCREEN)}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HeroesScreen
