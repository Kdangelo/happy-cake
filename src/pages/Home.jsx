import React from "react";

const Home = () => {
  const backgroundImage = 'img/cake.png'
  return(
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-danger m-3">Bienvenido a Happy Cake</h1>
      <h4 className="m-3">El lugar de los pasteles felices</h4>
      <div className="m-3">
        <img className="img-fluid" src={backgroundImage} alt="pastel de cumpleaños" />
      </div>
    </div>
  )
}

export default Home;