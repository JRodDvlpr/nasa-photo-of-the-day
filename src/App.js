import React from "react";
import "./App.css";
import CardList from "./Components/CardList";
import styled from "styled-components";



const Container = styled.div`
    max-width: 650px;
    text-align: center;

`;

function App() {

  return (
    <div className="App">
      <Container>
      <CardList />
      </Container>
    </div>
  );
}

export default App;
