import createIcon from './createIcon'

export default function createIcomoonIcon(config, fontFamily, fontFile) {

  const glyphMap = {}
  
  config.glyphs.forEach(glyph => {
    glyphMap[glyph.css] = glyph.code
  })

  return createIcon(
    glyphMap, 
    fontFamily || config.name || 'fontello', 
    fontFile
  )

}