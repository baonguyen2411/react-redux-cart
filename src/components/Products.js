import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  showProducts(products) {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Product key={product.id} product={product} />;
      });
    }

    return result;
  }

  render() {
    let { products } = this.props;

    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">{this.showProducts(products)}</div>
      </section>
    );
  }
}

export default Products;
