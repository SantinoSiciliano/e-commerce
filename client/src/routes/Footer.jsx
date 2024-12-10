import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer"> 
      <div className="footer__sections">
        <div className="footer__section__info">
          <h3 className="footer__section__info-title">Soporte</h3>
          <ul className="footer__list">
            <li className="footer__list-item"><a href="#" className="footer__link list-hover">Preguntas frecuentes</a></li>
            <li className="footer__list-item"><a href="#" className="footer__link list-hover">Política de privacidad</a></li>
            <li className="footer__list-item"><a href="#" className="footer__link list-hover">Política de devoluciones</a></li>
            <li className="footer__list-item"><a href="#" className="footer__link list-hover">Consignación de usados</a></li>
            <li className="footer__list-item"><a href="mailto:Lucdruxinfo@gmail.com" className="footer__link list-hover">F-shopinfo@gmail.com</a></li>
            <li className="footer__list-item"><a href="tel:1173639395" className="footer__link list-hover">11 5648-6755</a></li>
          </ul>
        </div>

        <div className="footer__section__moda">
          <h3 className="footer__section__info-title">Moda sostenible</h3>
          <ul className="footer__list">
            <li className="footer__list-item"><a href="#" className="footer__link list-hover">Impacto</a></li>
            <li className="footer__list-item"><a href="#" className="footer__link list-hover">Personas</a></li>
            <li className="footer__list-item"><a href="#" className="footer__link list-hover">Planeta</a></li>
            <li className="footer__list-item"><a href="#" className="footer__link list-hover">Consignación de usados</a></li>
          </ul>
        </div>

        <div className="footer__section-team">
          <h3 className="footer__section__info-title">Nosotros</h3>
          <ul className="footer__list">
            <li className="footer__list-item"><a href="#" className="footer__link list-hover">Variedad de productos exclusivos</a></li>
            <li className="footer__list-item"><a href="#" className="footer__link list-hover">Garantía de calidad</a></li>
            <li className="footer__list-item"><a href="#" className="footer__link list-hover">Envíos a todo el país</a></li>
            <li className="footer__list-item"><a href="#" className="footer__link list-hover">Nuestro equipo</a></li>
          </ul>
        </div>

        <div className="footer__section-social">
          <h3 className="footer__section__info-title">Síguenos</h3>
          <ul className="footer__list">
            <li className="footer__list-item"><a href="#" className="footer__link list-hover">Twitter</a></li>
            <li className="footer__list-item"><a href="#" className="footer__link list-hover">Instagram</a></li>
            <li className="footer__list-item"><a href="#" className="footer__link list-hover">TikTok</a></li>
            <li className="footer__list-item"><a href="#" className="footer__link list-hover">Facebook</a></li>
          </ul>
        </div>
      </div>

      <p className="footer__copy-paragraph">© 2024 F-shop, Todos los derechos reservados</p>
    </footer>
  );
}

export default Footer;
