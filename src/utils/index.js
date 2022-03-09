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
