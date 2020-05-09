# @react-native-hero/font-icon

This module is used to add custom fonts.

By the way, you can also add custom font icons.

## Getting started

Install the library using either Yarn:

```
yarn add @react-native-hero/font-icon
```

or npm:

```
npm install --save @react-native-hero/font-icon
```

## Link

- React Native v0.60+

For iOS, use `cocoapods` to link the package.

run the following command:

```
$ cd ios && pod install
```

For android, the package will be linked automatically on build.

- React Native <= 0.59

run the following command to link the package:

```
$ react-native link @react-native-hero/font-icon
```

## Steps

1. Download your font file, such as `abc.ttf`.

2. Put the font file in the `<project>/assets/fonts` folder.

3. Create `<project>/react-native.config.js`:

```js
module.exports = {
  assets: ['./assets/fonts'],
};
```

4. Run `npx react-native link`.

5. At this point, the font is installed, but you don't know the `fontFamily` of the font.

6. Call `enumFonts()` on ios, you will get a fonts array, and you will find the `fontFamily` from the array.

```js
import {
  enumFonts,
} from '@react-native-hero/font-icon'

enumFonts().then(data => {
  console.log(data.fonts)
})
```

7. Here comes the core step, ios needs the `fontFamily`, but android just needs the font file name. For simplicity, I suggest you change the font file name to the fontFamily, then repeat the steps above.

8. If you just need a new font, that's all.

9. If you need a font icon, see the example below.

## Example

```js
import {
  createFontelloIcon,
  createIcomoonIcon,
} from '@react-native-hero/font-icon'

// config is a json downloed from fontello
const FontelloIcon = createFontelloIcon(config)

// config is a json downloed from icomoon
const IcomoonIcon = createIcomoonIcon(config)

// then you can use the Icon Component
<FontelloIcon
  size={14}
  color="#666"
  name="like"
  style={{
    marginLeft: 4
  }}
/>
```