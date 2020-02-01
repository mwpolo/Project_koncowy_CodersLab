import React from 'react';
import { NavLink } from 'react-router-dom'
const Main = () => {
  return (
    <div className="components_background">
      <h1>
        Witaj,
      </h1>
      <h2>Jesteś na stronie głównej aplikacji służącej do tworzenia zamówień produktów ozdób ogrodowych.

        </h2>
      <h2>
        Wybierz co chcesz zrobić klikając dostepne opcje menu u góry ekranu.
        </h2>
      <h2>Jeśli jesteś tu po raz pierwszy niezbędne wyjaśnienia i informacje znajdziesz
        <NavLink to='/help'> w tym miejscu </NavLink>
        lub klikając w dowolnej chwili przycisk POMOC u góry ekranu.</h2>
    </div>

  );
}

export default Main;