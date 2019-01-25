import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Component as TagsScreen} from '../TagsScreen';
import { Component as RootLayout } from 'src/components/RootLayout';

class App extends React.Component {

  render() {
    return (
      <Router>
        <RootLayout>
          <Switch>
            <Redirect from="/" exact to="/tags" />
            <Route path="/tags" component={TagsScreen}/>
          </Switch>
        </RootLayout>
      </Router>
    );
  }
}

export default App;
