import createIcon from './createIcon'

export default function createIcomoonIcon(config, fontFamily, fontFile) {

  const glyphMap = {}

  config.icons.forEach(icon => {
    icon.properties.name.split(/\s*,\s*/g).forEach(name => {
      glyphMap[name] = icon.properties.code
    })
  })

  return createIcon(
    glyphMap, 
    fontFamily || config.preferences.fontPref.metadata.fontFamily, 
    fontFile
  )

}