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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.passInfo(this.state);
  }
  
  render() {
    return (
      <div className="col-6 mx-auto mt-5">
        <h1>General</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" onChange={this.handleInputChange} className="form-control" required></input>
            <label>Email</label>
            <input type="email" name="email" onChange={this.handleInputChange} className="form-control" required></input>
            <label>Phone</label>
            <input type="tel" name="phone" onChange={this.handleInputChange} className="form-control" required></input>
          </div>
          <div className="form-group">
           <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>  
      </div>
    );
  };
};

export default General;