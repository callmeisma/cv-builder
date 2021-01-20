import React, { Component } from "react";

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      position: "",
      tasks: "",
      startWorkDate: "",
      endWorkDate: "",
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
        <h1>Work</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Company Name</label>
            <input type="text" name="companyName" onChange={this.handleInputChange} className="form-control" required></input>
            <label>Position</label>
            <input type="text" name="position" onChange={this.handleInputChange} className="form-control" required></input>
            <label>Work Done</label>
            <input type="text" name="tasks" onChange={this.handleInputChange} className="form-control" required></input>
            <label>Stard Date of Employment</label>
            <input type="date" name="startWorkDate" onChange={this.handleInputChange} className="form-control" required></input>
            <label>End Date of Employment</label>
            <input type="date" name="endWorkDate" onChange={this.handleInputChange} className="form-control" required></input>
          </div>
          <div className="form-group">
           <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>  
      </div>
    );
  };
};

export default Work;