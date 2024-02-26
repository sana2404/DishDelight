import React from 'react';

function ShowItemComponent({ items, filterItemFunction, addItemToCartFunction }) {
	const filteredItems = typeof filterItemFunction === 'function'
    ? filterItemFunction(items)
    : items;

  return (
    <div className="product-list">
      {filteredItems.length === 0 ? (
        <p className="no-results">Sorry, No matching item found.</p>
      ) : (
        filteredItems.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ₹{product.price}</p>
            <button
              className="add-to-cart-button"
              onClick={() => addItemToCartFunction(product)}
            >
              Add to Shopping Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ShowItemComponent;
