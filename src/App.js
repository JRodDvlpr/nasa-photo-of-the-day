import React from "react";
import "./App.css";
import CardList from "./Components/CardList";
import HeadCard from "./Components/HeadCard";


function App() {

  return (
   
    <section className="App">
      <HeadCard />

      <CardList />
    </section>

  );
}


export default App;
