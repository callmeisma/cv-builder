import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "First Last",
      email: "email@email.com",
      phone: "123.456.7890",
    };
  }

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    if (this.props.editMode) {
      return (
        <div className="flex-col form-cont">
          <h5>General</h5>
          <div className="flex-row form-cont">
            <div className="flex-col">
              <label>Name</label>
              <input
                type="text"
                name="name"
                onChange={this.handleInputChange}
                value={this.state.name}
              ></input>
            </div>
            <div className="flex-col">
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={this.handleInputChange}
                value={this.state.email}
              ></input>
            </div>
            <div className="flex-col">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                onChange={this.handleInputChange}
                value={this.state.phone}
              ></input>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex-col form-cont">
          <h1 className="name">{this.state.name}</h1>
          <div className="flex-row">
            <p>e: {this.state.email}</p>
            <p>t: {this.state.phone}</p>
          </div>
        </div>
      );
    }
  }
}

export default General;
