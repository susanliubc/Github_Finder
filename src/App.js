import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
  render() {
    const name = 'John';
    const foo = () => 'Bar';
    const loading = true;
    const showName = true;
    return (
      <Fragment>
        {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>}
        <Navbar title='Github Finder' icon='fab fa-github m' />
        <div className='container'>
          <Users />
        </div>
      </Fragment>
    );
  }
}

export default App;
