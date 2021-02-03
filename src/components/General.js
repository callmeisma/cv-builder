import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  render() {
    if (this.props.editMode) {
      return (
        <div>
          <h1>General</h1>
          <div>
            <label>Name</label>
            <input type="text" name="name" onChange={this.handleInputChange} value={this.state.name}></input>
            <label>Email</label>
            <input type="email" name="email" onChange={this.handleInputChange} value={this.state.email}></input>
            <label>Phone</label>
            <input type="tel" name="phone" onChange={this.handleInputChange} value={this.state.phone}></input>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>General</h1>
          <div>
            <p>Name: {this.state.name}</p>
            <p>Email: {this.state.email}</p>
            <p>Phone: {this.state.phone}</p>
          </div>
        </div>
      )
    }
  };
};

export default General;