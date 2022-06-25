import React, { Component } from "react";
import data from "../../data/DataGlasses.json";
import SanPhamKinh from "./SanPhamKinh";

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
    return this.state.mangGlass.map((product) => {
      return <SanPhamKinh product={product} changeGlass={this.changeGlass}/>
    });
  };

  renderInfo = () => {
    return (
      <div>
        <h5>{this.state.name}</h5>
        <p class="my-3">
          <span class="mr-4">${this.state.price}</span>
        </p>
        <p>{this.state.desc}</p>
      </div>
    );
  };

  changeGlass = (id) => {
    let imgSource = "./glassesImage/v1.png";
    let nameSource = "";
    let priceSource = "";
    let descSource = "";

    for (let i = 0; i < this.state.mangGlass.length; i++) {
      if (id === this.state.mangGlass[i].id) {
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
  };

  render() {
    return (
      <div className="container vglasses py-3 " style={{ cursor: "pointer", height: "100vh" }}>
        <h1 className="text-center">BÀI TẬP KÍNH</h1>
        <div className="row ">
          <div className="col-6 vglasses__left">
            <div className="row">
              <div className="col-12">
                <h3 className="mb-2">TRY GLASSES APP ONLINE</h3>
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
                {this.renderInfo()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
