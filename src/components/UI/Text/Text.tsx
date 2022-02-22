import React, { FunctionComponent } from 'react'
import { Text } from 'react-native'
import _ from 'lodash'
import { TextProps } from './types'
import { colors } from '../../../theme/colors'
import { fonts } from '../../../utils/fonts'

const TextView: FunctionComponent<TextProps> = ({
  weight = 'regular',
  size = 14,
  lineHeight,
  color = colors.black,
  children,
  style,
  isCapitalLetters = false,
  align = 'left',
  ...props
}) => {
  const styles = {
    ...fonts[weight],
    fontSize: size,
    lineHeight: lineHeight || size + 2,
    color: color,
    textAlign: align,
  }

  return (
    <Text style={[style, styles]} {...props}>
      {isCapitalLetters ? _.capitalize(children) : children}
    </Text>
  )
}

export default TextView
