import React from "react";
import { addToCart } from "../../controllers/actions";
import { calculatePriceWithDiscount } from "../../helpers/utility";

const ProductItem = props => {
  const { img_url, price, name, id, discount } = props.product;
  const newPrice = !!discount && calculatePriceWithDiscount(price, discount);
  return (
    <div className="card product-item">
      <div className="image-container">
        <div className="card-image">
          <img src={img_url} />
        </div>
      </div>
      <div className="card-info">
        <div className="product-name text-secondary">{name}</div>
        <div className="product-price ">
          {newPrice ? (
            <span>
              <span className="canceled-amount text-secondary">
                <i>{`$${price}`}</i>
              </span>{" "}
              {`$${newPrice}`}
            </span>
          ) : (
            `$${price}`
          )}
        </div>
        <button
          className="cart-button btn-outlined cursor-pointer"
          onClick={() => {
            props.dispatch(addToCart(id));
            props.notify(name);
          }}
        >
          Add To Cart
        </button>
      </div>
      {!!discount && <div className="card-tag">{`${discount}% off`}</div>}
    </div>
  );
};

export default ProductItem;
