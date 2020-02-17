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
import SummaryOrder from './components/SummaryOrder';

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
              <li> <NavLink to='/makeOrder'>Utwórz </NavLink></li>
              <li> <NavLink to='/summaryOrder'>Podsumuj</NavLink></li>
              <li> <NavLink to='/printOrder'>Drukuj </NavLink></li>
              <li> <NavLink to='/loadOrder'>Wczytaj</NavLink></li>
              <li> <NavLink to='/saveOrder'>Zapisz</NavLink></li>
              <li> <NavLink to='/help'>Pomoc</NavLink></li>
            </ul>
          </nav>
          <main>
            <Switch>
              <Route path='/' exact component={Main} />
              <Route path='/makeOrder' component={MakeOrder} />
              <Route path='/summaryOrder' component={SummaryOrder} />
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
