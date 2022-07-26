import React, { Component } from 'react'

export default class Model extends Component {
  render() {
    let {modelState} = this.props
    return (
      <div className='mt-5'>
          <img style={{transform: "translate(112%,-77%)"}} src={modelState.url} alt="" />
          <img className='border border-4 border-dark rounded' src="./glassesImage/model.jpg" alt="" />
      </div>
    )
  }
}
