








import './Products.css'
import { ProductCard } from "./components/ProductCard/ProductCard"
import { useState } from 'react';
import productImage7 from '../assets/product7.png';
import productImage8 from '../assets/product8.png';
import productImage9 from '../assets/product9.png';
import productImage19 from '../assets/product19.png';
import productImage20 from '../assets/product20.png';
import productImage21 from '../assets/product21.png';
import productImage22 from '../assets/product22.png';
import productImage23 from '../assets/product23.png';
import productImage24 from '../assets/product24.png';
import productImage25 from '../assets/product25.png';
import productImage26 from '../assets/product26.png';
import productImage27 from '../assets/product27.png';



// Lista de productos
export const products = [
  { id: "p1", title: "Nike Sportswear Club Fleece", brand: "Nike", price: 60, imgSrc: productImage7 },
  { id: "p2", title: "Nike Tech"                  , brand: "Nike", price: 115, imgSrc: productImage19 },
  { id: "p3", title: "Nike Totality"              , brand: "Nike", price: 55, imgSrc: productImage9 },
  { id: "p4", title: "Nike Club"                  , brand: "Nike", price: 85, imgSrc: productImage20 },
  { id: "p5", title: "Nike Sportswear"            , brand: "Nike", price: 65, imgSrc: productImage21 },
  { id: "p6", title: "Nike Life"                  , brand: "Nike", price: 120, imgSrc: productImage22 },
  { id: "p7", title: "Jordan Dri-FIT Sport"       , brand: "Jordan", price: 70, imgSrc: productImage8 },
  { id: "p8", title: "Jordan Sport Jam"           , brand: "Jordan", price: 100, imgSrc: productImage23 },
  { id: "p9", title: "Jordan"                     , brand: "Jordan", price: 90, imgSrc: productImage24 },
  { id: "p10", title: "Jordan Brooklyn Fleece"    , brand: "Jordan", price: 82, imgSrc: productImage25 },
  { id: "p11", title: "Air Jordan"                , brand: "Jordan", price: 200, imgSrc: productImage26 },
  { id: "p12", title: "Jordan Dri-Fit Sport"      , brand: "Jordan", price: 68, imgSrc: productImage27 }
];


export const PantalonesScreen = () => {
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
      <h2 className="title__products">Pantalones</h2>
      
      {/* Botones de filtro */}
      <div className="filter-buttons">
        <button className="filter-btn" onClick={() => setFilteredProducts(products)}>Todos</button>
        <button className="filter-btn" onClick={() => filterByBrand('Nike')}>Nike</button>
        <button className="filter-btn" onClick={() => filterByBrand('Jordan')}>Jordan</button>
        <button className="filter-btn" onClick={() => sortByPrice('asc')}>Precio: Bajo a Alto</button>
        <button className="filter-btn" onClick={() => sortByPrice('desc')}>Precio: Alto a Bajo</button>
      </div>
      
      {/* Listado de productos filtrados */}
      <div className="item__list">
        {filteredProducts.map(product => (
          <div className="item__zap" key={product.id}>
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

export default PantalonesScreen;
