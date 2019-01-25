import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Container as TagsScreen} from '../TagsScreen';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Redirect from="/" exact to="/tags" />
          <Route path="/tags" component={TagsScreen}/>
        </Switch>
      </Router>
    );
  }
}
