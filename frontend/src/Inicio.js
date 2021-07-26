import React from 'react';
import './App.css'

function Inicio() {

  
  return (
    <main>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div class="col-md-6 p-lg-0 mx-auto my-0">
          <img class="img-fluid rounded main-logo" src="img/Logo.jpg" alt="" />
          <blockquote class=" lead blockquote text-center">
            <p class="mb-0">Barceló equipa es una empresa de nueva generación, dedicada a la distribución de material escolar y de oficina en Murcia. Disponemos de personal con más de 30 años de experiencia en el sector.</p>
          </blockquote>
          <a class="btn btn-outline-secondary" href="/contacto">Contacto</a>
        </div>
      </div>
      <div class="justify-content-center overflow-hidden d-md-flex w-100 my-md-3 ps-md-3 ">
        <div class=" bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div class="my-3 py-3">
            <h1 class="display-5">Colegio</h1>
            <img class="img-fluid" src="/img/e432pencil.png" alt=""/>
            <p class="lead">"La educación es el arma más poderosa<br></br> que puedes usar para cambiar el mundo".</p>
          </div>
          
        </div>
        <div class=" bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div class="my-3 p-3">
            <h2 class="display-5">Didactico</h2>
            <img class="img-fluid" src="/img/e432games.webp" alt=""/>
            <p class="lead">"La mejor manera de aprender es jugando".</p>
          </div>
          
        </div>
      </div>
    </main>
  );
}

export default Inicio;
