import React, { Component } from "react";
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allSchools: [{
        schoolName: "",
        field: "",
        startEduDate: "",
        endEduDate: "",
      }]
    };
  }

  handleInputChange = (e, index) => {
    e.preventDefault();
    const list = [...this.state.allSchools];
    list[index][e.target.name] = e.target.value
    this.setState({
      allSchools: list
    })
  }

  handleAddClick = () => {
    this.setState({
      allSchools: [...this.state.allSchools, {
        schoolName: "",
        field: "",
        startEduDate: "",
        endEduDate: "",
      }]
    })
  }

  handleRemoveClick = (index) => {
    const list = [...this.state.allSchools]
    list.splice(index, 1);
    this.setState({
      allSchools: list
    })
  }
  
  render() {
    if (this.props.editMode) {
      return (
        <div>
          <h1>Education</h1>
          {this.state.allSchools.map((value,index) => {
            return (
              <div key={uniqid()}>
                <label>School</label>
                <input type="text" name="schoolName" onChange={e => this.handleInputChange(e, index)} value={value.schoolName}></input>
                <label>Field of Study</label>
                <input type="text" name="field" onChange={e => this.handleInputChange(e, index)} value={value.field}></input>
                <label>Date Started</label>
                <input type="date" name="startEduDate" onChange={e => this.handleInputChange(e, index)} value={value.startEduDate}></input>
                <label>Date Completed</label>
                <input type="date" name="endEduDate" onChange={e => this.handleInputChange(e, index)} value={value.endEduDate}></input>
                <div>
                  {this.state.allSchools.length !== 1 && <button onClick={() => this.handleRemoveClick(index)}>Remove</button>}
                  {this.state.allSchools.length - 1 === index && <button onClick={() => this.handleAddClick()}>Add</button>}
                </div>
              </div>)
          })}
        </div>
      );
    } else {
      return (
        <div>
          <h1>Education</h1>
          {this.state.allSchools.map((value) => {
            return (
              <div key={uniqid()}>
                <p>School: {value.schoolName}</p>
                <p>Field of Study: {value.field}</p>
                <p>Date Started: {value.startEduDate}</p>
                <p>Date Completed: {value.endEduDate}</p>
                <br></br>
              </div>
            )
          })}
        </div>
      )
    }    
  };
};

export default Education;