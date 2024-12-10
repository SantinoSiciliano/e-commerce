import './ProductCard.css'
import { Link } from "react-router-dom";

export const ProductCard = ({ id, title, text , imgSrc }) => {
  return (
    <div className="card" style={{ width: '27rem' }}>
      <img src={imgSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="price-text">{text}</p>
        <Link to={`/producto/${id}`} className="minimal-btn">Ver producto</Link>
      </div>
    </div>
  );
}

export default ProductCard;