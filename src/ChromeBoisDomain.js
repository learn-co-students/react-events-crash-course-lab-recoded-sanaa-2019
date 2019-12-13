import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (e) => {
    drawChromeBoiAtCoords(e.clientX,e.clientY)

  }
  
  tickle(tickle){
if(tickle.key == "a"){
resize("+")
}else if(tickle.key == "s"){
resize("-")
}
   }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling}
        onKeyPress={this.tickle}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
