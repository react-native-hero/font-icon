import React, { 
  PureComponent,
} from 'react'

import {
  Text,
  Platform,
} from './react-native'

import PropTypes from 'prop-types'

export default function createIcon(glyphMap, fontFamily, fontFile) {

  const fontReference = Platform.select({
    ios: fontFamily,
    android: fontFile
      ? fontFile.replace(/\.(otf|ttf)$/, '')
      : fontFamily
  })

  class Icon extends PureComponent {

    static propTypes = {
      name: PropTypes.oneOf(Object.keys(glyphMap)),
      size: PropTypes.number,
      color: PropTypes.oneOfType([
        PropTypes.string, 
        PropTypes.number,
      ]),
      style: Text.propTypes.style,
    }

    render() {

      const { 
        name, 
        size, 
        color, 
        style, 
        ...props 
      } = this.props

      let glyph = name ? glyphMap[name] || '?' : ''
      if (typeof glyph === 'number') {
        glyph = String.fromCharCode(glyph)
      }

      const styleDefaults = {
        fontSize: size,
        color,
      }

      const styleOverrides = {
        fontFamily: fontReference,
      }

      props.style = [styleDefaults, style, styleOverrides]

      return (
        <Text 
          {...props}
        >
          {glyph}
        </Text>
      )

    }
  }

  return Icon

}