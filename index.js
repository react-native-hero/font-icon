import { NativeModules } from 'react-native'

const { RNTFontIcon } = NativeModules

import createFont from './js/createFont'
import createIcon from './js/createIcon'
import createFontelloIcon from './js/createFontelloIcon'
import createIcomoonIcon from './js/createIcomoonIcon'

export const createFont = createFont
export const createIcon = createIcon
export const createFontelloIcon = createFontelloIcon
export const createIcomoonIcon = createIcomoonIcon

export function enumFonts() {
  RNTFontIcon.enumFonts()
}