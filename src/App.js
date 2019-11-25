import React from "react";
import "./App.css";
import CardList from "./Components/CardList";
import HeadCard from "./Components/HeadCard";
import Footer from "./Components/Footer";

function App() {

  return (
   
    <section className="App">
      <HeadCard />
      <CardList />
      <Footer />
    </section>

  );
}


export default App;
