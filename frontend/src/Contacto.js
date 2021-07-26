import React from 'react';
import './App.css'

function Contacto() {

  
  return (
    <div className="">
      <div className="contacto-a justify-content-center overflow-hidden d-md-flex w-100 my-md-3 ps-md-3">
        <div className="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <img alt="" src="https://img.icons8.com/ios-glyphs/90/000000/worldwide-location.png"/>
          <h6>Dirección - Calle Sociedad de Cazadores, 3, bajo, 30151 Murcia</h6>
        </div>

        <div className="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <img alt="" src="https://img.icons8.com/ios-glyphs/90/000000/phone--v1.png"/>
          <h6>+34629375435</h6>
        </div>

        <div className="me-md-3 pt-3 px-3 pt-md-5 px-md-5  pb-6 text-center text-white overflow-hidden">
          <img alt="" src="https://img.icons8.com/pastel-glyph/90/000000/email--v1.png"/>
          <h6>Correo - <a class="link" href="mailto:info@barceloequipa.com">info@barceloequipa.com</a></h6>
          <h6><i class="fab fa-instagram"></i> - <a class="link" href="https://www.instagram.com/barcelo_equipa/?hl=es">@barcelo_equipa</a></h6>
          <h6><i class="fab fa-facebook-square"></i> - Barceló Equipa</h6>
          <br/>
        </div>
        
        
        
      </div>


      <div>

      </div>
      <div className=" position-relative p-3 p-md-5 m-md-3 text-center">
        <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1573.1967499731402!2d-1.132518917785311!3d37.94459703778684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6379d653bbcb65%3A0x2de712aac318d3e7!2sBarcel%C3%B3%20Equipa!5e0!3m2!1ses!2ses!4v1627319582514!5m2!1ses!2ses" className="map" allowfullscreen="" loading="lazy"></iframe>
      </div>


    </div>
  );
}

export default Contacto;