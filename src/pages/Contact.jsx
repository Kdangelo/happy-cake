import React from "react";

const Contact = () => {

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1 className="m-3">
        Cuentanos, ¿en que te podemos ayudar?
      </h1>
      <form className="d-flex flex-column justify-content-center">
        <div class="m-3">
          <label for="inputEmail" class="form-label">
            Correo:
          </label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            placeholder="nombre@ejemplo.com"
          />
        </div>
        <div class="m-3">
          <label for="description" class="form-label">
            Descripción
          </label>
          <textarea
            class="form-control"
            id="description"
          />
        </div>
        <button type="button" class="btn btn-danger">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;