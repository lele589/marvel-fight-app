import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import Text from '../components/UI/Text/Text'
import commonStyles from '../theme/library'
import { colors } from '../theme/colors'

const AddFightScreen = () => {
  return (
    <SafeAreaView style={commonStyles.mainContainer}>
      <ScrollView style={commonStyles.paddingContainer}>
        <Text size={22} color={colors.black}>
          AddFightScreen
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddFightScreen
