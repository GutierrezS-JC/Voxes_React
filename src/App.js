import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Footer } from './components/Footer/Footer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Banner } from './components/Banner/Banner';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App ">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Banner />
            <ItemListContainer />
          </Route>
          <Route path="/category/:categoryId">
            <ItemListContainer />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
        <Footer className="fixed-bottom" />
      </div >
    </BrowserRouter>
  );
}

export default App;
