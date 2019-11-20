import React from "react";
import "./App.css";

function App() {

  const fetchPics = () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(nasa => {
        console.log(nasa);
        setNasa(nasa.data);
      })
      .catch(err => console.log("OUCH :("));
  };
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
