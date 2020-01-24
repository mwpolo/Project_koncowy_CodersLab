import React from 'react';
import {
  HashRouter,
  NavLink,
  Switch,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import MakeOrder from './containers/MakeOrder';

import PrintOrder from './components/PrintOrder';
import LoadOrder from './components/LoadOrder';
import Help from './components/Help';
import NotFound from './components/NotFound';
import Main from './components/Main';

import './style/AppStyle.css'

function App() {
  return (
    <Provider store={store}>
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
              <Route path='/makeOrder' component={MakeOrder} />
              <Route path='/printOrder' component={PrintOrder} />
              <Route path='/loadOrder' component={LoadOrder} />
              <Route path='/saveOrder' component={LoadOrder} />
              <Route path='/Help' component={Help} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
