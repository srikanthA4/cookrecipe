import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import RecipesList from "./components/recipe-list.component";
import EditRecipe from "./components/edit-recipe.component";
import CreateRecipe from "./components/create-recipe.component";
import CreateName from "./components/create-name.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={RecipesList} />
      <Route path="/edit/:id" component={EditRecipe} />
      <Route path="/create" component={CreateRecipe} />
      <Route path="/name" component={CreateName} />
      </div>
    </Router>
  );
}

export default App;
