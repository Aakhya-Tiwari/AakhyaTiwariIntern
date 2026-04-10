function ProductCard({ name, price, image, addToCart }) {
  return (
    <div className="card">
      
      <div className="image-box">
        <img src={image} alt={name} />
      </div>

      <div className="content">
        <h3>{name}</h3>
        <p className="price">₹{price}</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>

    </div>
  );
}

export default ProductCard;