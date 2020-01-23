import React from 'react';
import {
  HashRouter,
  NavLink,
  Switch,
  Route
} from 'react-router-dom';
import MakeOrder from './components/MakeOrder';
import MakeBetweenOrder from './components/MakeBetweenOrder';
import PrintOrder from './components/PrintOrder';
import LoadOrder from './components/LoadOrder';
import Help from './components/Help';
import NotFound from './components/NotFound';
import Main from './components/Main';

import './style/AppStyle.css'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <nav className='main_nav'>
          <ul>
            <li> <NavLink to='/makeOrder'>Utwórz zamówienie</NavLink></li>
            <li> <NavLink to='/printOrder'>Drukuj zamówienie</NavLink></li>
            <li> <NavLink to='/loadOrder'>Wczytaj zamówienie</NavLink></li>
            <li> <NavLink to='/saveOrder'>Zapisz zamówienie</NavLink></li>
            <li> <NavLink to='/help'>Pomoc</NavLink></li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/makeOrder' component={MakeBetweenOrder} />
            <Route path='/printOrder' component={PrintOrder} />
            <Route path='/loadOrder' component={LoadOrder} />
            <Route path='/saveOrder' component={LoadOrder} />
            <Route path='/Help' component={Help} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
