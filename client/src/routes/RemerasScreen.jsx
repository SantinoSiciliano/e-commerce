import './Products.css'
import { ProductCard } from "./components/ProductCard/ProductCard"
import { useState } from 'react';
import productImage10 from '../assets/product10.png';
import productImage11 from '../assets/product11.png';
import productImage28 from '../assets/product28.png';
import productImage31 from '../assets/product31.png';
import productImage30 from '../assets/product30.png';
import productImage32 from '../assets/product32.png';
import productImage29 from '../assets/product29.png';
import productImage33 from '../assets/product33.png';
import productImage34 from '../assets/product34.png';
import productImage35 from '../assets/product35.png';
import productImage36 from '../assets/Product36.png';
import productImage37 from '../assets/Product37.png';

export const products = [
  { id: "r1", title: "NOCTA"                       , brand: "Nike", price: 45, imgSrc: productImage10 },
  { id: "r2", title: "Nike Primary"                , brand: "Nike", price: 55, imgSrc: productImage11 },
  { id: "r3", title: "Nike AGC"                    , brand: "Nike", price: 45, imgSrc: productImage28 },
  { id: "r4", title: "Nike Club"                   , brand: "Nike", price: 70, imgSrc: productImage30 },
  { id: "r5", title: "Nike Premium Essentials"     , brand: "Nike", price: 50, imgSrc: productImage31 },
  { id: "r6", title: "Nike Sportswear"             , brand: "Nike", price: 65, imgSrc: productImage32 },
  { id: "r7", title: "Jordan Air"                  , brand: "Jordan", price: 35, imgSrc: productImage33 },
  { id: "r8", title: "Jordan Flight Essentials 85" , brand: "Jordan", price: 50, imgSrc: productImage34 },
  { id: "r9", title: "Jordan Flight Essentials"    , brand: "Jordan", price: 38, imgSrc: productImage35 },
  { id: "r10", title: "Jordan Jumpman"             , brand: "Jordan", price: 32, imgSrc: productImage36 },
  { id: "r11", title: "Jordan Flight Essentials"   , brand: "Jordan", price: 42, imgSrc: productImage37 },
  { id: "r12", title: "Jordan Flight MVP"          , brand: "Jordan", price: 38, imgSrc: productImage29 },
];


export const RemerasScreen = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Funciones de filtrado
  const filterByBrand = (brand) => {
    const filtered = products.filter(product => product.brand === brand);
    setFilteredProducts(filtered);
  };

  const sortByPrice = (order) => {
    const sorted = [...filteredProducts].sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
    setFilteredProducts(sorted);
  };

  return (
    <div>
      <h2 className="title__products">Remeras</h2>
      
      {/* Botones de filtro */}
      <div className="filter-buttons">
        <button className="filter-btn" onClick={() => setFilteredProducts(products)}>Todos</button>
        <button className="filter-btn" onClick={() => filterByBrand('Nike')}>Nike</button>
        <button className="filter-btn" onClick={() => filterByBrand('Jordan')}>Jordan</button>
        <button className="filter-btn" onClick={() => sortByPrice('asc')}>Precio: Bajo a Alto</button>
        <button className="filter-btn" onClick={() => sortByPrice('desc')}>Precio: Alto a Bajo</button>
      </div>
      
      {/* Listado de productos filtrados */}
      <div className="item__listpro">
        {filteredProducts.map(product => (
          <div className="item__prod" key={product.id}>
            <ProductCard 
              id={product.id}
              title={product.title}
              text={`$${product.price}`}
              imgSrc={product.imgSrc}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RemerasScreen;