import './ProductsPage.css';
import ProductCard from '../ProductCard/ProductCard';
import productImage1 from '../../../assets/product1.png';
import productImage2 from '../../../assets/product2.png';
import productImage3 from '../../../assets/product3.png';
import productImage4 from '../../../assets/product4.png';
import productImage5 from '../../../assets/product5.png';
import productImage6 from '../../../assets/product6.png';
import productImage7 from '../../../assets/product7.png';
import productImage8 from '../../../assets/product8.png';
import productImage9 from '../../../assets/product9.png';
import productImage10 from '../../../assets/product10.png';
import productImage11 from '../../../assets/product11.png';
import productImage12 from '../../../assets/product12.png';

export const featuredProducts = [
  { id: "f1", title: "Air Jordan 1 Retro High OG", price: 450, imgSrc: productImage4, brand: "Jordan" },
  { id: "f2", title: "Air Jordan 3 Retro Cement", price: 150, imgSrc: productImage2, brand: "Jordan" },
  { id: "f3", title: "Air Jordan 1 Low OG Mocha", price: 120, imgSrc: productImage5, brand: "Jordan" },
  { id: "f4", title: "Nike Dunk Low Retro", price: 110, imgSrc: productImage1, brand: "Nike" },
  { id: "f5", title: "Nike Zoom Vomero 5 SE", price: 210, imgSrc: productImage3, brand: "Nike" },
  { id: "f6", title: "Nike Air Max Plus Drift", price: 140, imgSrc: productImage6, brand: "Nike" },
  { id: "f7", title: "Nike Sportswear Club Fleece", price: 60, imgSrc: productImage7, brand: "Nike" },
  { id: "f8", title: "Jordan Dri-FIT Sport", price: 70, imgSrc: productImage8, brand: "Jordan" },
  { id: "f9", title: "Nike Totality", price: 55, imgSrc: productImage9, brand: "Nike" },
  { id: "f10", title: "NOCTA", price: 45, imgSrc: productImage10, brand: "Nike" },
  { id: "f11", title: "Nike Primary", price: 55, imgSrc: productImage11, brand: "Nike" },
  { id: "f12", title: "Air Jordan Wordmark", price: 60, imgSrc: productImage12, brand: "Jordan" },
];

export const ProductsPage = () => { 
  return (
    <div> 
      <h2 className="title__cards">Productos Destacados</h2>
      <div className="item__list">
        {featuredProducts.map((product) => (
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
};

export default ProductsPage;
