import { StyleProp, TextStyle } from 'react-native'

export type TextProps = {
  weight?: string
  size?: number
  lineHeight?: number
  color?: string
  isCapitalLetters?: boolean
  children: string
  align?: 'left' | 'center' | 'right'
  style?: StyleProp<TextStyle>
  multiline?: boolean
  numberOfLines?: number
}
