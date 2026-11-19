import SVGModule from '@hellberg/react-svg-icons'

// The icon package is CommonJS. In an ESM package Vite follows Node's interop,
// where the default import is the whole module.exports, so pick its default.
const SVG =
  (SVGModule as unknown as { default?: typeof SVGModule }).default ?? SVGModule

export default SVG
