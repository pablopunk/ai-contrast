import React from 'react'
import {SketchPicker as Picker} from 'react-color'
import guess from '../lib/guess-color'

export class ColorBox extends React.Component {
  constructor (props) {
    super(props)

    const {color} = props
    this.state = {color}
  }

  onColorChange (color) {
    this.setState({color})
  }

  render () {
    return (
      <div>
        <section>
          <h1>{this.state.color}</h1>
          <Picker
            color={this.state.color}
            onChangeComplete={color => this.onColorChange(color.hex)}
          />
        </section>
        <style jsx>{`
        section {
          height: 100vh;
          width: 100vw;
          background-color: ${this.state.color};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 3em;
          font-family: Menlo, monospace;
        }
        h1 {
          color: ${guess(this.state.color)}
        }
        `}</style>
      </div>
    )
  }
}
