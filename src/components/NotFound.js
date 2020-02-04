import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className="not_found">
        <h1>
          Nie ma takiej strony
        </h1>
        <NavLink to='/'>Powrót na stronę główną</NavLink>
      </div>

    </>
  );
}

export default NotFound;