import React, { Component } from 'react'

export default class SanPhamKinh extends Component {
  render() {
    let {changeGlass, product} = this.props;
    return (
        <div key={product.id} className="col-4 pt-5">
        <button style={{ border: "none" }}>
          <img
            onClick={() => changeGlass(product.id)}
            src={product.url}
            height={100}
            width={150}
          />
        </button>
      </div>
    )
  }
}
