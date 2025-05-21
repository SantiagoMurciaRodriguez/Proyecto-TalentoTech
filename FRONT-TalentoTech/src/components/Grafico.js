import React, { useState } from 'react';
import '../styles/Grafico.css'; 

function Grafico({ titulo, descripcion, urlGif }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleImageError = () => {
    setLoading(false);
    setError('Error al cargar la imagen.');
  };

  return (
  <div className="grafico-container">
    <h3>{titulo}</h3>
    <p className="grafico-descripcion">{descripcion}</p>

    {loading && <p>Cargando gráfico...</p>}
    {error && <p className="error-message">{error}</p>}

    <img
      src={urlGif}
      alt={titulo}
      className="grafico-imagen"
      onLoad={handleImageLoad}
      onError={handleImageError}
      style={{ display: error ? 'none' : 'block' }}
    />
  </div>
);

}


export default Grafico;