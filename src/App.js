import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "c5891d4d";
  const APP_KEY = "a6a8cc744e5f1fb0719a8bff864e6060	";

  ////////////////////STATE/////////////////

  //sets a state for recipes
  const [recipes, setReceipes] = useState([]);
  //sets state for the search bar
  const [search, setSearch] = useState("");
  //sets state for the button i.e. only when click button then fetches the data for you
  const [query, setQuery] = useState("chicken");

  //useEffect is a Hook - tells React that your component needs to do something after the render. React will remember the function you passed (i.e. the effect you passed, which is the [counter]) and call it later after performing the DOM update.
  useEffect(() => {
    getRecipes();
  }, [query]);
  //getQuery only runs once we have clicked on the Search button. i.e. useEffect only runs once our query changes

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query} &app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setReceipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    //value of the input
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default App;
