import React, { Component } from "react";
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allSchools: [
        {
          schoolName: "School University",
          field: "Field of Study",
          startEduDate: "2021-01",
          endEduDate: "2022-01",
        },
      ],
    };
  }

  handleInputChange = (e, index) => {
    e.preventDefault();
    const list = [...this.state.allSchools];
    list[index][e.target.name] = e.target.value;
    this.setState({
      allSchools: list,
    });
  };

  handleAddClick = () => {
    this.setState({
      allSchools: [
        ...this.state.allSchools,
        {
          schoolName: "",
          field: "",
          startEduDate: "",
          endEduDate: "",
        },
      ],
    });
  };

  handleRemoveClick = (index) => {
    const list = [...this.state.allSchools];
    list.splice(index, 1);
    this.setState({
      allSchools: list,
    });
  };

  render() {
    if (this.props.editMode) {
      return (
        <div className="flex-col form-cont">
          <h5>Education</h5>
          {this.state.allSchools.map((value, index) => {
            return (
              <div
                key={`value${index + 1}`}
                className="flex-row form-cont form-mini"
              >
                <div className="flex-col">
                  <label>School</label>
                  <input
                    type="text"
                    name="schoolName"
                    onChange={(e) => this.handleInputChange(e, index)}
                    value={value.schoolName}
                  ></input>
                </div>
                <div className="flex-col">
                  <label>Field of Study</label>
                  <input
                    type="text"
                    name="field"
                    onChange={(e) => this.handleInputChange(e, index)}
                    value={value.field}
                  ></input>
                </div>
                <div className="flex-col">
                  <label>Date Started</label>
                  <input
                    type="month"
                    name="startEduDate"
                    onChange={(e) => this.handleInputChange(e, index)}
                    value={value.startEduDate}
                  ></input>
                </div>
                <div className="flex-col">
                  <label>Date Completed</label>
                  <input
                    type="month"
                    name="endEduDate"
                    onChange={(e) => this.handleInputChange(e, index)}
                    value={value.endEduDate}
                  ></input>
                </div>
                <div className="flex-row">
                  {this.state.allSchools.length - 1 === index && (
                    <button
                      className="btn"
                      onClick={() => this.handleAddClick()}
                    >
                      +
                    </button>
                  )}
                  {this.state.allSchools.length !== 1 && (
                    <button
                      className="btn"
                      onClick={() => this.handleRemoveClick(index)}
                    >
                      -
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="flex-col form-cont">
          <h5>Education</h5>
          {this.state.allSchools.map((value) => {
            return (
              <div key={uniqid()} className="flex-col form-cont form-mini">
                <h4>{value.field}</h4>
                <p>
                  {value.schoolName} | {value.startEduDate} - {value.endEduDate}
                </p>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default Education;
