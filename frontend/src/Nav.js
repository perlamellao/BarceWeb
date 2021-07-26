import React from 'react';
import './App.css'


function Nav() {
  
  return (
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="/"><img src="MainLogo.png" alt="" width="30" height="24" class="logo d-inline-block align-text-top"/>Barceló Equipa</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link" href="/tienda">Tienda Online</a>
                    <a class="nav-link" href="/contacto">Contacto</a>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Nav;
