import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../controllers/actions";

const ItemDesc = props => {
  return (
    <div className="item-desc-panel">
      <div className="logo-img">
        <img src={props.imgSrc} />
      </div>
      <div className="product-name text-secondary">{props.name}</div>
      <div
        className="close-icon text-secondary cursor-pointer"
        onClick={() => props.removeFromCart(props.id)}
      >
        X
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  removeFromCart
};
export default connect(
  null,
  mapDispatchToProps
)(ItemDesc);
