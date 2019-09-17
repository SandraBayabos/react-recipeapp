import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "c5891d4d";
  const APP_KEY = "a6a8cc744e5f1fb0719a8bff864e6060	";
  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  //useEffect is a Hook - tells React that your component needs to do something after the render. React will remember the function you passed (i.e. the effect you passed) and call it later after performing the DOM update.
  useEffect(() => {
    console.log("Effect has been run");
  }, [counter]);

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
};

export default App;
