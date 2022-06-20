import React, { Component } from "react";
import data from "./../data/DataGlasses.json";

export default class BaiTapKinh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangGlass: data,
      img: "./glassesImage/v1.png",
      name: "",
      price: "",
      desc: "",
    };
  }

  renderGlass = () => {
    return this.state.mangGlass.map((product, index) => {
      return (
        <div key={index} className="col-4 pt-5">
          <button style={{ border: "none" }}>
            <img
              onClick={() => this.changeGlass(index)}
              src={product.url}
              height={100}
              width={150}
            />
          </button>
        </div>
      );
    });
  };

  changeGlass = (index) => {
    let imgSource = "./glassesImage/v1.png";
    let nameSource = "";
    let priceSource = "";
    let descSource = "";

    for (let i = 0; i < this.state.mangGlass.length; i++) {
      if (index + 1 === this.state.mangGlass[i].id) {
        imgSource = this.state.mangGlass[i].url;
        nameSource = this.state.mangGlass[i].name;
        priceSource = this.state.mangGlass[i].price;
        descSource = this.state.mangGlass[i].desc;
      }
    }
    this.setState({
      img: imgSource,
      name: nameSource,
      price: priceSource,
      desc: descSource,
    });
    document.querySelector(".vglasses__info").style.display = "block";
    document.querySelector(".vglasses__model").style.display = "block";
  };

  render() {
    return (
      <div className="container vglasses py-3 " style={{ cursor: "pointer" }}>
        <div className="row ">
          <div className="col-6 vglasses__left">
            <div className="row">
              <div className="col-12">
                <h1 className="mb-2">TRY GLASSES APP ONLINE</h1>
              </div>
            </div>
            <div className="row" id="vglassesList">
              {this.renderGlass()}
            </div>
          </div>
          <div className="col-5 vglasses__right p-0">
            <div className="vglasses__card">
              <div className="vglasses__model" id="avatar">
                <img src={this.state.img} alt="" />
              </div>
              <div id="glassesInfo" className="vglasses__info">
                <div >
                  <h5>{this.state.name}</h5>
                  <p class="my-3">
                    <span
                      class="mr-4"
                    >
                      ${this.state.price}
                    </span>
                  </p>
                  <p>{this.state.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
