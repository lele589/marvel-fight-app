import { StyleSheet, ViewStyle } from 'react-native'
import { colors } from './colors'

interface Style {
  mainContainer: ViewStyle
  paddingContainer: ViewStyle
  flexContainer: ViewStyle
  flexRowContainer: ViewStyle
  flexCenterContainer: ViewStyle
  flexEndContainer: ViewStyle
  flexCenterBetweenContainer: ViewStyle
}

const commonStyles = StyleSheet.create<Style>({
  mainContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  paddingContainer: {
    padding: 20,
  },
  flexContainer: {
    flex: 1,
  },
  flexRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexCenterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexEndContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  flexCenterBetweenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default commonStyles
