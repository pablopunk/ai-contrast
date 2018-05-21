import brain from 'brain.js'

const net = new brain.NeuralNetwork()

const data = [
  {input: {r: 0, g: 0, b: 0}, output: {white: 1}},
  // {input: {r: 0, g: 0, b: 0}, output: {white: 1}},
  // {input: {r: 0, g: 0, b: 0}, output: {white: 1}},
  {input: {r: 255, g: 255, b: 255}, output: {black: 1}}
  // {input: {r: 255, g: 255, b: 255}, output: {black: 1}},
  // {input: {r: 255, g: 255, b: 255}, output: {black: 1}},
  // {input: {r: 255, g: 255, b: 255}, output: {black: 1}},
  // {input: {r: 255, g: 0, b: 0}, output: {white: 1}},
  // {input: {r: 255, g: 0, b: 0}, output: {white: 1}},
  // {input: {r: 5, g: 6, b: 7}, output: {white: 1}},
  // {input: {r: 199, g: 205, b: 220}, output: {black: 1}},
  // {input: {r: 13, g: 31, b: 77}, output: {white: 1}},
  // {input: {r: 144, g: 254, b: 100}, output: {white: 1}},
  // {input: {r: 189, g: 16, b: 224}, output: {white: 1}},
  // {input: {r: 65, g: 117, b: 5}, output: {white: 1}},
  // {input: {r: 126, g: 211, b: 33}, output: {black: 1}},
  // {input: {r: 139, g: 87, b: 42}, output: {white: 1}},
  // {input: {r: 248, g: 231, b: 28}, output: {black: 1}},
  // {input: {r: 245, g: 166, b: 35}, output: {black: 1}},
  // {input: {r: 208, g: 2, b: 27}, output: {black: 1}},
  // {input: {r: 43, g: 37, b: 42}, output: {white: 1}},
  // {input: {r: 243, g: 254, b: 64}, output: {black: 1}},
  // {input: {r: 6, g: 26, b: 11}, output: {white: 1}},
  // {input: {r: 211, g: 213, b: 221}, output: {black: 1}},
  // {input: {r: 74, g: 74, b: 74}, output: {white: 1}},
  // {input: {r: 33, g: 33, b: 33}, output: {white: 1}}
]

net.train(data)

export const predict = (...rest) => net.run(...rest)
