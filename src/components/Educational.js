import React, { Component } from "react";

class Educational extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: "",
      title: "",
      startEduDate: "",
      endEduDate: "",
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
        <h1>Educational</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>School</label>
            <input type="text" name="school" onChange={this.handleInputChange} className="form-control" required></input>
            <label>Title of Study</label>
            <input type="text" name="title" onChange={this.handleInputChange} className="form-control" required></input>
            <label>Date Started</label>
            <input type="date" name="startEduDate" onChange={this.handleInputChange} className="form-control" required></input>
            <label>Date Completed</label>
            <input type="date" name="endEduDate" onChange={this.handleInputChange} className="form-control" required></input>
          </div>
          <div className="form-group">
           <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>  
      </div>
    );
  };
};

export default Educational;