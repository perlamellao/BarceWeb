import React from 'react';
import './App.css'

const producto = {
  nombre:'Quetals',
  rating:'5'
}



function Tienda() {

  
  return (
    <div>
      <h2>{producto.nombre}</h2>
    </div>
  );
}

export default Tienda