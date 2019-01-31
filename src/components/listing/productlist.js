import React from "react";
import { connect } from "react-redux";
import "../../styles/listing/product.styl";

import ProductItem from "./productitem";

const ProductList = props => {
  return (
    <div className="product-list">
      {props.products.map(item => {
        return (
          <ProductItem
            key={item.id}
            product={item}
            dispatch={props.dispatch}
            notify={props.notify}
          />
        );
      })}
    </div>
  );
};

const mapStoreToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStoreToProps)(ProductList);
