export const removeDuplicates = (cartArray, cartItemToAdd) => {
  const filterCartAndItemData = cartArray.find((item) => {
    return item.id === cartItemToAdd.id;
  });
  if (filterCartAndItemData) {
    return cartArray.map((item) => {
      if (item.id === cartItemToAdd.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
  }
  return [...cartArray, { ...cartItemToAdd, quantity: 1 }];
};

export const decreaseQuantity = (cartArray, cartItemToDecrease) => {
  const checkForItemPresentInCart = cartArray.find(
    (item) => item.id === cartItemToDecrease.id
  );
  if (checkForItemPresentInCart.quantity === 1) {
    return cartArray.filter((item) => item.id !== cartItemToDecrease.id);
  }
  return cartArray.map((item) => {
    if (item.id === cartItemToDecrease.id) {
      return {
        ...item,
        quantity: item.quantity - 1,
      };
    } else {
      return item;
    }
  });
};
