import Gatorade from './Gatorade';
import Pizza from './Pizza';
import Bagel from './Bagel';
import Home from './Home';
import NavBar from './NavBar';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/gatorade">
          <Gatorade />
        </Route>
        <Route exact path="/pizza">
          <Pizza />
        </Route>
        <Route exact path="/bagel">
          <Bagel />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
