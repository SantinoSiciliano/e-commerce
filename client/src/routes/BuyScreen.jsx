import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./BuyScreen.css";

const BuyScreen = () => {
  const { items } = useCart();
  const navigate = useNavigate();

  const [personalData, setPersonalData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    dni: "",
    phone: "",
  });

  const [address, setAddress] = useState({
    street: "",
    number: "",
    zipCode: "",
    floor: "",
    additionalInfo: "",
    receiver: "",
  });

  const [deliveryOption, setDeliveryOption] = useState("home");
  const [alert, setAlert] = useState({ message: "", type: "" }); // Estado para la alerta

  const handleChange = (e, section) => {
    const { name, value } = e.target;
    if (section === "personal") {
      setPersonalData((prev) => ({ ...prev, [name]: value }));
    } else if (section === "address") {
      setAddress((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePay = async () => {
    try {
      if (!personalData.email || !personalData.firstName) {
        setAlert({ message: "Por favor, completa los campos obligatorios.", type: "error" });
        return;
      }

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/create-preference`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items,
          personalData,
          address,
          deliveryOption,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al crear la preferencia de pago.");
      }

      const { id } = await response.json();

      // Integración con MercadoPago
      const mp = new window.MercadoPago(import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY, {
        locale: "es-AR",
      });

      mp.checkout({
        preference: {
          id,
        },
        autoOpen: true, // Abre automáticamente el checkout
      });
    } catch (error) {
      console.error("Error al procesar el pago:", error);
      setAlert({ message: "Hubo un error al procesar el pago. Por favor, intenta nuevamente.", type: "error" });
    }
  };

  return (
    <div className="buy-container">
      {/* Alerta estilizada */}
      {alert.message && (
        <div className={`alert ${alert.type}`}>
          {alert.message}
        </div>
      )}

      <h2 className="buy-title">Finalizar Compra</h2>

      {/* Datos Personales */}
      <div className="form-section">
        <h3 className="form-heading">Datos Personales</h3>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={personalData.email}
            onChange={(e) => handleChange(e, "personal")}
            required
          />
        </div>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="firstName"
            value={personalData.firstName}
            onChange={(e) => handleChange(e, "personal")}
            required
          />
        </div>
        <div className="form-group">
          <label>Apellido:</label>
          <input
            type="text"
            name="lastName"
            value={personalData.lastName}
            onChange={(e) => handleChange(e, "personal")}
            required
          />
        </div>
        <div className="form-group">
          <label>DNI:</label>
          <input
            type="text"
            name="dni"
            value={personalData.dni}
            onChange={(e) => handleChange(e, "personal")}
            required
          />
        </div>
        <div className="form-group">
          <label>Teléfono:</label>
          <input
            type="text"
            name="phone"
            value={personalData.phone}
            onChange={(e) => handleChange(e, "personal")}
            required
          />
        </div>
      </div>

      {/* Opción de Envío */}
      <div className="form-section">
        <h3 className="form-heading">Envío</h3>
        <div className="delivery-options">
          <button
            className={`delivery-btn ${deliveryOption === "home" ? "active" : ""}`}
            onClick={() => setDeliveryOption("home")}
          >
            <span>🚚</span> Envío a domicilio
          </button>
          <button
            className={`delivery-btn ${deliveryOption === "pickup" ? "active" : ""}`}
            onClick={() => setDeliveryOption("pickup")}
          >
            <span>📍</span> Retiro en punto
          </button>
        </div>

        {deliveryOption === "home" && (
          <div className="form-group">
            <div className="form-group">
              <label>Calle:</label>
              <input
                type="text"
                name="street"
                value={address.street}
                onChange={(e) => handleChange(e, "address")}
                required
              />
            </div>
            <div className="form-group">
              <label>Número:</label>
              <input
                type="text"
                name="number"
                value={address.number}
                onChange={(e) => handleChange(e, "address")}
              />
            </div>
            <div className="form-group">
              <label>Código Postal:</label>
              <input
                type="text"
                name="zipCode"
                value={address.zipCode}
                onChange={(e) => handleChange(e, "address")}
              />
            </div>
            <div className="form-group">
              <label>Piso/Departamento (opcional):</label>
              <input
                type="text"
                name="floor"
                value={address.floor}
                onChange={(e) => handleChange(e, "address")}
              />
            </div>
            <div className="form-group">
              <label>Información adicional:</label>
              <textarea
                name="additionalInfo"
                value={address.additionalInfo}
                onChange={(e) => handleChange(e, "address")}
              ></textarea>
            </div>
            <div className="form-group">
              <label>¿Quién recibe el pedido?:</label>
              <input
                type="text"
                name="receiver"
                value={address.receiver}
                onChange={(e) => handleChange(e, "address")}
                required
              />
            </div>
          </div>
        )}

        {/* Retiro en punto */}
        {deliveryOption === "pickup" && (
          <iframe
            className="map-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821.4878044866186!2d-58.45033003033808!3d-34.55479049379795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb432f759f4cf%3A0xc727b0c9824c893d!2sAv.%20Olaz%C3%A1bal%201515%2C%20C1428DGG%20CABA!5e0!3m2!1ses!2sar!4v1684987300590!5m2!1ses!2sar"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        )}
      </div>

      {/* Botón de pago */}
      <div className="buttons-container">
        <button onClick={handlePay} className="buy-btn">
          Pagar
        </button>
      </div>
    </div>
  );
};

export default BuyScreen;










