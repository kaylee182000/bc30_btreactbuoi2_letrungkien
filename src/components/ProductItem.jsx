import React, { Component } from "react";
export default class ProductItem extends Component {
  render() {
    let { prod,tryItOn } = this.props;
    return (    
        <input className="col-2 m-3" height="auto" type="image" alt="" src={prod.url} onClick={()=>{
          tryItOn(prod)
        }}/>
    );
  }
}
