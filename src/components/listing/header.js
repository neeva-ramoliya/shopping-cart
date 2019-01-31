import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import "../../styles/listing/header.styl";

const Header = props => {
  const { cartItemsCount } = props;
  return (
    <div className="header">
      <span className="title text-secondary">All Items</span>
      <Link to={cartItemsCount ? `/checkout` : "/"}>
        <button
          className="btn-contained cart-button cursor-pointer"
          disabled={!!cartItemsCount ? false : true}
        >
          <span>
            <span> Go To Cart</span> <ShoppingCart className="btn-icon-text" />
            {!!cartItemsCount && (
              <span className="badge">{cartItemsCount}</span>
            )}
          </span>
        </button>
      </Link>
      <div className="seperator" />
    </div>
  );
};

const mapStoreToProps = state => {
  return {
    cartItemsCount: state.cartProducts.length
  };
};
export default connect(mapStoreToProps)(Header);
