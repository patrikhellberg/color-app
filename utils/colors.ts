const componentToHex = (c: number) => {
  var hex = c.toString(16)
  return hex.length == 1 ? '0' + hex : hex
}

const rgbToHex = (r: number, g: number, b: number) => {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

type ColorLetter = 'r' | 'g' | 'b'
const hexToRgb = (hex: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  const keys: ColorLetter[] = ['r', 'g', 'b']
  return keys.reduce((acc, key, i) => {
    acc[key] = result ? parseInt(result[i + 1], 16) : 255
    return acc
  }, {} as { [key in ColorLetter]: number })
}

export const getForegroundColor = (color: string) => {
  const { r, g, b } = hexToRgb(color)
  const avg = (r + g + b) / 3
  return avg > 255 / 2 - 10 ? '#000000' : '#FFFFFF'
}
// alert(hexToRgb('#0033ff').g) // "51";

// function rgbToHex(r, g, b) {
//   return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)
// }

// alert(rgbToHex(0, 51, 255)) // #0033ff

// function hexToRgb(hex) {
//   // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
//   var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
//   hex = hex.replace(shorthandRegex, function (m, r, g, b) {
//     return r + r + g + g + b + b
//   })

//   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
//   return result
//     ? {
//         r: parseInt(result[1], 16),
//         g: parseInt(result[2], 16),
//         b: parseInt(result[3], 16),
//       }
//     : null
// }

// alert(hexToRgb('#0033ff').g) // "51";
// alert(hexToRgb('#03f').g) // "51";

export const colorPresets: { [key: string]: string } = {
  White: '#FFFFFF',
  Moccasin: '#FFE4B5',
  Bisque: '#FFE4C4',
  'Misty rose': '#FFE4E1',
  'Blanched almond': '#FFEBCD',
  'Papaya whip': '#FFEFD5',
  'Lavender blush': '#FFF0F5',
  Seashell: '#FFF5EE',
  Azure: '#F0FFFF',
  'Old lace': '#FDF5E6',
  'Light golden rod yellow': '#FAFAD2',
  'Mint cream': '#F5FFFA',
  Honeydew: '#F0FFF0',
  'Alice blue': '#F0F8FF',
  Wheat: '#F5DEB3',
  Beige: '#F5F5DC',
  'Ghost white': '#F8F8FF',
  'Antique white': '#FAEBD7',
  Linen: '#FAF0E6',
  'White smoke': '#F5F5F5',
  Cornsilk: '#FFF8DC',
  'Lemon chiffon': '#FFFACD',
  'Floral white': '#FFFAF0',
  Snow: '#FFFAFA',
  Lightyellow: '#FFFFE0',
  Ivory: '#FFFFF0',

  Purple: '#800080',
  Fuchsia: '#FF00FF',

  Yellow: '#FFFF00',

  Teal: '#008080',

  'Dark turquoise': '#00CED1',

  Turquoise: '#40E0D0',

  'Medium turquoise': '#48D1CC',
  Indigo: '#4B0082',

  'Rebecca purple': '#663399',

  'Slate blue': '#6A5ACD',
  'Olive drab': '#6B8E23',

  'Medium slate blue': '#7B68EE',

  Chartreuse: '#7FFF00',
  Aquamarine: '#7FFFD4',

  'Light sky blue': '#87CEFA',
  'Bluev iolet': '#8A2BE2',
  'Dark red': '#8B0000',
  'Dark magenta': '#8B008B',
  'Saddle brown': '#8B4513',
  'Dark sea green': '#8FBC8F',
  'Light green': '#90EE90',
  'Medium purple': '#9370DB',
  'Dark violet': '#9400D3',

  'Dark orchid': '#9932CC',
  'Yellow green': '#9ACD32',
  Sienna: '#A0522D',
  Brown: '#A52A2A',

  'Light blue': '#ADD8E6',
  'Greeny ellow': '#ADFF2F',
  'Pale turquoise': '#AFEEEE',
  'Light steel blue': '#B0C4DE',
  'Powder blue': '#B0E0E6',
  Firebrick: '#B22222',
  'Dark golden rod': '#B8860B',
  'Medium orchid': '#BA55D3',
  'Rosy brown': '#BC8F8F',
  'Dark khaki': '#BDB76B',
  'Medium violet red': '#C71585',
  'Indian red': '#CD5C5C',
  Peru: '#CD853F',
  Chocolate: '#D2691E',
  Tan: '#D2B48C',

  Thistle: '#D8BFD8',
  Orchid: '#DA70D6',
  'Golden rod': '#DAA520',
  'Pale violet red': '#DB7093',
  Crimson: '#DC143C',
  Gainsboro: '#DCDCDC',
  Plum: '#DDA0DD',
  Burlywood: '#DEB887',
  'Light cyan': '#E0FFFF',
  Lavender: '#E6E6FA',
  'Dark salmon': '#E9967A',
  Violet: '#EE82EE',
  'Pale golden rod': '#EEE8AA',
  'Light coral': '#F08080',
  Khaki: '#F0E68C',
  'Sandy brown': '#F4A460',
  Salmon: '#FA8072',
  Magenta: '#FF00FF',
  'Deep pink': '#FF1493',
  'Orange red': '#FF4500',
  Tomato: '#FF6347',
  'Hot pink': '#FF69B4',
  Coral: '#FF7F50',
  'Dark orange': '#FF8C00',
  'Light salmon': '#FFA07A',
  Orange: '#FFA500',
  'Light pink': '#FFB6C1',
  Pink: '#FFC0CB',
  Gold: '#FFD700',
  'Peach puff': '#FFDAB9',
  'Navajo white': '#FFDEAD',

  //Blue
  'Dodger blue': '#1E90FF',
  Blue: '#0000FF',
  'Medium blue': '#0000CD',
  'Dark blue': '#00008B',
  Navy: '#000080',
  'Midnight blue': '#191970',
  'Cadet blue': '#5F9EA0',
  'Cornflower blue': '#6495ED',
  Aqua: '#00FFFF',
  'Dark cyan': '#008B8B',
  'Deep sky blue': '#00BFFF',
  'Royal blue': '#4169E1',
  'Steel blue': '#4682B4',
  'Dark slate blue': '#483D8B',
  'Sky blue': '#87CEEB',
  Cyan: '#00FFFF',

  //redish
  Red: '#FF0000',
  Maroon: '#800000',

  //Green
  'Pale green': '#98FB98',
  'Medium aquamarine': '#66CDAA',
  'Light sea green': '#20B2AA',
  'Dorest green': '#228B22',
  'Dark olive green': '#556B2F',
  'Sea green': '#2E8B57',
  'Dark slate gray': '#2F4F4F',
  'Dark green': '#006400',
  Olive: '#808000',
  'Lawn green': '#7CFC00',
  'Lime green': '#32CD32',
  'Medium sea green': '#3CB371',
  'Medium spring green': '#00FA9A',
  'Spring green': '#00FF7F',
  Green: '#008000',
  Lime: '#00FF00',

  //Grayscale
  'Slate gray': '#708090',
  'Light slate gray': '#778899',

  Gray: '#808080',
  Silver: '#C0C0C0',
  'Dim gray': '#696969',
  Black: '#000000',
  'Light gray': '#D3D3D3',
  'Dark gray': '#A9A9A9',
}
