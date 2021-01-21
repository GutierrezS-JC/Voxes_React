import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
//import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Container } from 'react-bootstrap';
import { Footer } from './components/Footer/Footer';
import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App ">
      <NavBar />
      <Container className="mt-5">
        {/*   <ItemListContainer greeting={'Hola visitante. Ahora si hay algo que ver por aca'} /> */}
        <ItemDetailContainer />
      </Container>
      <Footer className="fixed-bottom" />
    </div >
  );
}

export default App;
