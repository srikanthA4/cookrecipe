import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditRecipe extends Component {
  constructor(props) {
    super(props);

    this.onChangeRecipename = this.onChangeRecipename.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      recipename: '',
      description: '',
      duration: 0,
      date: new Date(),
      names: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/recipes/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          recipename: response.data.recipename,
          description: response.data.description,
          duration: response.data.duration,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/names/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            names: response.data.map(name => name.namename),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeRecipename(e) {
    this.setState({
      recipename: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const recipe = {
      recipename: this.state.recipename,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(recipe);

    axios.post('http://localhost:5000/recipes/update/' + this.props.match.params.id, recipe)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Recipe: </label>
          <select ref="recipeInput"
              required
              className="form-control"
              value={this.state.recipename}
              onChange={this.onChangeRecipename}>
              {
                this.state.names.map(function(name) {
                  return <option 
                    key={name}
                    value={name}>{name}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}