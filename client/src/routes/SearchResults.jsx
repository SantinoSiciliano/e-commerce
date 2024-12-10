import { useEffect, useState } from 'react';
import './SearchResult.css';
import { useParams } from 'react-router-dom';
import ProductCard from '../routes/components/ProductCard/ProductCard';
import { products as pantalonesProducts } from './PantalonesScreen';
import { products as remerasProducts } from './RemerasScreen';
import { products as zapatillasProducts } from './ZapatillasScreen';
import { featuredProducts } from './components/ProductsPage/ProductsPage';

const removeDuplicates = (array) => {
    const seen = new Set();
    return array.filter(item => {
      const key = `${item.title}-${item.price}-${item.brand}`;
      const duplicate = seen.has(key);
      seen.add(key);
      return !duplicate;
    });
  };
  
  // Combinar todos los productos y eliminar duplicados
  const allProducts = removeDuplicates([
    ...pantalonesProducts, 
    ...remerasProducts, 
    ...zapatillasProducts, 
    ...featuredProducts
  ]);

export const SearchResults = () => {
  const { searchTerm } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const filteredProducts = allProducts.filter(product => 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredProducts);
  }, [searchTerm]);

  return (
    <div className="container mt-4">
      <h2 className='yes__search'>Resultados de búsqueda para: {searchTerm}</h2>
      {results.length === 0 ? (
        <p className='no__search'>No se encontraron productos que coincidan con su búsqueda.</p>
      ) : (
        <div className="row">
          {results.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <ProductCard
                id={product.id}
                title={product.title}
                text={`$${product.price}`}
                imgSrc={product.imgSrc}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;