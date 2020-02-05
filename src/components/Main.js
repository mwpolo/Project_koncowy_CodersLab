import React from 'react';
import { NavLink } from 'react-router-dom'
const Main = () => {
  return (
    <div className="components_background">

      <h1>
        Witaj,
      </h1>
      <br />
      <h2>
        Jesteś na stronie głównej aplikacji służącej do tworzenia zamówień  produktów ozdób ogrodowych.
      </h2>
      <br />
      <h2>
        Wybierz co chcesz zrobić klikając dostepne opcje menu u góry ekranu.
      </h2>
      <br />
      <h2>
        Jeśli jesteś tu po raz pierwszy niezbędne wyjaśnienia i informacje znajdziesz
        <NavLink to='/help'> w tym miejscu </NavLink>
        lub klikając w dowolnej chwili przycisk POMOC u góry ekranu.</h2>

      <div className="products_main_page">
        <img src="../normal_spinners/1525 Kwiat GB.jpg" alt="Kwiat GB" />
        <img src="../normal_spinners/TWC120-4M Motyl2.JPG" alt="Motyl" />
        <img src="../normal_spinners/ED0035 Choinka.jpg" alt="Choinka" />
        <img src="../normal_spinners/TWC250-7M Koliber.JPG" alt="Koliber" />
      </div>
    </div>

  );
}

export default Main;