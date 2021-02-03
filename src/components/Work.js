import React, { Component } from "react";
import uniqid from "uniqid";

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allWork: [{
        companyName: "",
        position: "",
        tasks: "",
        startWorkDate: "",
        endWorkDate: "",
      }]
    };
  }

  handleInputChange = (e, index) => {
    e.preventDefault();
    const list = [...this.state.allWork];
    list[index][e.target.name] = e.target.value
    this.setState({
      allWork: list
    })
  }

  handleAddClick = () => {
    this.setState({
      allWork: [...this.state.allWork, {
        companyName: "",
        position: "",
        tasks: "",
        startWorkDate: "",
        endWorkDate: "",
      }]
    })
  }

  handleRemoveClick = (index) => {
    const list = [...this.state.allWork]
    list.splice(index, 1);
    this.setState({
      allWork: list
    })
  }
  
  render() {
    if (this.props.editMode) {
      return (
        <div>
          <h1>Work</h1>
          {this.state.allWork.map((value,index) => {
            return (
              <div key={uniqid()}>
                <label>Company Name</label>
                <input type="text" name="companyName" onChange={e => this.handleInputChange(e, index)} value={value.companyName}></input>
                <label>Position</label>
                <input type="text" name="position" onChange={e => this.handleInputChange(e, index)} value={value.position}></input>
                <label>Work Done</label>
                <input type="text" name="tasks" onChange={e => this.handleInputChange(e, index)} value={value.tasks}></input>
                <label>Date Started</label>
                <input type="date" name="startWorkDate" onChange={e => this.handleInputChange(e, index)} value={value.startWorkDate}></input>
                <label>Date Completed</label>
                <input type="date" name="endWorkDate" onChange={e => this.handleInputChange(e, index)} value={value.endWorkDate}></input>
                <div>
                  {this.state.allWork.length !== 1 && <button onClick={() => this.handleRemoveClick(index)}>Remove</button>}
                  {this.state.allWork.length - 1 === index && <button onClick={() => this.handleAddClick()}>Add</button>}
                </div>
              </div>)
          })}
        </div>
      );
    } else {
      return (
        <div>
          <h1>Work</h1>
          {this.state.allWork.map((value) => {
            return (
              <div key={uniqid()}>
                <p>Company Name: {value.companyName}</p>
                <p>Position: {value.position}</p>
                <p>Work Done: {value.tasks}</p>
                <p>Date Started: {value.startWorkDate}</p>
                <p>Date Completed: {value.endWorkDate}</p>
                <br></br>
              </div>
            )
          })}
        </div>
      )
    }
  };
};

export default Work;