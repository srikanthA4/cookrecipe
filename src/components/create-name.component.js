import React, { Component } from 'react';
import axios from 'axios';

export default class CreateName extends Component {
  constructor(props) {
    super(props);

    this.onChangeRecipename = this.onChangeRecipename.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      recipename: ''
    }
  }

  onChangeRecipename(e) {
    this.setState({
      recipename: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const name = {
      recipename: this.state.recipename
    }

    console.log(name);

    axios.post('http://localhost:5000/names/add', name)
      .then(res => console.log(res.data));

    this.setState({
      recipename: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create new recipe</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.recipename}
                onChange={this.onChangeRecipename}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}