import { useState } from 'react';

function Card({ titulo, descripcion, imagen, precio = 0, children }) {
  return (
    <div className="card">
      {imagen && <img src={imagen} alt={titulo} className="card-imagen" />}
      <h3 className="card-titulo">{titulo}</h3>
      <p className="card-descripcion">{descripcion}</p>
      <p className="card-precio">${precio.toLocaleString()}</p>
      <div className="card-children">
        {children}
      </div>
    </div>
  );
}

export default Card;