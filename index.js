import {
  Platform,
  NativeModules,
} from 'react-native'

const { RNTFontIcon } = NativeModules

export { default as createIcon } from './js/createIcon'
export { default as createFontelloIcon } from './js/createFontelloIcon'
export { default as createIcomoonIcon } from './js/createIcomoonIcon'

export const enumFonts = Platform.select({
  ios() {
    return RNTFontIcon.enumFonts()
  },
  android() {
    return Promise.resolve({})
  }
})
