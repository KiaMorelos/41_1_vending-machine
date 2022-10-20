import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import VendingMachine from './VendingMachine';
import Candy from './Candy';
import Chips from './Chips';
import Soda from './Soda';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/">
        <VendingMachine/>
      </Route>
      <Route exact path="/candy">
        <Candy/>
      </Route>
      <Route exact path="/chips">
        <Chips/>
      </Route>
      <Route exact path="/soda">
        <Soda/>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
