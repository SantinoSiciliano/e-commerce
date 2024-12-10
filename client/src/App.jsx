import { Route, Routes } from "react-router-dom" 
import { NavBar } from "./routes/components/NavBar"
import { Footer } from "./routes/Footer"
import { PantalonesScreen } from "./routes/PantalonesScreen"
import { AboutScreen } from "./routes/AboutScreen"
import { ContactScreen } from "./routes/ContactScreen"
import { RemerasScreen } from "./routes/RemerasScreen"
import { ZapatillasScreen } from "./routes/ZapatillasScreen"
import { Carousel } from "./routes/components/Carousel/Carousel"
import { ProductsPage } from "./routes/components/ProductsPage/ProductsPage"
import { ProductDetail } from "./routes/components/ProductDetail"
import { SearchResults } from "./routes/SearchResults"
import CartScreen from './routes/CartScreen'
import { CartProvider } from './context/CartContext'
import BuyScreen from "./routes/BuyScreen";

export const App = () => {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<><Carousel /><ProductsPage /></>} />
        <Route path="/pantalones" element={<PantalonesScreen />} />
        <Route path="/remeras" element={<RemerasScreen />} />
        <Route path="/zapatillas" element={<ZapatillasScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/search/:searchTerm" element={<SearchResults />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/buy" element={<BuyScreen />} />
      </Routes>
      <Footer />
    </CartProvider>
  )
}

export default App




