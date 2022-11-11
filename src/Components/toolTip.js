import React, { Component } from 'react'
import "./style.css";



export default class toolTip extends Component {

  constructor() {
    super();
    this.state = {
      isHovering: false,
    }
  };

  handelHover = () => {
    setTimeout(() => {
      this.setState({
        isHovering: true,
      })
    }, 500)
  };

  handelNotHover = () => {
    this.setState({
      isHovering: false,
    })
  };



  render() {
    return (
      <div>

        <div className='tool-container'>
          <div className='button-container'>
            <button className='button' onMouseOver={this.handelHover} onMouseOut={this.handelNotHover} > Hover Over me please :) </button>
            {this.state.isHovering && <div className='tool-tip' style={this.props.position} >You did hover, thanks  : )</div>}
          </div>

        </div>

      </div>
    )
  }
}