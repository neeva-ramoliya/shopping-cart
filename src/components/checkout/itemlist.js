import React from "react";
import { connect } from "react-redux";
import getCartItems from "../../controllers/selectors/getcartitems";
import { calculatePriceWithDiscount } from "../../helpers/utility";
import "../../styles/checkout/item-table.styl";

import ItemDesc from "./item";
import Quantity from "./qty";

const ItemList = props => {
  return (
    <div className="item-table">
      <table>
        <thead>
          <th>{`Items(${props.itemsCount})`}</th>
          <th>Qty</th>
          <th>price</th>
        </thead>
        <div className="thead-seperator" />
        <tbody>
          {props.products.map(product => {
            const { img_url, id, name, qty, discount, price } = product;
            const newPrice = !!discount
              ? calculatePriceWithDiscount(price, discount)
              : price;
            return (
              <tr>
                <td className="col-1">
                  <ItemDesc imgSrc={img_url} name={name} id={id} />
                </td>
                <td className="col-2">
                  <Quantity id={id} qty={qty} />
                </td>
                <td className="col-3">{`$${qty * newPrice}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="seperator float-top" />
    </div>
  );
};

const mapStoreToProps = state => {
  return {
    products: getCartItems(state.products, state.cartProducts)
  };
};

export default connect(mapStoreToProps)(ItemList);
