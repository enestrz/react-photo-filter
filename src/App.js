import './App.css';
import Navbar from "./component/Navbar"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import HomePage from './Pages/HomePage';
import PhotoFilterPage from './Pages/PhotoFilterPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/photo-filter" component={PhotoFilterPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
