 import React from 'react';
import { Counter } from '../features/counter/Counter';
import './App.css';
 import {Header} from "../features/header/Header";
 import {Catalog} from "../features/catalog/Catalog";
 import {Login} from "../features/auth/Login/Login";
 import {Route, Routes} from "react-router";

function App() {
  return (
    <div className="App">
        <Header/>
        <Login/>
        <Catalog/>
        {/*<Routes>*/}
        {/*<Route path={'/catalog'} element={<Catalog/>}  />*/}
        {/*</Routes>*/}
    </div>
  );
}

export default App;