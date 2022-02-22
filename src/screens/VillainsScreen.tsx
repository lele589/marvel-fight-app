import React, { FunctionComponent } from 'react'
import { SafeAreaView, Button, ScrollView } from 'react-native'
import Text from '../components/UI/Text/Text'
import { Constants } from '../utils/constants'
import { StackScreenProps } from '@react-navigation/stack'
import commonStyles from '../theme/library'

interface Props extends StackScreenProps<any, any> {}

const VillainsScreen: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={commonStyles.paddingContainer}>
        <Text size={22}>Villanos</Text>
        <Button
          title="Ir a Detalle de Villano"
          onPress={() => navigation.navigate(Constants.VILLAIN_DETAIL_SCREEN)}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default VillainsScreen
