import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
   return (
      <>
         <h1>
            Nie ma takiej strony
      </h1>
         <NavLink to='/'>Powrót na stronę główną</NavLink>
      </>
   );
}

export default NotFound;