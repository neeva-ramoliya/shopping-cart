const getCartItems = (products, cartData) => {
  return cartData.map(item => {
    const product = products.find(p => p.id == item.id);
    return { ...product, ...item };
  });
};

export default getCartItems;
