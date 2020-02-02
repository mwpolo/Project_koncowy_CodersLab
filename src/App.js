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
import LoadOrder from './containers/LoadOrder';
import SaveOrder from './components/SaveOrder';
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
              <li> <NavLink to='/makeOrder'>Tworzenie zamówienia</NavLink></li>
              <li> <NavLink to='/printOrder'>Wydruk zamówienia</NavLink></li>
              <li> <NavLink to='/loadOrder'>Wczytanie zamówienia</NavLink></li>
              <li> <NavLink to='/saveOrder'>Zapis zamówienia</NavLink></li>
              <li> <NavLink to='/help'>Pomoc</NavLink></li>
            </ul>
          </nav>
          <main>
            <Switch>
              <Route path='/' exact component={Main} />
              <Route path='/makeOrder' component={MakeOrder} />
              <Route path='/printOrder' component={PrintOrder} />
              <Route path='/loadOrder' component={LoadOrder} />
              <Route path='/saveOrder' component={SaveOrder} />
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
