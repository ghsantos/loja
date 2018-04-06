export function getIndex(products, id) {
  return products.findIndex((product) => (
    product.id === id
  ));
}
