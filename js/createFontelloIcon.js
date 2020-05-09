import createIcon from './createIcon'

export default function createIcomoonIcon(config, fontFamily, fontFile) {

  const glyphMap = {}

  config.glyphs.forEach(glyph => {
    glyphMap[glyph.css] = glyph.code
  })

  const family = fontFamily || config.name || 'fontello'

  return createIcon(
    glyphMap,
    family,
    fontFile || `${family}.ttf`
  )

}
