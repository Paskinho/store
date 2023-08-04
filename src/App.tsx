 import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
 import {Header} from "./features/header/Header";
 import {Catalog} from "./features/catalog/catalog";
 import {Login} from "./features/login/login";

function App() {
  return (
    <div className="App">
      <Header/>
        <Login/>
        <Catalog/>
    </div>
  );
}

export default App;