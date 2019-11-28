import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
   
    let x = event.clientX;     // Get the horizontal coordinate
    let y = event.clientY;     // Get the vertical coordinate

    console.log("x ="+x,"y"+y)
    drawChromeBoiAtCoords(x,y) // has twoarguments x, and y
  }
  
  handleClick = () => {

   toggleCycling() //invoke `toggleCycling` when clicked
  }
   
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  handleKeyDown = (e) => {
    if(e.key == 'a'){return resize('+')}
    else if(e.key == 's'){return resize('-')}

  }
  
  render() {
    return (
      <canvas 
        onClick={this.handleClick} // on click fire up handleClick
        onKeyDown={this.handleKeyDown} // when key is pressed fire up handleKeyDown
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
