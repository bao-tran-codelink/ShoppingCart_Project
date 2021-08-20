import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './features/screens/Home';
import './shoppingCartApp.css'

export function ShoppingCartApp() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
        </header>
        <main>
          <Route path="/" component={Home} exact />
        </main>
        <footer>This is so hard :(</footer>
      </div>
    </BrowserRouter>
  );
}
