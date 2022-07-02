import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Cookbook</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Recipes</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Recipe details</Link>
          </li>
          <li className="navbar-item">
          <Link to="/name" className="nav-link">Create recipe</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}