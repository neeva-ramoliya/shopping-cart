import React from "react";

const PriceContainer = props => {
  const { itemsCount, totalPrice, discount, typeDiscount } = props;
  const orderTotal = totalPrice - discount - typeDiscount;
  return (
    <div className="total-price-container">
      <div className="summary">
        <p>
          <b>Total</b>
        </p>
        <div className="summary-row text-secondary">
          <p className="flex-item text-left">{`Items(${itemsCount})`}</p>
          <p className="flex-item text-right">{`:  $${totalPrice}`}</p>
        </div>
        <div className="discount text-secondary">
          <div className="summary-row">
            <div className="flex-item text-left">Discount</div>
            <div className="flex-item text-right">{`: -$${discount}`}</div>
          </div>
          <div className="summary-row">
            <div className="flex-item text-left">Type Discount</div>

            <div className="flex-item text-right">{`: -$${typeDiscount}`}</div>
          </div>
        </div>
      </div>
      <div className="order-total">
        <div className="summary-row">
          <div className="flex-item text-left">
            <b>Order Total</b>
          </div>

          <div className="flex-item text-right">
            <b>{`: $${orderTotal}`}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceContainer;
