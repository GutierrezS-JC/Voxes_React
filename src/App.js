import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Container className="mt-5 ">
        <ItemListContainer greeting={'Hola visitante. Ahora si hay algo que ver por aca'} />
      </Container>
    </div >
  );
}

export default App;
