import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import ProfileSearch from 'pages/Home/ProfileSearch';
import ProfileResult from 'pages/Home/ProfileResult';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/profilesearch">
        <ProfileSearch />
      </Route>
      <Route path="/profileresult">
        <ProfileResult />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
