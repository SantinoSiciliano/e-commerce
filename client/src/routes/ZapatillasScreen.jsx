import './Products.css'
import { ProductCard } from "./components/ProductCard/ProductCard"
import { useState } from 'react';
import productImage1 from '../assets/product1.png';
import productImage2 from '../assets/product2.png';
import productImage3 from '../assets/product3.png';
import productImage4 from '../assets/product4.png';
import productImage5 from '../assets/product5.png';
import productImage6 from '../assets/product6.png';
import productImage13 from '../assets/product13.png';
import productImage14 from '../assets/product14.png';
import productImage15 from '../assets/product15.png';
import productImage16 from '../assets/product16.png';
import productImage17 from '../assets/product17.png';
import productImage18 from '../assets/product18.png';

// Lista de productos
export const products = [
  { id: "z1", title: "Air Jordan 1 Retro High OG", brand: "Jordan", price: 450, imgSrc: productImage4 },
  { id: "z2", title: "Air Jordan 3 Retro Cement", brand: "Jordan", price: 150, imgSrc: productImage2 },
  { id: "z3", title: "Air Jordan 1 Low OG Mocha", brand: "Jordan", price: 120, imgSrc: productImage5 },
  { id: "z4", title: "Nike Dunk Low Retro", brand: "Nike", price: 110, imgSrc: productImage1 },
  { id: "z5", title: "Nike Zoom Vomero 5 SE", brand: "Nike", price: 210, imgSrc: productImage3 },
  { id: "z6", title: "Nike Air Max Plus Drift", brand: "Nike", price: 140, imgSrc: productImage6 },
  { id: "z7", title: "Air Jordan 4 Retro Green", brand: "Jordan", price: 215, imgSrc: productImage13 },
  { id: "z8", title: "Air Jordan 1 Low SE Craft", brand: "Jordan", price: 125, imgSrc: productImage14 },
  { id: "z9", title: "Air Jordan 6 Retro White/Black", brand: "Jordan", price: 200, imgSrc: productImage15 },
  { id: "z10", title: "Nike Air Max DN", brand: "Nike", price: 150, imgSrc: productImage16 },
  { id: "z11", title: "Nike Dunk Low Retro", brand: "Nike", price: 115, imgSrc: productImage17 },
  { id: "z12", title: "Nike Air Force 1", brand: "Nike", price: 220, imgSrc: productImage18 }
];

export const ZapatillasScreen = () => {
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
      <h2 className="title__products">Zapatillas</h2>
      
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
        id={product.id} // Pasa el ID aquí
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

export default ZapatillasScreen;
