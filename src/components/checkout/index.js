import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import getCartItems from "../../controllers/selectors/getcartitems";
import {
  calculateTotalPrice,
  calculateTotalDiscount,
  calculateTypeDiscount
} from "../../helpers/utility";
import "../../styles/checkout/checkout.styl";

import Header from "./header";
import ItemList from "./itemlist";
import PriceContainer from "./pricecontainer";

const CheckOut = props => {
  const { itemsCount, products, discountType } = props;
  if (!itemsCount) {
    return <Redirect to={"/"} />;
  }
  const totalPrice = calculateTotalPrice(products);
  const discount = calculateTotalDiscount(products);
  const typeDiscount = calculateTypeDiscount(
    products,
    discountType.type,
    discountType.amount
  );

  return (
    <div className="checkout-container">
      <Header />
      <div className="content">
        <ItemList itemsCount={itemsCount} products={products} />
        <PriceContainer
          itemsCount={itemsCount}
          totalPrice={totalPrice}
          discount={discount}
          typeDiscount={typeDiscount}
        />
      </div>
    </div>
  );
};

const mapStoreToProps = state => {
  return {
    itemsCount: state.cartProducts.length,
    products: getCartItems(state.products, state.cartProducts),
    discountType: state.discountType
  };
};

export default connect(mapStoreToProps)(CheckOut);
