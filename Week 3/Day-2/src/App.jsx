import { useState } from "react";
import ProductCard from "./productcard.jsx";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 79999,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 69999,
    image:
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5",
  },
  {
    id: 3,
    name: "OnePlus 11",
    price: 59999,
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505",
  },
];

  return (
    <div className="app">
      <h1>🛍️ My Store</h1>
      <h2>🛒 Cart Items: {cartCount}</h2>

      <div className="product-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            addToCart={() => setCartCount(cartCount + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;