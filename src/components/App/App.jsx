import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Dashbord from '../Pages/Dashbord';
import Diagram from '../Pages/Diagram';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';

import './App.css';

function App() {
  return (
    <>
      <Header/>
      <div className="container">
        <Switch>
          <Route path="/" component={Dashbord} exact/>
          <Route path="/diagram" component={Diagram} exact/>
          <Redirect to="/" />
        </Switch>
      </div>
      <Modal/>
    </>
  );
}

export default App;
