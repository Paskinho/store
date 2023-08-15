 import React from 'react';
import { Counter } from '../features/counter/Counter';
import './App.css';
 import {Header} from "../features/header/Header";
 import {Catalog} from "../features/catalog/Catalog";
 import {Login} from "../features/auth/Login/Login";
 import {Route, Routes} from "react-router";
 import {Cart} from "../features/cart/Cart";

function App() {
  return (
    <div className="App">
        {/*<Login/>*/}
        {/*<Cart/>*/}
        {/*<Routes>*/}
        {/*<Route path={'/catalog'} element={<Cart/>}  />*/}
        {/*</Routes>*/}
    </div>
  );
}

export default App;