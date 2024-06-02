import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar'

const Home = () => <div className="p-4">Home Page</div>;
const About = () => <div className="p-4">About Page</div>;
const Services = () => <div className="p-4">Services Page</div>;
const Contact = () => <div className="p-4">Contact Page</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
