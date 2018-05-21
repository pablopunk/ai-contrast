import hexRgb from 'hex-rgb'
import {predict} from './predict'

export default (hex) => {
  const rgb = hexRgb(hex)

  const prediction = predict({
    r: rgb.red,
    g: rgb.green,
    b: rgb.blue
  })

  const color = prediction.white > prediction.black
    ? 'white'
    : 'black'

  return color
}
