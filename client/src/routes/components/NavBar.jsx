import { useState } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom"
import './NavBar.css';
import searchImg from "../../assets/search.png"
import { useCart } from '../../context/CartContext'
import carrito from "../../assets/carrito.png"

export const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { totalItems } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand" >F-shop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </a>
              <ul className="dropdown-menu">
                <li><NavLink to='/pantalones'className="dropdown-item" >Pantalones</NavLink></li>
                <li><NavLink to='/remeras'className="dropdown-item" >Remeras</NavLink></li>
                <li><NavLink to='/zapatillas'className="dropdown-item" >Zapatillas</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to='/about'className="nav-link active" >Nosotros</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/contact' className="nav-link active" >Contacto</NavLink>
            </li>
          </ul>
          <div className="d-flex align-items-center ms-auto">
            <form className="search__cont" role="search" onSubmit={handleSearch}>
              <input 
                className="search__border" 
                type="search" 
                placeholder="Buscar"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="lupa" type="submit">
                <img src={searchImg} alt="Search" width="18" height="18" />
              </button>
            </form>
            <Link to="/cart" className="ms-3 position-relative cart-icon">
              <img src={carrito} alt="Cart" width="24" height="24" />
              {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}




