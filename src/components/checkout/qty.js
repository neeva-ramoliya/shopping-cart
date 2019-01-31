import React from "react";
import { connect } from "react-redux";
import ExposurePlus1 from "@material-ui/icons/ExposurePlus1";
import ExposureNeg1 from "@material-ui/icons/ExposureNeg1";
import { setItemQuanity, removeFromCart } from "../../controllers/actions";

const Quantity = props => {
  let { qty, id } = props;
  return (
    <div className="quanity-panel">
      <button
        className="icon-btn btn-outlined cursor-pointer"
        onClick={() => {
          --qty == 0 ? props.removeFromCart(id) : props.setItemQuanity(id, qty);
        }}
      >
        <ExposureNeg1 />
      </button>
      <div className="quanity-field">{qty}</div>
      <button
        className="icon-btn btn-outlined cursor-pointer"
        onClick={() => {
          props.setItemQuanity(id, ++qty);
        }}
      >
        <ExposurePlus1 />
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  setItemQuanity,
  removeFromCart
};
export default connect(
  null,
  mapDispatchToProps
)(Quantity);
