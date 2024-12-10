import { useCart } from "../context/CartContext";
import { Link, useNavigate } from 'react-router-dom';
import borrar from "../assets/borrar.png";

const CartScreen = () => {
  const { items, removeItem, increaseItem, decreaseItem, clearCart } = useCart();
  const navigate = useNavigate(); // Para redirigir a BuyScreen

  // Si el carrito está vacío, mostrar el mensaje correspondiente
  if (items.length === 0) {
    return (
      <div className="container mt-5">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="minimal__button">Volver a la tienda</Link>
      </div>
    );
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Manejo de redirección a BuyScreen
  const handleProceedToCheckout = () => {
    navigate("/buy", { state: { items, total } }); // Redirige a BuyScreen con los datos del carrito
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Carrito de Compras</h2>
      <div className="cart-items">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image">
              <img src={item.imgSrc} alt={item.title} />
            </div>
            <div className="cart-item-details">
              <h3 className="detail__title">{item.title}</h3>
              <p className="product-size">Talla {item.selectedSize}</p>
            </div>
            <div className="cart-item-actions">
              <p className="detail__price">${item.price.toFixed(2)}</p>
              <div className="quantity-control">
                <button onClick={() => decreaseItem(item.id)} className="quantity-button">-</button>
                <span className="quantity">{item.quantity}</span>
                <button onClick={() => increaseItem(item.id)} className="quantity-button">+</button>
              </div>
              <button onClick={() => removeItem(item.id)} className="remove-button">
                <img src={borrar} alt="Eliminar" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h4>Total: ${total.toFixed(2)}</h4>
        <div className="cart-actions">
          <button onClick={clearCart} className="minimal-button">Vaciar carrito</button>
          <button onClick={handleProceedToCheckout} className="minimal-button">Proceder al pago</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;








