import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Catalog} from "./features/catalog/Catalog";
import {Header} from "./features/header/Header";


const router = createBrowserRouter([
    {
        path: '/',
        element: <div>This is my store</div>,
    },
    {
        path:'/catalog',
        element: <Catalog/>
    }
])


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <Header/>
      <App />
        <RouterProvider router={router}/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();