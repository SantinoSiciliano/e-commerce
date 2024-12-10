import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import { products as pantalonesProducts } from '../PantalonesScreen';
import { products as remerasProducts } from '../RemerasScreen';
import { products as zapatillasProducts } from '../ZapatillasScreen';
import { featuredProducts } from './ProductsPage/ProductsPage';
import { useCart } from '../../context/CartContext';

const MinimalAlert = ({ message, duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className="minimal-alert">
      <p>{message}</p>
    </div>
  );
};

export const ProductDetail = () => {
  const { id } = useParams();
  const allProducts = [...pantalonesProducts, ...remerasProducts, ...zapatillasProducts, ...featuredProducts];
  const product = allProducts.find(p => p.id === id);
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [showSizeError, setShowSizeError] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const sizes = [
    'M 3.5 / W 5', 'M 4 / W 5.5',
    'M 4.5 / W 6', 'M 5 / W 6.5',
    'M 5.5 / W 7', 'M 6 / W 7.5',
    'M 6.5 / W 8', 'M 7 / W 8.5',
    'M 7.5 / W 9', 'M 8 / W 9.5',
    'M 8.5 / W 10', 'M 9 / W 10.5',
    'M 9.5 / W 11', 'M 10 / W 11.5',
    'M 10.5 / W 12', 'M 11 / W 12.5',
    'M 11.5 / W 13', 'M 12 / W 13.5',
    'M 12.5 / W 14', 'M 13 / W 14.5',
    'M 14 / W 15.5', 'M 15 / W 16.5'
  ];

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowSizeError(true);
      return;
    }
    setShowSizeError(false);
    addItem({
      ...product,
      selectedSize,
    });
    setShowAlert(true);
  };

  const toggleSizeGuide = () => {
    setShowSizeGuide(!showSizeGuide);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.imgSrc} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2 className="detail__title">{product.title}</h2>
          <p>Marca: {product.brand}</p>
          <p className="detail__price">${product.price}</p>
          
          <div className="size-selector">
            <div className="size-header">
              <h3>Selecciona tu talla</h3>
              <button className="size-guide-btn" onClick={toggleSizeGuide}>
                📏 Guía de tallas
              </button>
            </div>
            
            {showSizeError && (
              <p className="size-error">Por favor, selecciona una talla</p>
            )}

            <div className="size-grid">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                  type="button"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {showSizeGuide && (
            <div className="size-guide">
              <h4>Guía de Tallas</h4>
              <table className="size-table">
                <thead>
                  <tr>
                    <th>US Men</th>
                    <th>US Women</th>
                    <th>EU</th>
                    <th>UK</th>
                    <th>CM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>3.5</td><td>5</td><td>35.5</td><td>3</td><td>22.5</td></tr>
                  <tr><td>4</td><td>5.5</td><td>36</td><td>3.5</td><td>23</td></tr>
                  <tr><td>4.5</td><td>6</td><td>36.5</td><td>4</td><td>23.5</td></tr>
                  <tr><td>5</td><td>6.5</td><td>37.5</td><td>4.5</td><td>24</td></tr>
                  <tr><td>5.5</td><td>7</td><td>38</td><td>5</td><td>24.5</td></tr>
                  <tr><td>6</td><td>7.5</td><td>38.5</td><td>5.5</td><td>25</td></tr>
                  <tr><td>6.5</td><td>8</td><td>39</td><td>6</td><td>25.5</td></tr>
                  <tr><td>7</td><td>8.5</td><td>40</td><td>6.5</td><td>26</td></tr>
                  <tr><td>7.5</td><td>9</td><td>40.5</td><td>7</td><td>26.5</td></tr>
                  <tr><td>8</td><td>9.5</td><td>41</td><td>7.5</td><td>27</td></tr>
                  <tr><td>8.5</td><td>10</td><td>42</td><td>8</td><td>27.5</td></tr>
                  <tr><td>9</td><td>10.5</td><td>42.5</td><td>8.5</td><td>28</td></tr>
                  <tr><td>9.5</td><td>11</td><td>43</td><td>9</td><td>28.5</td></tr>
                  <tr><td>10</td><td>11.5</td><td>44</td><td>9.5</td><td>29</td></tr>
                  <tr><td>10.5</td><td>12</td><td>44.5</td><td>10</td><td>29.5</td></tr>
                  <tr><td>11</td><td>12.5</td><td>45</td><td>10.5</td><td>30</td></tr>
                  <tr><td>11.5</td><td>13</td><td>45.5</td><td>11</td><td>30.5</td></tr>
                  <tr><td>12</td><td>13.5</td><td>46</td><td>11.5</td><td>31</td></tr>
                  <tr><td>12.5</td><td>14</td><td>47</td><td>12</td><td>31.5</td></tr>
                  <tr><td>13</td><td>14.5</td><td>47.5</td><td>12.5</td><td>32</td></tr>
                  <tr><td>14</td><td>15.5</td><td>48.5</td><td>13.5</td><td>33</td></tr>
                  <tr><td>15</td><td>16.5</td><td>49.5</td><td>14.5</td><td>34</td></tr>
                </tbody>
              </table>
            </div>
          )}

          <button
            className="minimal-button"
            onClick={handleAddToCart}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
      {showAlert && (
        <MinimalAlert
          message={`${product.title} (Talla ${selectedSize}) ha sido añadido al carrito`}
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
};

export default ProductDetail;








