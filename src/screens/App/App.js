import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Container as TagsScreen} from 'src/screens/TagsScreen';
import { Component as RootLayout } from 'src/components/RootLayout';
import { Component as Tag } from 'src/components/Tag';

class App extends React.Component {

  render() {
    return (
      <Router>
        <RootLayout>
          <Switch>
            <Redirect from="/" exact to="/tags" />
            <Route path="/tags" component={ TagsScreen } />
            <Route path="/tag/:tagId?" component={ Tag } />
          </Switch>
        </RootLayout>
      </Router>
    );
  }
}

export default App;
