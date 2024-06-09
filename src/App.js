import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function Home() {
  return <h1>Hey</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
