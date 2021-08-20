import React from 'react';
import { Cart } from '../cart/cart';
import Products from '../products/products';

export default function Home() {
  return (
    <div>
      <div className="content">
        <div className="main">
          <Products addToCart={() => {}} products={[{
              _id: "dummy",
              name: "Dummy Item",
              description: "Lorem ipsum dolor sit amet",
              image: "",
              price: 10
          }]} />
        </div>
        <div className="sidebar">
          <Cart />
        </div>
      </div>
    </div>
  );
}