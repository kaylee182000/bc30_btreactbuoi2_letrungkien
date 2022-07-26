import React, { Component } from "react";
import Header from "./Header";
import Model from "./Model";
import ProductList from "./ProductList";

export default class Content extends Component {
  state = {
    modelState: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  tryItOn = (clickItem) => {
    this.setState({
      modelState: clickItem
    })
  }
  render() {
    return (
      <div
        className="container"
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          backgroundSize: "cover",
        }}
      >
        <Header />
        <Model modelState = {this.state.modelState}/>
        <ProductList tryItOn = {this.tryItOn}/>
      </div>
    );
  }
}
