const componentToHex = (c: number) => {
  var hex = c.toString(16)
  return hex.length == 1 ? '0' + hex : hex
}

const rgbToHex = (r: number, g: number, b: number) => {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

// alert(rgbToHex(0, 51, 255)) // #0033ff

const hexToRgb = (hex: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
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
